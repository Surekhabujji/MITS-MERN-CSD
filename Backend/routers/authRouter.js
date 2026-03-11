const express=require('express');
const { login, register } = require('../controllers/authController');
const authRouters=express.Router();
authRouters.post('/signup',register);
authRouters.post('/login',login);


module.exports=authRouters;