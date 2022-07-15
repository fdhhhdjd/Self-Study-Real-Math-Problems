const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const DownloadImageURL = async (url, mime_type) => {
  const randomName = `${uuidv4()}.${mime_type}`;
  const imagePath = path.resolve(__dirname, "../Assets", `${randomName}`);
  const write = fs.createWriteStream(imagePath);
  const response = await axios({
    url: url,
    method: "GET",
    responseType: "stream",
  });
  response.data.pipe(write);

  new Promise((resolve, reject) => {
    if (resolve) {
      write.on("finish", resolve);
    } else if (reject) {
      write.on("error", reject);
    }
  });

  return randomName;
};
module.exports = {
  DownloadImageURL,
};
