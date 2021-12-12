const mongoose = require("mongoose");


const storeModel = new mongoose.Schema({
  title: { type: String, required: true },
  des: { type: String,  required: true  },
  img: { type: String, required: true },
  price:{type:Number ,required: true},
  
  userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'  }
});


module.exports = mongoose.model("storeModel", storeModel);