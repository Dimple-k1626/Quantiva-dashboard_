const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validate = require('../middleware/validateMiddleware');

router.post('/register', validate(['name','email','password']), authController.register);
router.post('/login', validate(['email','password']), authController.login);

module.exports = router;