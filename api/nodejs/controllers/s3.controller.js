const s3 = require('../models/s3.model.js');


// Upload Document Images
exports.uploadDocumentImages = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  s3.uploadImage({
    documentId: req.params.id,
    imageData: req.body.imageData,
    imageIndex: 0
  }, (err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while uploading images.'
      });
    } else {
      res.send(data);
    }
  });
};


// Get Images
exports.getImage = (req, res) => {
  s3.getImageSignedUrl(req.query.imageKey, (err, data) => {
    if(err) {
      res.status(500).send({
        message: 'Error retrieving image.'
      });
    } else {
      res.send(data);
    }
  });
};


// Get Document Images
exports.getDocumentImages = (req, res) => {
  s3.getDocumentImages(req.params.id, (err, data) => {
    if(err) {
      if(err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Document images folder with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving Document images with id ' + req.params.id
        });
      }
    } else {
      res.send(data);
    }
  });
};


// Delete Document Images
exports.deleteDocumentImages = (req, res) => {
  s3.deleteDocumentImages(req.params.id, (err, data) => {
    if(err) {
      if(err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Document images folder with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Could not delete Document images with id ' + req.params.id
        });
      }
    } else {
      res.send({ message: `Document images were deleted successfully!` });
    }
  });
};
