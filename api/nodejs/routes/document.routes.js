const documentController = require('../controllers/document.controller.js');
const verifyAccessToken = require('../middleware/verifyAccessToken.js');

module.exports = (app) => {
  app.use(function(request, response, next) {
    response.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });


  // Create Document
  app.post('/documents', documentController.createDocument);

  // Get all Documents
  app.get('/documents', [verifyAccessToken], documentController.getDocuments);

  // Get Document by ID
  app.get('/documents/:id', documentController.getDocument);

  // Update Document
  app.put('/documents/:id', documentController.updateDocument);

  // Delete Document
  app.delete('/documents/:id', documentController.deleteDocument);


  // Create Document Field Value
  app.post('/documents/:id/document-fields-values', documentController.createDocumentFieldValue);

  // Get Documents By User Id
  app.get('/documents/users/:id', documentController.getDocumentsByUserId);

  // Get Document Fields Values by Document Id
  app.get('/documents/:id/document-fields-values', documentController.getDocumentFieldsValuesByDocumentId);

  // Get Document Fields by Document Type Id
  app.get('/document-fields/document-types/:id', documentController.getDocumentFieldsByDocumentTypeId);


  // Get Document Types
  app.get('/document-types', documentController.getDocumentTypes);

  // Get Document Type by Id
  app.get('/document-types/:id', documentController.getDocumentTypeById);

  // Get Document Type by Slug
  app.get('/document-types/slug/:slug', documentController.getDocumentTypeBySlug);


  // Get Add Documents QR Code
  app.get('/add-documents/qrcode', documentController.getAddDocumentsQRCode);


  // Create Document Field Value
  app.post('/documents/ocr', documentController.ocr);
};
