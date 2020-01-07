const express = require("express");
const router = express.Router();
const User = require("../db/models/User");
const passport = require("passport");

router.post("/register", function (req, res, next) {
  User.create(req.body)
    .then(userData => {
      console.log(`Lo cargaste bien ${JSON.stringify(userData)}`);
      res.send(userData);
    })

    .catch(err => res.send(err));
});

router.post("/login", passport.authenticate("local"), (req, res) => {

  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send("bye");
});

router.get("/users", (req, res) => {

  User.findByPk(req.user.id).then(user => {

    res.send(user)
  })
})

module.exports = router;
