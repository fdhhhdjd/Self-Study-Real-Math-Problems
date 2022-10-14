const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const CLIENT_ID = process.env.GOOGLE_CLIENT_IDS;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRETS;
const REDIRECT_URI = process.env.GOOGLE_URL;

const REFRESH_TOKEN = process.env.GOOGLE_DRIVE_REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

const filePath = path.join(__dirname, "example.jpg");

async function uploadFile() {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: "example.jpg", //This can be name of your choice
        mimeType: "image/jpg",
      },
      media: {
        mimeType: "image/jpg",
        body: fs.createReadStream(filePath),
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

// uploadFile();

async function deleteFile() {
  try {
    const response = await drive.files.delete({
      fileId: "1c48AyeUYQuydRp9zcNPmXcw4IFmcFHNb",
    });
    console.log(response.data, response.status);
  } catch (error) {
    console.log(error.message);
  }
}

// deleteFile();

async function generatePublicUrl() {
  try {
    const fileId = "1h7UAhnOc0rgUuaFFVVI3yMv2aue17cXY";
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
    const result = await drive.files.get({
      fileId: fileId,
      fields: "webViewLink, webContentLink",
    });
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
}

// generatePublicUrl();

module.exports = {
  uploadFile,
  deleteFile,
  generatePublicUrl,
};
