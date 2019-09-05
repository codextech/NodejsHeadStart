var express = require('express');
var router = express.Router();

const authController = require('../controllers/authController');




// user auth routes
router.post("/login", authController.logIn);











module.exports = router;