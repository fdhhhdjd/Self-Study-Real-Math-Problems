const InsertCommentCtl = require("../controllers/paging.controller");
const router = require("express").Router();
//Stack overFlow
router.post("/comments", InsertCommentCtl.insertComment);
router.post("/commentMany", InsertCommentCtl.insertManyComment);
router.get("/list", InsertCommentCtl.List);
/// HackNew
router.post("/hacknewcomments", InsertCommentCtl.insertHackNewsComment);
router.post("/hacknewscommentMany", InsertCommentCtl.insertManyHackNewsComment);
router.get("/listhacknews", InsertCommentCtl.ListHackNews);

module.exports = router;
