const sql = require('./db.js');
const colors = require('colors');
const path = require('path');
const fs = require('fs');

const puppeteer = require('puppeteer');
const handlebars = require('handlebars');

// Constructor
const Process = function (process) {
  this.userId = process.userId;
  this.slug = process.slug;
  this.icon = process.icon;
  this.title = process.title;
  this.description = process.description;
  this.official = process.official;
};

// Create Process
Process.createProcess = (data, result) => {
  sql.query('INSERT INTO processes SET ?', data, (err, res) => {
    if (err) {
      console.log('[Process] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...data });
  });
};

// Get Process by ID
Process.getProcess = (id, result) => {
  sql.query(`SELECT * FROM processes WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log('[Process] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};

// Get all Processes
Process.getProcesses = (result) => {
  sql.query('SELECT * FROM processes', (err, res) => {
    if (err) {
      console.log('[Process] '.red + 'Error: ', err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};
Process.mockGetAll = (result) => {
  const processes = [
    {
      slug: 'processes:vehicle_registration.slug',
      category: 'processes:vehicle_registration.category',
      icon: 'Truck',
      title: 'processes:vehicle_registration.title',
      description: 'processes:vehicle_registration.description',
      official: {
        title: 'processes:vehicle_registration.official.title',
        link: 'https://dgpci.mai.gov.ro/documents-and-forms/inmatriculari',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  result(null, processes);
};

// Update Process
Process.updateProcess = (id, data, result) => {
  sql.query(
    'UPDATE processes SET userId = ?, slug = ?, icon = ?, title = ?, description = ?, official = ? WHERE id = ?',
    [
      data.userId,
      data.slug,
      data.icon,
      data.title,
      data.description,
      data.official,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log('[Process] '.red + 'Error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }

      result(null, { id: id, ...data });
    }
  );
};

// Delete Process
Process.deleteProcess = (id, result) => {
  sql.query('DELETE FROM processes WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('[Process] '.red + 'Error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    result(null, res);
  });
};

// Delete Draft
Process.deleteDraft = (id, result) => {
  sql.query('DELETE FROM process_drafts WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('[Process] '.red + 'Error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    result(null, res);
  });
};

// Delete Draft Fields Values
Process.deleteDraftFieldsValues = (id, result) => {
  sql.query(
    'DELETE FROM process_fields_values WHERE processDraftId = ?',
    id,
    (err, res) => {
      if (err) {
        console.log('[Process] '.red + 'Error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }

      result(null, res);
    }
  );
};

// Get Process Fields
Process.getProcessFields = (id, result) => {
  sql.query(
    `SELECT * FROM process_fields WHERE processId = ${id}`,
    (err, res) => {
      if (err) {
        console.log('[Process] '.red + 'Error: ', err);
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res);
        return;
      }

      result({ kind: 'not_found' }, null);
    }
  );
};

// Get Process Documents
Process.getProcessDocuments = (id, result) => {
  sql.query(
    `SELECT PD.*, DT.slug, DT.title FROM process_documents PD, document_types DT WHERE PD.documentTypeId = DT.id AND PD.processId = ${id}`,
    (err, res) => {
      if (err) {
        console.log('[Process] '.red + 'Error: ', err);
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res);
        return;
      }

      result({ kind: 'not_found' }, null);
    }
  );
};

// User Has Process Document
Process.userHasProcessDocument = (data, result) => {
  sql.query(
    `SELECT * FROM documents D, process_documents PD WHERE D.documentTypeId = PD.documentTypeId AND D.documentTypeId = ${data.documentTypeId} AND D.userId = ${data.userId}`,
    (err, res) => {
      if (err) {
        console.log('[Process] '.red + 'Error: ', err);
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res);
        return;
      }

      result({ kind: 'not_found' }, null);
    }
  );
};

// Complete Process
Process.completeProcess = async (data, result) => {
  const templateFile = path.resolve(
    __dirname,
    '../templates/' + data.processId + '.html'
  );

  const templateData = {
    fieldsValues: { ...data.fieldsValues },
    processDocumentsImages: data.processDocumentsImages,
    siteName: 'papers.com',
    todayDate: data.todayDate,
    options: { ...data.processOptions },
  };

  const templateHtml = fs.readFileSync(templateFile, 'utf8');
  const template = handlebars.compile(templateHtml);
  const html = template(templateData);

  const options = {
    displayHeaderFooter: false,
    format: 'A4',
    printBackground: true,
  };

  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto(`data:text/html;charset=UTF-8,${html}`, {
    waitUntil: 'networkidle0',
  });

  const pdf = await page.pdf(options);
  await browser.close();

  result(null, pdf);
};

// Draft Process
Process.draftProcess = (data, result) => {
  sql.query('INSERT INTO process_drafts SET ?', data, (err, res) => {
    if (err) {
      console.log('[Process] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...data });
  });
};

// Create Process Field Value
Process.createProcessFieldValue = (data, result) => {
  sql.query('INSERT INTO process_fields_values SET ?', data, (err, res) => {
    if (err) {
      console.log('[Process] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...data });
  });
};

// Update Draft Date
Process.updateDraftDate = (id, data, result) => {
  sql.query(
    'UPDATE process_drafts SET lastUpdateDate = ? WHERE id = ?',
    [data.lastUpdateDate, id],
    (err, res) => {
      if (err) {
        console.log('[Process] '.red + 'Error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }

      result(null, { id: id, ...data });
    }
  );
};

// Update Process Field Value
Process.updateProcessFieldValue = (id, data, result) => {
  sql.query(
    'UPDATE process_fields_values SET processDraftId = ?, processFieldId = ?, value = ? WHERE id = ?',
    [data.processDraftId, data.processFieldId, data.value, id],
    (err, res) => {
      if (err) {
        console.log('[Process] '.red + 'Error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }

      result(null, { id: id, ...data });
    }
  );
};

// Get Drafts by User Id
Process.getDraftsByUserId = (id, result) => {
  sql.query(
    `SELECT DR.*, PR.userId, PR.slug, PR.icon, PR.title, PR.description, PR.official FROM process_drafts DR, processes PR WHERE DR.processId = PR.id AND DR.userId = ${id}`,
    (err, res) => {
      if (err) {
        console.log('[Process] '.red + 'Error: ', err);
        result(err, null);
        return;
      }

      result(null, res);
    }
  );
};

// Get Draft
Process.getDraft = (id, result) => {
  sql.query(`SELECT * FROM process_drafts WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log('[Process] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};

// Get Draft Fields Values by Draft Id
Process.getDraftFieldsValuesByDraftId = (id, result) => {
  sql.query(
    `SELECT * FROM process_fields PF, process_fields_values PFV WHERE PF.id = PFV.processFieldId AND PFV.processDraftId = ${id}`,
    (err, res) => {
      if (err) {
        console.log('[Process] '.red + 'Error: ', err);
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res);
        return;
      }

      result({ kind: 'not_found' }, null);
    }
  );
};

module.exports = Process;
