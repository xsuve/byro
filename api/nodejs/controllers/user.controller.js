const User = require('../models/user.model.js');

const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// Sign Up User
exports.signUpUser = (request, response) => {
  if (!request.body) {
    response.status(400).send({
      alert: 'an_error_has_occured'
    });
  }

  User.getUserByEmail(request.body.email, (error) => {
    if (error && error.type == 'NOT_FOUND') {
      User.createUser({
        email: request.body.email,
        fullName: '',
        country: '',
        password: bcrypt.hashSync(request.body.password, 8),
        emailVerificationToken: crypto.randomBytes(16).toString('hex'),
        emailVerified: false,
        signUpDate: new Date(),
        loginToken: '',
        darkMode: false
      }, (error) => {
        if (error) {
          response.status(500).send({
            alert: 'an_error_has_occured'
          });
        }
        
        response.status(200).send({
          alert: 'your_account_has_been_created'
        });
      });
    } else {
      response.status(500).send({
        alert: 'this_email_already_exists'
      });
    }
  });
};


// Onboard User
exports.onboardUser = (request, response) => {
  if (!request.body) {
    response.status(400).send({
      alert: 'an_error_has_occured'
    });
  }

  User.getUser(request.body.userId, (error, user) => {
    if (error && error.type == 'NOT_FOUND') {
      response.status(500).send({
        alert: 'an_error_has_occured'
      });
    }
    
    User.updateUser(request.body.userId, {
      email: user.email,
      fullName: request.body.fullName,
      country: request.body.country,
      password: user.password,
      emailVerificationToken: user.emailVerificationToken,
      emailVerified: user.emailVerified,
      signUpDate: user.signUpDate,
      loginToken: user.loginToken,
      darkMode: user.darkMode
    }, (error, updatedUser) => {
      if (error) {
        response.status(500).send({
          alert: 'an_error_has_occured'
        });
      }
      
      response.status(200).send({
        ...updatedUser
      });
    });
  });
};


// Log In User
exports.logInUser = (request, response) => {
  if (!request.body) {
    response.status(400).send({
      alert: 'an_error_has_occured'
    });
  }

  User.getUserByEmail(request.body.email, (error, user) => {
    if (error) {
      response.status(500).send({
        alert: 'an_error_has_occured'
      });
    }

    const passwordIsValid = bcrypt.compareSync(request.body.password, user.password);
    if (!passwordIsValid) {
      response.status(401).send({
        alert: 'invalid_email_or_password'
      });
    }

    User.logInUser(user, (error) => {
      if (error) {
        response.status(500).send({
          alert: 'an_error_has_occured'
        });
      }
      
      response.status(200).send({
        alert: 'check_your_email_to_login'
      });
    });
  });
};


// Verify Login URL
exports.verifyLoginUrl = (request, response) => {
  if (request.body) {
    if (request.body.loginToken) {
      User.verifyLoginUrl(request.body.loginToken, (error, data) => {
        if (error) {
          if (error.kind === 'invalid_login_url') {
            response.status(403).send({
              alert: 'invalid_login_url'
            });
          } else {
            response.status(500).send({
              message: error.message || 'Some error occurred while verify the login token.'
            });
          }
        } else {
          response.status(200).send({
            id: data.id,
            email: data.email,
            fullName: data.fullName,
            country: data.country,
            signUpDate: data.signUpDate,
            accessToken: data.accessToken,
            darkMode: data.darkMode
          });
        }
      });
    } else {
      response.status(500).send(false);
    }
  } else {
    response.status(500).send(false);
  }
};


// Create User
exports.createUser = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  const user = new User({
    email: req.body.email,
    fullName: req.body.fullName,
    country: req.body.country,
    password: req.body.password,
    emailVerificationToken: req.body.emailVerificationToken,
    emailVerified: req.body.emailVerified,
    signUpDate: req.body.signUpDate,
    loginToken: req.body.loginToken,
    darkMode: req.body.darkMode
  });

  User.createUser(user, (err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.'
      });
    } else {
      res.send(data);
    }
  });
};


// Get all Users
exports.getUsers = (req, res) => {
  User.getUsers((err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    } else {
      res.send(data);
    }
  });
};


// Get User by ID
exports.getUser = (req, res) => {
  User.getUser(req.params.id, (err, data) => {
    if(err) {
      if(err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving User with id ' + req.params.id
        });
      }
    } else {
      res.send(data);
    }
  });
};


// Update User
exports.updateUser = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  User.updateUser(req.params.id, new User(req.body), (err, data) => {
    if(err) {
      if(err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Error updating User with id ' + req.params.id
        });
      }
    } else {
      res.send(data);
    }
  });
};


// Delete User
exports.deleteUser = (req, res) => {
  User.deleteUser(req.params.id, (err, data) => {
    if(err) {
      if(err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Could not delete User with id ' + req.params.id
        });
      }
    } else {
      res.send({ message: `User was deleted successfully!` });
    }
  });
};
