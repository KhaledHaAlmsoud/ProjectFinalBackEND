const express = require("express");
const productRoute = express.Router();

const { addProduct , getProduct , deleteProduct , updateProduct ,getOneProduct} = require("../controllers/Product")
const {authentication} = require("../middlewares/authentication")

productRoute.post ("/Product", authentication , addProduct ); 
productRoute.get ("/Product", getProduct );
productRoute.get ("/OneProduct/:id", getOneProduct );
productRoute.delete ("/Product/:id" , authentication , deleteProduct );
productRoute.put("/Product/:id" , authentication, updateProduct)
// id = عشان ناخذ اي شي بعد السلاش .

module.exports = productRoute ;  