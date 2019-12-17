const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../db/models/User");

passport.use(
  new LocalStrategy({ email: "email" }, function(email, password, done) {
    User.findOne({ where: { email: email } })
      .then(function(user) {
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      })
      .catch(err => console.log(err));
  })
);

module.exports = passport;
