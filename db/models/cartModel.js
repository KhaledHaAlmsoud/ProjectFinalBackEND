const mongoose = require("mongoose");

const cartModel = new mongoose.Schema ({


user: { type : mongoose.Schema.Types.ObjectId, ref: 'userModel' },
items: { type : mongoose.Schema.Types.ObjectId, ref: 'productModel' },
counter: {type : Number } ,
priceTotal: {type : Number}
}); 

module.exports = mongoose.model("cartModel", cartModel); 

