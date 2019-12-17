const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const favoritesRouter = require("./favorites");

router.use("/", userRouter);
router.use("/", favoritesRouter);

module.exports = router;
