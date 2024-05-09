const express = require("express");

const signupController = require("../controllers/signup.controller");

const router = express.Router();

router.post("/register",signupController.createUser);

module.exports = router;