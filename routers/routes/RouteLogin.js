const express = require("express")
const loginRoute = express.Router();

const {Login} = require ("../controllers/Login");

loginRoute.post ("/login", Login )

module.exports = loginRoute ; 
