const multer = require("multer");
const UploadCtl = require("../Controllers/UploadCtl");
const upload = multer({ dest: "backend/Assets/images" });
const { fileUpload } = require("../Middlewares/FileUploadMuller");
const router = require("express").Router();
//!Upload Muller
router.post("/upload/image", upload.single("file"), UploadCtl.UploadMuller);
module.exports = router;

module.exports = router;
