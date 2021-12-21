const express = require("express");
const productRoute = express.Router();

const { addProduct } = require("../controllers/Product")
const {authentication} = require("../middlewares/authentication")

productRoute.post ("/product",authentication , addProduct); 

module.exports = productRoute ; 