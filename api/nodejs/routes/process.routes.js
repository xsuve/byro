const processController = require('../controllers/process.controller.js');
const verifyAccessToken = require('../middleware/verifyAccessToken.js');

module.exports = (app) => {
  app.use(function (request, response, next) {
    response.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  // Create Process
  app.post('/processes', processController.createProcess);

  // Get all Process
  app.get('/processes', processController.getAll);

  // Get Process by ID
  app.get('/processes/:id', processController.getProcess);

  // Update Process
  app.put('/processes/:id', processController.updateProcess);

  // Delete Process
  app.delete('/processes/:id', processController.deleteProcess);

  // Delete Draft
  app.delete('/process-drafts/:id', processController.deleteDraft);

  // Delete Draft Fields Values
  app.delete(
    '/process-drafts/:id/process-fields-values',
    processController.deleteDraftFieldsValues
  );

  // Draft Process
  app.post('/process-drafts', processController.draftProcess);

  // Update Draft Date
  app.put('/process-drafts/:id/update-date', processController.updateDraftDate);

  // Get Drafts by User Id
  app.get('/process-drafts/users/:id', processController.getDraftsByUserId);

  // Get Draft
  app.get('/process-drafts/:id', processController.getDraft);

  // Get Draft Fields Values by Draft Id
  app.get(
    '/process-drafts/:id/process-fields-values',
    processController.getDraftFieldsValuesByDraftId
  );

  // Get Process Fields
  app.get('/processes/:id/process-fields', processController.getProcessFields);

  // Create Process Field Value
  app.post(
    '/processes/:id/process-fields-values',
    processController.createProcessFieldValue
  );

  // Get Process Documents
  app.get(
    '/processes/:id/process-documents',
    processController.getProcessDocuments
  );

  // User Has Process Document
  app.get(
    '/processes/users/:userId/process-documents/:documentTypeId',
    processController.userHasProcessDocument
  );

  // Complete Process
  app.post('/processes/complete', processController.completeProcess);

  // Update Process Field Value
  app.put(
    '/process-fields-values/:id',
    processController.updateProcessFieldValue
  );
};
