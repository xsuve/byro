const Document = require('../models/document.model.js');

// Create Document
exports.createDocument = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  Document.createDocument({
    documentTypeId: req.body.documentTypeId,
    userId: req.body.userId
  }, (err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Document.'
      });
    } else {
      res.send(data);
    }
  });
};

// Get all Documents
exports.getDocuments = (req, res) => {
  Document.getDocuments((err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving documents.'
      });
    } else {
      res.send(data);
    }
  });
};

// Get Document by ID
exports.getDocument = (req, res) => {
  Document.getDocument(req.params.id, (err, data) => {
    if(err) {
      if(err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Document with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving Document with id ' + req.params.id
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Update Document
exports.updateDocument = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  Document.updateDocument(req.params.id, new Document(req.body), (err, data) => {
    if(err) {
      if(err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Document with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Error updating Document with id ' + req.params.id
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Delete Document
exports.deleteDocument = (req, res) => {
  Document.deleteDocument(req.params.id, (err, data) => {
    if(err) {
      if(err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Document with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Could not delete Document with id ' + req.params.id
        });
      }
    } else {
      res.send({ message: `Document was deleted successfully!` });
    }
  });
};


// Create Document Field Value
exports.createDocumentFieldValue = (req, res) => {
  Document.createDocumentFieldValue({
    documentId: req.params.id,
    documentFieldId: req.body.documentFieldId,
    value: req.body.value
  }, (err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Document field value.'
      });
    } else {
      res.send(data);
    }
  });
};

// Get Documents By User Id
exports.getDocumentsByUserId = (req, res) => {
  Document.getDocumentsByUserId(req.params.id, (err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving documents.'
      });
    } else {
      res.send(data);
    }
  });
};

// Get Document Type by Id
exports.getDocumentTypeBySlug = (req, res) => {
  Document.getDocumentTypeBySlug(req.params.slug, (err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving document type.'
      });
    } else {
      res.send(data);
    }
  });
};

// Get Document Type by Slug
exports.getDocumentTypeById = (req, res) => {
  Document.getDocumentTypeById(req.params.id, (err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving document type.'
      });
    } else {
      res.send(data);
    }
  });
};

// Get Document Fields by Document Type Id
exports.getDocumentFieldsByDocumentTypeId = (req, res) => {
  Document.getDocumentFieldsByDocumentTypeId(req.params.id, (err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving document fields.'
      });
    } else {
      res.send(data);
    }
  });
};

// Get Document Fields Values by Document Id
exports.getDocumentFieldsValuesByDocumentId = (req, res) => {
  Document.getDocumentFieldsValuesByDocumentId(req.params.id, (err, data) => {
    if(err) {
      if(err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Document fields with values with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving Document fields with values with id ' + req.params.id
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Get Document Types
exports.getDocumentTypes = (req, res) => {
  Document.getDocumentTypes((err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving document types.'
      });
    } else {
      res.send(data);
    }
  });
};

// Get Add Documents QR Code
exports.getAddDocumentsQRCode = (req, res) => {
  Document.getAddDocumentsQRCode(req.query.url, (err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving QR code.'
      });
    } else {
      res.send(data);
    }
  });
};


// OCR
exports.ocr = (req, res) => {
  Document.ocr({
    documentTypeId: req.body.documentTypeId,
    imageData: req.body.imageData
  }, (err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while doing OCR.'
      });
    } else {
      res.send(data);
    }
  });
};
