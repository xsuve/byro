const s3Controller = require('../controllers/s3.controller.js');

module.exports = (app) => {
  app.use(function(request, response, next) {
    response.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });


  // Upload Document Images
  app.post('/s3/:id', s3Controller.uploadDocumentImages);

  // Get Image
  app.get('/s3', s3Controller.getImage);

  // Get Document Images
  app.get('/s3/:id', s3Controller.getDocumentImages);

  // Update Document
  // app.put('/s3/:id', s3Controller.updateDocument);

  // Delete Document Images
  app.delete('/s3/:id', s3Controller.deleteDocumentImages);
};
