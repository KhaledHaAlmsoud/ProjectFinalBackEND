const express = require("express");
const signUpRoute = express.Router();

const  postSignUp  = require("../controllers/SignUp").postSignUp;
signUpRoute.post( "/signUp", postSignUp );

module.exports = signUpRoute; 

