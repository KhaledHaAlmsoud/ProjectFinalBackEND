// const productModel = require ("../../db/models/productModel"); 
// const userModel = require ("../../db/models/userModel")
// const cartModel=require("../../db/models/cartModel")


// // const getItemCart = async (req,res)=>{

// //     try {
  
// //     res.status(200).json(products)
    
// //     } catch (error) {
// //       res.status(error);
    
// //     } };


// const postItemCart = async (req,res)=> {
// const {id} = req.params.id;
// const user = req.token.userId;
//      try {
// const addItem =await cartModel.findByIdAndUpdate ({ _id:user }, { $push: {items:id }}, { new:true }).populate("items");
// res.status(200).json(products)
        
// } catch (error) {
// res.status(error);
        
// } };


// //  const deltItemCart = async (req,res)=>{

// //             try {
          
// //             res.status(200).json(products)
            
// //             } catch (error) {
// //               res.status(error);
            
// //             } };
    

// module.exports= {getItemCart , postItemCart , deltItemCart}; 