const userOtpCtl = require("../controllers/userOpt.controller");
const router = require("express").Router();
//Register Otp
router.post("/register", userOtpCtl.registerUsers);

// Check verify OTP
router.post("/otp", userOtpCtl.verifyOtpUser);
module.exports = router;
