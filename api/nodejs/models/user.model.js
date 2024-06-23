const config = require('../config/config.js');
const sql = require('./db.js');
const colors = require('colors');

const jwt = require('jsonwebtoken');

const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');
const nodemailer = require('nodemailer');

// Constructor
const User = (user) => {
  this.email = user.email;
  this.fullName = user.fullName;
  this.country = user.country;
  this.password = user.password;
  this.emailVerificationToken = user.emailVerificationToken;
  this.emailVerified = user.emailVerified;
  this.signUpDate = user.signUpDate;
  this.loginToken = user.loginToken;
  this.darkMode = user.darkMode;
};


// Create User
User.createUser = (data, result) => {
  sql.query('INSERT INTO users SET ?', data, (error, response) => {
    if (error) {
      console.log('[User] '.red + 'Error: ', error);
      result(error, null);
      return;
    }

    result(null, {
      id: response.insertId,
      ...data
    });
  });
};


// Get User by ID
User.getUser = (userId, result) => {
  sql.query(`SELECT * FROM users WHERE id = ${userId}`, (error, response) => {
    if (error) {
      console.log('[User] '.red + 'Error: ', error);
      result(error, null);
      return;
    }

    if (response.length) {
      result(null, response[0]);
      return;
    }

    result({ type: 'NOT_FOUND' }, null);
  });
};


// Get all Users
User.getUsers = result => {
  sql.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.log('[User] '.red + 'Error: ', err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};


// Update User
User.updateUser = (userId, data, result) => {
  sql.query(
    'UPDATE users SET email = ?, fullName = ?, country = ?, password = ?, emailVerificationToken = ?, emailVerified = ?, loginToken = ?, darkMode = ? WHERE id = ?',
    [data.email, data.fullName, data.country, data.password, data.emailVerificationToken, data.emailVerified, data.loginToken, data.darkMode, userId],
    (error, response) => {
      if (error) {
        console.log('[User] '.red + 'Error: ', error);
        result(null, error);
        return;
      }

      if (response.affectedRows == 0) {
        result({ type: 'NOT_FOUND' }, null);
        return;
      }

      result(null, {
        id: userId,
        ...data
      });
    }
  );
};


// Delete User
User.deleteUser = (id, result) => {
  sql.query('DELETE FROM users WHERE id = ?', id, (err, res) => {
    if(err) {
      console.log('[User] '.red + 'Error: ', err);
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


// Get User by Email
User.getUserByEmail = (email, result) => {
  sql.query(`SELECT * FROM users WHERE email = "${email}"`, (error, response) => {
    if (error) {
      console.log('[User] '.red + 'Error: ', error);
      result(error, null);
      return;
    }

    if (response.length) {
      result(null, response[0]);
      return;
    }

    result({ type: 'NOT_FOUND' }, null);
  });
};


// Log in user
User.logInUser = (user, result) => {
  const loginToken = jwt.sign({ email: user.email }, config.secret, {
    expiresIn: '1h'
  });

  sql.query('UPDATE users SET loginToken = ? WHERE id = ?', [loginToken, user.id], async (error, response) => {
    if (error) {
      console.log('[User] '.red + 'Error: ', error);
      result(null, error);
      return;
    }

    if (response.affectedRows == 0) {
      result({ type: 'NOT_FOUND' }, null);
      return;
    }

    const checkEmail = path.resolve(__dirname, '../emails/check_email.html');
    const loginUrl = config.baseUrl + '/verify-login/' + loginToken;
    const _data = {
      site_name: 'papers.com',
      full_name: user.fullName,
      login_link: loginUrl
    };
    const templateHtml = fs.readFileSync(checkEmail, 'utf8');
    const template = handlebars.compile(templateHtml);
    const html = template(_data);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.gmailEmail,
        pass: config.gmailAppPassword
      }
    });

    const info = await transporter.sendMail({
      from: '"Papers" ' + config.gmailEmail,
      to: user.email,
      subject: 'Log into your Papers account',
      text: 'Link: ' + loginUrl,
      html: html,
    });

    if (info.err) {
      console.log('[User] '.red + 'Error: ', info.err);
      result(info.err, null);
      return;
    }

    result(null, true);
  });
};


// Verify login URL
User.verifyLoginUrl = (loginToken, result) => {
  jwt.verify(loginToken, config.secret, (err, decoded) => {
    if (err) {
      result(null, err);
      return;
    }

    if (decoded.email) {
      sql.query(`SELECT * FROM users WHERE email = "${decoded.email}"`, (err, userRes) => {
        if (err) {
          console.log('[User] '.red + 'Error: ', err);
          result(err, null);
          return;
        }

        if (userRes.length) {
          if (userRes[0].loginToken != '' && userRes[0].loginToken == loginToken) {
            sql.query(`UPDATE users SET loginToken = "" WHERE id = "${userRes[0].id}"`, (err, res) => {
              if (err) {
                console.log('[User] '.red + 'Error: ', err);
                result(null, err);
                return;
              }

              if (res.affectedRows == 0) {
                result({ kind: 'not_found' }, null);
                return;
              }

              const accessToken = jwt.sign({ email: userRes[0].email }, config.secret, {
                expiresIn: '7d'
              });

              result(null, {
                ...userRes[0],
                accessToken: accessToken
              });
            });
          } else {
            result({ kind: 'invalid_login_url' }, null);
            return;
          }
        }
      });
    }
  });
};


module.exports = User;
