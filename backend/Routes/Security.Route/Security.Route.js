const router = require("express").Router();
const SecurityApi = require("../../Controllers/Security/SecurityApi");

router.get("/replay", SecurityApi.Security);
module.exports = router;
