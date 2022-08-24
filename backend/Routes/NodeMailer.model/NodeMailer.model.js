const router = require("express").Router();
const NodeMailerCtl = require("../../Controllers/NodeMailer/NodeMailerCtl");

router.get("/sendmail", NodeMailerCtl.NodeMailers);
module.exports = router;
