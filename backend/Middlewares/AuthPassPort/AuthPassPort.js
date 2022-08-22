const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const auth = (req, res, next) => {
  try {
    const user = {
      username: "taidev",
      password: "123",
    };
    passport.use(
      new LocalStrategy((username, password, done) => {
        console.log(`username:::${username}, pass::::${password}`);
        if (username === user.username && password === user.password) {
          return done(null, {
            username,
            password,
            active: true,
          });
        }
        done(null, false);
      })
    );

    passport.serializeUser((user, done) => done(null, user.username));

    passport.deserializeUser((username, done) => {
      console.log(`deserializeUser:::`, username);
      //check username
      if (username === user.username) {
        return done(null, {
          username,
          active: true,
        });
      }
      done(null, false);
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      msg: err.message,
    });
  }
};

module.exports = auth;
