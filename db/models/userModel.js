const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String ,unique:true },
  password: { type: String },
  phone: {type: Number},
  img: {type:String, default:"https://www.clipartmax.com/png/small/296-2969961_no-image-user-profile-icon.png"}
}); 


module.exports = mongoose.model("userModel", userModel); 

