const mongoose = require("mongoose");

const productModel = new mongoose.Schema ({ 
    title: { type: String },
    des: { type: String },
    img: { type: String },
    price:{ type:Number }, 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'userModel' }

  //  schema user ناخذها كاملة . 
 // عن طريق البوب يليت عشان يجيب اوبجكت اليوزر كامل 

});

module.exports = mongoose.model("productModel", productModel);