const userController = require('../controllers/user.controller.js');

module.exports = (app) => {
  app.use(function(request, response, next) {
    response.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  // Sign Up User
  app.post('/users/signup', userController.signUpUser);

  // Log In User
  app.post('/users/login', userController.logInUser);

  // Onboard User
  app.post('/users/onboard', userController.onboardUser);

  // Verify Login URL
  app.post('/users/verify-login-url', userController.verifyLoginUrl);


  // Create User
  app.post('/users', userController.createUser);

  // Get all Users
  app.get('/users', userController.getUsers);

  // Get User by ID
  app.get('/users/:id', userController.getUser);

  // Update User
  app.put('/users/:id', userController.updateUser);

  // Delete User
  app.delete('/users/:id', userController.deleteUser);
};
