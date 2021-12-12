const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String ,unique:true },
  password: { type: String },
  phone: {type: Number},
  product:[{type: mongoose.Schema.Types.ObjectId, ref: 'storeModel' }]
});

module.exports = mongoose.model("userModel", userModel);