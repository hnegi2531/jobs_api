const express = require('express');
const { login, register } = require('../controllers/auth');
const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);

module.exports = { authRouter };