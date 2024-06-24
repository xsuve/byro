const Process = require('../models/process.model.js');

// Create Process
exports.createProcess = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  Process.createProcess(
    {
      userId: req.body.userId,
      slug: req.body.slug,
      icon: req.body.icon,
      title: req.body.title,
      description: req.body.description,
      official: req.body.official,
    },
    (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the Process.',
        });
      } else {
        res.send(data);
      }
    }
  );
};

// Get all Process
exports.getAll = (req, res) => {
  Process.mockGetAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving processes.',
      });
    } else {
      res.send(data);
    }
  });
};

// Get Process by ID
exports.getProcess = (req, res) => {
  Process.getProcess(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Process with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving Process with id ' + req.params.id,
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Update Process
exports.updateProcess = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  Process.updateProcess(req.params.id, new Process(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Process with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error updating Process with id ' + req.params.id,
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Delete Process
exports.deleteProcess = (req, res) => {
  Process.deleteProcess(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Process with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Could not delete Process with id ' + req.params.id,
        });
      }
    } else {
      res.send({ message: `Process was deleted successfully!` });
    }
  });
};

// Delete Draft
exports.deleteDraft = (req, res) => {
  Process.deleteDraft(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Draft with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Could not delete Draft with id ' + req.params.id,
        });
      }
    } else {
      res.send({ message: `Draft was deleted successfully!` });
    }
  });
};

// Delete Draft Fields Values
exports.deleteDraftFieldsValues = (req, res) => {
  Process.deleteDraftFieldsValues(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Draft with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            'Could not delete fields values for Draft with id ' + req.params.id,
        });
      }
    } else {
      res.send({ message: `Draft fields values were deleted successfully!` });
    }
  });
};

// Get Process Fields
exports.getProcessFields = (req, res) => {
  Process.getProcessFields(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Process with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving Process fields with id ' + req.params.id,
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Get Process Documents
exports.getProcessDocuments = (req, res) => {
  Process.getProcessDocuments(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Process with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            'Error retrieving Process documents with id ' + req.params.id,
        });
      }
    } else {
      res.send(data);
    }
  });
};

// User Has Process Document
exports.userHasProcessDocument = (req, res) => {
  Process.userHasProcessDocument(
    {
      userId: req.params.userId,
      documentTypeId: req.params.documentTypeId,
    },
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.send(false);
        } else {
          res.send(false);
        }
      } else {
        res.send(true);
      }
    }
  );
};

// Complete Process
exports.completeProcess = (req, res) => {
  Process.completeProcess(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while completing the Process.',
      });
    } else {
      res.send(data);
    }
  });
};

// Draft Process
exports.draftProcess = (req, res) => {
  Process.draftProcess(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while drafting the Process.',
      });
    } else {
      res.send(data);
    }
  });
};

// Create Process Field Value
exports.createProcessFieldValue = (req, res) => {
  Process.createProcessFieldValue(
    {
      processDraftId: req.params.id,
      processFieldId: req.body.processFieldId,
      value: req.body.value,
    },
    (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message ||
            'Some error occurred while creating the Process field value.',
        });
      } else {
        res.send(data);
      }
    }
  );
};

// Update Draft Date
exports.updateDraftDate = (req, res) => {
  Process.updateDraftDate(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Process draft with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error updating Process draft date with id ' + req.params.id,
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Update Process Field Value
exports.updateProcessFieldValue = (req, res) => {
  Process.updateProcessFieldValue(
    req.params.id,
    {
      processDraftId: req.body.processDraftId,
      processFieldId: req.body.processFieldId,
      value: req.body.value,
    },
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found Process field value with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message:
              'Error updating Process field value with id ' + req.params.id,
          });
        }
      } else {
        res.send(data);
      }
    }
  );
};

// Get Drafts by User Id
exports.getDraftsByUserId = (req, res) => {
  Process.getDraftsByUserId(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving user drafts.',
      });
    } else {
      res.send(data);
    }
  });
};

// Get Draft
exports.getDraft = (req, res) => {
  Process.getDraft(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving draft.',
      });
    } else {
      res.send(data);
    }
  });
};

// Get Draft Fields Values by Draft Id
exports.getDraftFieldsValuesByDraftId = (req, res) => {
  Process.getDraftFieldsValuesByDraftId(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Process fields with values with draft id ${req.query.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            'Error retrieving Process fields with values with draft id ' +
            req.query.id,
        });
      }
    } else {
      res.send(data);
    }
  });
};
