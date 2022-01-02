const express = require("express");
const perfumesRoute = express.Router();

const { addProduct , getProduct , deleteProduct , updateProduct ,getOneProduct} = require("../controllers/Perfumes")
const {authentication} = require("../middlewares/authentication")

perfumesRoute.post ("/Perfumes", authentication , addProduct ); 
perfumesRoute.get ("/Perfumes", getProduct );
perfumesRoute.get ("/onePerfumes/:id", getOneProduct );
perfumesRoute.delete ("/Perfumes/:id" , authentication , deleteProduct );
perfumesRoute.put("/Perfumes/:id" , authentication, updateProduct)
// id = عشان ناخذ اي شي بعد السلاش .

module.exports = perfumesRoute ;  

