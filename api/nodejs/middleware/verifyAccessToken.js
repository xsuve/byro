const config = require('../config/config.js');
const jwt = require('jsonwebtoken');


verifyAccessToken = (request, response, next) => {
  const accessToken = request.headers['x-access-token'];

  if (!accessToken) {
    return response.status(403).send({
      message: 'No access token provided!'
    });
  }

  jwt.verify(accessToken, config.secret, (error, decoded) => {
    if (error) {
      return response.status(401).send({
        message: 'Unauthorized!'
      });
    }

    request.email = decoded.email;
    next();
  });
};

module.exports = verifyAccessToken;
