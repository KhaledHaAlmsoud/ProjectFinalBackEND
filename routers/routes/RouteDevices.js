const express = require("express");
const devicesRoute = express.Router();

const { addProduct , getProduct , deleteProduct , updateProduct ,getOneProduct} = require("../controllers/Devices")
const {authentication} = require("../middlewares/authentication")

devicesRoute.post ("/devices", authentication , addProduct ); 
devicesRoute.get ("/devices", getProduct );
devicesRoute.get ("/oneDevices/:id", getOneProduct );
devicesRoute.delete ("/devices/:id" , authentication , deleteProduct );
devicesRoute.put("/devices/:id" , authentication, updateProduct)
// id = عشان ناخذ اي شي بعد السلاش .

module.exports = devicesRoute ;  