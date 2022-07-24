const InsertCommentCtl = require("../controllers/paging.controller");
const router = require("express").Router();

router.post("/comments", InsertCommentCtl.insertComment);
router.post("/commentMany", InsertCommentCtl.insertManyComment);

module.exports = router;
