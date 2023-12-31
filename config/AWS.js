
const AWS = require('aws-sdk');


const S3 = new AWS.S3({
    accessKeyId:process.env.AWS_ACCESS_KEY,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
    region:process.env.AWS_REGION
});

module.exports = S3;
