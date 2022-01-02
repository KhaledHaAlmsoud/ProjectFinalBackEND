const userModel = require("../../db/models/userModel");

///////
const profile = async(req,res)=>{
const user = req.token.userId;
try {
const getUesr = await userModel.findOne ({ _id : user });
res.status(200).json(getUesr);
} catch (error) {
  res.send (error)
} };
/////////
const removeUser = async (req,res)=>{
const user = req.token.userId;
try {
const deleteUser = await userModel.findOneAndDelete ({ _id : user });
res.status(200).json(deleteUser);

} catch (error) {
  res.send (error)  
} };
/////////
const upDateUser = async (req,res)=>{
let {name , img}=req.body;
const user = req.token.userId;
try {
const newResult= await userModel.findOneAndUpdate({_id:user},{name,img},{new:true})
    res.status(200).json(newResult)
} catch (error) {
  res.send (error)
} };


module.exports = { profile , removeUser , upDateUser  } ;