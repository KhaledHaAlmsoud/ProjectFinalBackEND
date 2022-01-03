const productModel = require ("../../db/models/productModel"); 
const userModel = require ("../../db/models/userModel")
const cartModel=require("../../db/models/cartModel")



const postCart = async (req,res)=> {
    const id = req.params.id;
    const user = req.token.userId;
    console.log (id,user);

    const newCart = new cartModel({ items : id , user : user , counter : 0 });
    await newCart.save();

   res.status(200).json(newCart); 

}; 
/////////////////
    const getCart = async (req,res)=>{
    const user = req.token.userId;
    // console.log (userId);
    
    try {
    const findCart = await cartModel.find({}).select("items").populate("items");
        // console.log(findCart);
    res.status(200).json(findCart);
    
    } catch (error) {
      res.status(error);
    
    } }; 



//  const deleteCart = async (req,res)=>{

//             try {
          
//             res.status(200).json(products)
            
//             } catch (error) {
//               res.status(error);
            
//             } };
    

module.exports= { postCart , getCart }; 