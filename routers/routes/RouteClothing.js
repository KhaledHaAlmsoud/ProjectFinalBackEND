const express = require("express");
const clothingRoute = express.Router();

const { addProduct , getProduct , deleteProduct , updateProduct ,getOneProduct} = require("../controllers/Clothing")
const {authentication} = require("../middlewares/authentication")

clothingRoute.post ("/Clothing", authentication , addProduct ); 
clothingRoute.get ("/Clothing", getProduct );
clothingRoute.get ("/oneClothing/:id", getOneProduct );
clothingRoute.delete ("/Clothing/:id" , authentication , deleteProduct );
clothingRoute.put("/Clothing/:id" , authentication, updateProduct)
// id = عشان ناخذ اي شي بعد السلاش .

module.exports = clothingRoute ;  