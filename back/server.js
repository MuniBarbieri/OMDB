const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const db = require("./db/db");
const Favorites = require("./db/models/Favorites");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//PASSPORT//

const passport = require("passport");
var cookieParser = require("cookie-parser");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../back/db/models/User");
app.use(cookieParser());
passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // input name for username
      passwordField: "password" // input name for password
    },
    function(email, password, done) {
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
    }
  )
); //guarda en req.session.user mi data etc.

// serialize: how we save the user and stored in session object by express-session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// deserialize: how we look for the user
passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(user => done(null, user));
});
//////////////express-session  init/////////////
app.use(session({ secret: "bootcamp", resave: true, saveUninitialized: true })); // req.session // The secret is used to sign the session id cookie, to prevent the cookie to be tampered with.
//////////// passport init and session connection///////////////////
app.use(passport.initialize());
app.use(passport.session()); // Express stuffs the id of the session object into a cookie on the client's browser, which gets passed back to express in a header on every request. This is how Express identifies multiple requests as belonging to a single session even if the user is not logged in.

// auth strategy definition | localstrategy | http://www.passportjs.org/packages/passport-local/

//////////////////////////////////

app.use(express.static(path.join(__dirname, "./public")));
app.use("/api", require("./routes/index"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html")); //"busca este archivo y lo manda"
});

db.sync().then(() => {
  console.log("Conectado a la base de datos");
  app.listen(8080);
  console.log("Servidor escuchando en el puerto 8080");
});
