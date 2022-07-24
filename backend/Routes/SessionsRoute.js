const SessionsCtl = require("../Controllers/sessionCtl");
const router = require("express").Router();

//Get Session
router.get("/get-session", SessionsCtl.getSessions);

//Set Session
router.get("/set-session", SessionsCtl.setSessions);
module.exports = router;
