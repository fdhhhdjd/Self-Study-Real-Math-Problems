const router = require("express").Router();
const path = require("path");
//Get Link Files
router.get("/images/:path", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../Assets/images/" + req.params.path));
});
module.exports = router;
