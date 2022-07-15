const DownloadVideoUrlCtl = require("../Controllers/DownloadVideoUrlCtl.js");
const router = require("express").Router();

//Download Video
router.post("/download-video", DownloadVideoUrlCtl.downloadVideoFromURL);

//Download Image
router.post("/download-images", DownloadVideoUrlCtl.CheckImageFromURL);

module.exports = router;
