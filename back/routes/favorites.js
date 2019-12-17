const express = require("express");
const router = express.Router();
const Favorites = require("../db/models/Favorites");

router.post("/favorites", function (req, res, next) {
  Favorites.create(req.body)
    .then(favMovie => {
      res.send(favMovie);
    })

    .catch(err => console.log(err, "Error"));
});

module.exports = router;
