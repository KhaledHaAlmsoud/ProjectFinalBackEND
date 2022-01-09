const express = require("express");
const cartRoute = express.Router();

const {   postCart , getCart , deleteCart } = require("../controllers/cart")
const {authentication} = require("../middlewares/authentication")

cartRoute.post ("/cart/:id", authentication , postCart ); 
cartRoute.get ("/cart", authentication , getCart );
cartRoute.delete ("/Cart/:id", authentication , deleteCart );

module.exports = cartRoute ; 
