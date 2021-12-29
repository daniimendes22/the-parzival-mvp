import AWS from "aws-sdk";
require('dotenv').config()

AWS.config.update({
    accessKeyId: process.env.DB_ACCESS_KEY_ID,
    secretAccessKey: process.env.DB_SECRET_ACCESS_KEY,
  region: "eu-central-1",
});

const db = new AWS.DynamoDB({ apiVersion: "latest" });

export default db;
