const mongoose = require("mongoose");

const productModel = new mongoose.Schema ({ 
    ownerName: { type: String},
    title: { type: String },
    des: { type: String },
    img: { type: String },
    price:{ type: Number }, 
    // comment:{type:Array},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'userModel' } 
  //  schema user ناخذها كاملة . 
 // عن طريق البوب يليت عشان يجيب اوبجكت اليوزر كامل 
}); 

module.exports = mongoose.model("productModel", productModel);