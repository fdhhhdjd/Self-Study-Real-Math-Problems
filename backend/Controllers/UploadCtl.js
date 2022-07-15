const axios = require("axios");
const fs = require("fs");
const path = require("path");
const HELP = require("../Utils/help");
const detectMime = require("mime");
const DownloadVideoUrlCtl = {
  UploadMuller: async (req, res) => {
    let file = req.file;
    if (!file) {
      return res.status(400).json({
        status: 400,
        msg: "Not file to upload",
      });
    }
    var extFile = path.extname(file.originalname);
    var filePath = `/backend/Assets/images/${file.filename}${extFile}`;
    var tempPath = req.file.path;
    var targetPath = path.join(__dirname, `../../${filePath}`);
    fs.rename(tempPath, targetPath, async (error) => {
      if (error != null) {
        console.log(error);
        return res.json({
          status: 400,
          success: false,
          msg: "error",
        });
      }
    });
    return res.status(200).json({
      status: 200,
      msg: "Upload Success",
      url: `http://${process.env.DEV}${filePath}`,
    });
  },
};
module.exports = DownloadVideoUrlCtl;
