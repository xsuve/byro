const config = require('../config/config.js');

const sql = require('./db.js');
const colors = require('colors');
const path = require('path');
const fs = require('fs');
const QRCode = require('qrcode');
const sharp = require('sharp');
const vision = require('@google-cloud/vision');

// Constructors
const Document = function(document) {
  this.documentTypeId = document.documentTypeId;
  this.userId = document.userId;
};

// Create Document
Document.createDocument = (data, result) => {
  sql.query('INSERT INTO documents SET ?', data, (err, res) => {
    if(err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...data });
  });
};

// Get Document by ID
Document.getDocument = (id, result) => {
  sql.query(`SELECT * FROM documents WHERE id = ${id}`, (err, res) => {
    if(err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    if(res.length) {
      result(null, res[0]);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};

// Get all Documents
Document.getDocuments = result => {
  sql.query('SELECT * FROM documents', (err, res) => {
    if (err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

// Update Document
Document.updateDocument = (id, data, result) => {
  sql.query(
    'UPDATE documents SET documentTypeId = ?, userId = ? WHERE id = ?',
    [data.documentTypeId, data.userId, id],
    (err, res) => {
      if(err) {
        console.log('[Document] '.red + 'Error: ', err);
        result(null, err);
        return;
      }

      if(res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }

      result(null, { id: id, ...data });
    }
  );
};

// Delete Document
Document.deleteDocument = (id, result) => {
  sql.query('DELETE FROM documents WHERE id = ?', id, (err, res) => {
    if(err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(null, err);
      return;
    }

    if(res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    result(null, res);
  });
};


// Create Document Field Value
Document.createDocumentFieldValue = (data, result) => {
  sql.query('INSERT INTO document_fields_values SET ?', data, (err, res) => {
    if(err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...data });
  });
};

// Get Documents by User Id
Document.getDocumentsByUserId = (id, result) => {
  sql.query(`SELECT * FROM documents WHERE userId = ${id}`, (err, res) => {
    if(err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    if(res.length) {
      result(null, res);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};

// Get Document Type by Id
Document.getDocumentTypeById = (id, result) => {
  sql.query(`SELECT * FROM document_types WHERE id = ${id}`, (err, res) => {
    if(err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    if(res.length) {
      result(null, res[0]);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};

// Get Document Type by Slug
Document.getDocumentTypeBySlug = (slug, result) => {
  sql.query(`SELECT * FROM document_types WHERE slug = "${slug}"`, (err, res) => {
    if(err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    if(res.length) {
      result(null, res[0]);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};

// Get Document Fields by Document Type Id
Document.getDocumentFieldsByDocumentTypeId = (id, result) => {
  sql.query(`SELECT * FROM document_fields WHERE documentTypeId = ${id}`, (err, res) => {
    if(err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    if(res.length) {
      result(null, res);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};

// Get Document Fields Values by Document Id
Document.getDocumentFieldsValuesByDocumentId = (id, result) => {
  sql.query(`SELECT * FROM document_fields DF, document_fields_values DFV WHERE DF.id = DFV.documentFieldId AND DFV.documentId = ${id}`, (err, res) => {
    if(err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    if(res.length) {
      result(null, res);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};

// Get Document Types
Document.getDocumentTypes = result => {
  sql.query('SELECT * FROM document_types', (err, res) => {
    if (err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

// Get Add Documents QR Code
Document.getAddDocumentsQRCode = (url, result) => {
  QRCode.toDataURL(url, (err, res) => {
    if(err) {
      console.log('[Document] '.red + 'Error: ', err);
      result(err, null);
      return;
    }

    if(res.length) {
      result(null, res);
      return;
    }
  })
};


// OCR
Document.ocr = async (data, result) => {
  let fieldsValues = {};

  const imageBuffer = Buffer.from(data.imageData);

  const resizedImage = await sharp(imageBuffer).resize({
    width: 500,
    fit: sharp.fit.inside
  });


  /* Multiple crops on the image and horizontally merge all the crops into one single image. */
  const boundings_json = fs.readFileSync(path.resolve(__dirname, '../ocr/boundings_identity-card_ro.json'));
  const boundings = JSON.parse(boundings_json);

  /*

  "personalIdentificationNumber": {
    "left": 176,
    "top": 67,
    "width": 119,
    "height": 19,
    "index": -1
  },

  */

  Document.getDocumentFieldsByDocumentTypeId(data.documentTypeId, async (err, res) => {
    if (res) {
      let imageFields = [];
      let templateHeight = 0;
      let extraction;

      for (const field of res) {
        extraction = await resizedImage.extract({
          left: boundings[field.name].left,
          top: boundings[field.name].top,
          width: boundings[field.name].width,
          height: boundings[field.name].height
        }).toBuffer();

        imageFields.push({
          buffer: extraction,
          width: boundings[field.name].width,
          height: boundings[field.name].height
        });

        templateHeight += boundings[field.name].height;
      }

      const template = await sharp(path.resolve(__dirname, '../ocr/template.jpg')).resize({
        width: Math.max(...imageFields.map(imageField => imageField.width)),
        height: templateHeight
      });

      let top = 0;
      const compositionArray = [];
      imageFields.forEach(imageField => {
        compositionArray.push({
          input: imageField.buffer,
          top: top,
          left: 0
        });

        top += imageField.height;
      });

      let image;
      if (config.production) {
        image = await template.composite(compositionArray).toBuffer();
      } else {
        image = await template.composite(compositionArray).toFile('out.jpg');
      }

      if (image && config.production) {
        const client = new vision.ImageAnnotatorClient({
          keyFilename: path.resolve(__dirname, '../ocr/papers-app-ocr.json')
        });

        try {
          const [ocrResult] = await client.textDetection(image);

          if (ocrResult) {
            const documentData = ocrResult.textAnnotations;

            if (documentData[0]) {
              const documentDataArray = documentData[0].description.split('\n');

              Object.keys(boundings).forEach(key => {
                fieldsValues[key] = documentDataArray[boundings[key].index];
              });

              result(null, fieldsValues);
            }
          }
        } catch(err) {
          console.log('[Document][OCR] '.red + 'Error: ', err);
        }
      }
    }
  });


  /* White mask cover over image and keep only regions of interest. */
  /*const mask = await sharp(path.resolve(__dirname, '../ocr/mask_identity-card_ro.png')).toBuffer();
  const image = await resizedImage.composite(
    [
      {
        input: mask
      }
    ]
  ).toBuffer();*/


  /* Get the values from the fields of interest from the whole extracted text in image. */
};



module.exports = Document;
