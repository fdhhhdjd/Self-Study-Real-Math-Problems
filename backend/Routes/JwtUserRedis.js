const JwtUSerCtl = require("../Controllers/JwtRedis");
const router = require("express").Router();

//login
router.get("/login", JwtUSerCtl.Login);

//Protected
router.post("/protected", JwtUSerCtl.Protected);

module.exports = router;
