const PassPortLocalCtrl = require("../../Controllers/Full-Passport/PassportLocalCtl");
const router = require("express").Router();
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const auth = require("../../Middlewares/AuthPassPort/AuthPassPort")(passport);
//Pass Port Local
auth;
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  }),
  PassPortLocalCtrl.Login
);
router.get("/profile", PassPortLocalCtrl.Profile);

module.exports = router;
