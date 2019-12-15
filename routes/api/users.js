const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// @route POST api/users
// @desc Register user
// @access Public
router.post("/", (req, res) => {
  res.send("User route");
});

module.exports = router;
