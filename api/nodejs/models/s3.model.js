const config = require('../config/config.js');
const colors = require('colors');
var aws = require('aws-sdk');


// Constructor
const s3 = function(s3) {};
const awsS3 = new aws.S3({
  region: 'eu-central-1',
  accessKeyId: config.AWSAccessKeyId,
  secretAccessKey: config.AWSSecretKey
});


// Upload Document Images
s3.uploadDocumentImages = (documentId, images, result) => {

};


// Upload Image
s3.uploadImage = (data, result) => {
  const imageBuffer = Buffer.from(data.imageData);

  awsS3.putObject({
    Bucket: config.AWSBucket,
    Key: 'documents/' + data.documentId + '/' + (data.imageIndex + 1) + '.jpg',
    Body: imageBuffer
  }, (err, res) => {
    if(err) {
      console.log('[S3] '.red + 'Error: ', err);
    } else {
      result(null, res);
    }
  });
};


// Get Image Signed Url
s3.getImageSignedUrl = (imageKey, result) => {
  awsS3.getSignedUrl('getObject', {
    Bucket: config.AWSBucket,
    Key: imageKey
  }, (err, imageUrl) => {
    if(err) {
      console.log('[S3] '.red + 'Error: ', err);
      result(null, err);
      return;
    }

    result(null, imageUrl);
  });
};


// Encode Image
s3.encodeImage = (imageBody) => {
  let buffer = Buffer.from(imageBody);
  let base64 = buffer.toString('base64');

  return base64;
};


// Get Image Signed Url
s3.getImage = (imageKey, result) => {
  awsS3.getObject({
    Bucket: config.AWSBucket,
    Key: imageKey
  }, (err, imageData) => {
    if(err) {
      console.log('[S3] '.red + 'Error: ', err);
      result(null, err);
      return;
    }

    result(null, base64);
  });
};


// Get Document Images
s3.getDocumentImages = (documentId, result) => {
  awsS3.listObjectsV2({
    Bucket: config.AWSBucket,
    Prefix: 'documents/' + documentId + '/',
    Delimiter: '/'
  }, (err, imageObjects) => {
    if(err) {
      console.log('[S3] '.red + 'Error: ', err);
      result(null, err);
      return;
    }

    result(null, imageObjects.Contents);
  });
};


module.exports = s3;
