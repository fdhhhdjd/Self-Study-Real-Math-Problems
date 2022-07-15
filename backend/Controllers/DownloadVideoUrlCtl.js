const axios = require("axios");
const fs = require("fs");
const path = require("path");
const HELP = require("../Utils/help");
const detectMime = require("mime");
const Download = require("image-downloader");
const { DownloadImageURL } = require("../models/DowloadUrl");
const DownloadVideoUrlCtl = {
  downloadVideoFromURL: async (req, res) => {},
  CheckImageFromURL: async (req, res) => {
    try {
      // return res.download(
      //   "./backend/Assets/35ea487e-897d-438e-b65f-2810cb003bd1.jpeg"
      // );
      const { url } = req.body;
      const CheckUrl = HELP.checkUR(url);
      if (CheckUrl) {
        const data = detectMime.getType(url);
        const mime_type = detectMime.getExtension(data);
        const item = await DownloadImageURL(url, mime_type);

        if (item) {
          const filePath = HELP.downloadImageFromURL(item);

          // let a = "35ea487e-897d-438e-b65f-2810cb003bd1.jpeg";
          let a = item.toString();
          return res.download(path.resolve(__dirname, "../Assets/", `${a}`));
        }
      }
    } catch (error) {
      return res.status(503).json({
        status: 503,
        msg: "server busy",
        error,
      });
    }
  },
};
module.exports = DownloadVideoUrlCtl;
