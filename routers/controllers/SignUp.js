const bcrypt = require("bcrypt");
const userModel = require("../../db/models/userModel");
const cartModel=require("../../db/models/cartModel")

const addSignUp = async (req, res) => {
let { name, email, password, phone } = req.body;
console.log(name, email, password, phone);

  try {
    password = await bcrypt.hash(password, 10);
    // Used (bcrypy) !
    // من اجل تشفير الباس وورد - الرمز 10 من اجل نسبة او وقت للتشفير
    const newUser = new userModel({ name, email, password, phone });
    // عرفت متغير - وعطيته المتغيرات اللي في الـ (Body)
    const Response = await newUser.save();
    // عرفت متغير وعملت (Save)
    // 1- عشان احفظ المتغيرات
    // 2- لان بدون حفظ ما اقدر اضيف

    const forCartModel =new cartModel ({ user:Response._id, items: [] })
    const saveCart = await forCartModel.save();

   res.status(201).json({ Response, saveCart });
   
  } catch (error) {
    res.send(error);
    // send Errrrrrrror !!
  }
};

module.exports = { postSignUp: addSignUp }; 
