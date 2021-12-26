const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModel")


const Login = async (req,res)=>{
const { email , password } = req.body;
console.log(email , password);

try {
    const user = await userModel.findOne ({email: email});
    if (user) {

    const check = await bcrypt.compare ( password, user.password );
    // password 1 = هو المدخل بالبودي 
    // == 2 = هو الباسوورد الاصلي اللي بـ (signup)
    if (check === true){
        // اذا كان التحقق صحيح ... 
    const payload = {userId : user._id , userName : user.name };
    // key عرف المتغير وعطه 2 
    //  object - معلومات التوكن قبل التشفير ) التوكن قبل التشفير يعتبر )
    // 
    const token = jwt.sign (payload, "KH");
    // بعد التشفير ينشى التوكن 
    res.status(200).json ({token , userId : user._id}) 
    // يشفر التوكن ويرسله للفرونت اند بعد تسجيل الدخول 
    // componets == login
} };
    
} catch (error) {
  res.send (error, "There Error !")  
} };


module.exports = { Login }