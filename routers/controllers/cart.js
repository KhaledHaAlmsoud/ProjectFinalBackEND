const productModel = require ("../../db/models/productModel"); 
const userModel = require ("../../db/models/userModel")
const cartModel=require("../../db/models/cartModel")


    const postCart = async (req,res)=> {
    const id = req.params.id;
    const user = req.token.userId; 
    console.log(id,user);

    try {
      const isFoundProdect = await cartModel.findOne({items : id}, {user : user});
      // سويت فايند ون عشان اوبجكت الايتم الواحد 
      if (isFoundProdect) {
        // اذا كان موجود ...
        try {
          // console.log(id);
      const onCart = await cartModel.findOne({items : id} , {user : user});
      // عرفت متغير جديد , سويت له فايند ون للا ايتم عن طريق الاي دي 
      // الاي دي من البارامس = برودكت 
      await cartModel.findOneAndUpdate({items : id} , { counter : Number (onCart.counter + 1) },{new:true});
      // ابديت لل ون كارت عشان ازيد العداد بكل مره اضيف فيها .
      // 
      const cartall = await cartModel.find({user:user}).populate("items").populate("user");
      // فايند = جب كل العناصر اللي اليوزر مسوي لها كارت 
      res.status(200).json(cartall); 
    } catch (error) {
      res.state(404).json("Error on Line 20 function CartAdd !"); 
    }
            
    }else{
      try {
       const newCart = new cartModel({ items : id , user : user , counter : 0 }); 
       // كارت جديد 
       await newCart.save();
       const cartall = await cartModel.find({user:user}).populate("items").populate("user");
       // اي دي = بارامس 
       // يوزر = توكن 
       res.status(200).json(cartall);  
     } catch (error) {
       res.status(200).json("error on Line 30 CartAdd !");
    }
    } 
    }  catch (error) {
       res.send(error);
    } };
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////

     const getCart = async (req,res)=>{ 
     const user = req.token.userId;

    //  console.log(user);
    try {
      const findCart = await cartModel.find({user:user}).populate("items").populate("user");
      res.status(200).json(findCart);
    } catch (error) {
      res.status(error); 
    } }; 

///////////////////////////////////

              const deleteCart = async (req,res)=>{
                const id = req.params.id; 
                // req.p الاي دي اللي بعد السلاش بالفرونت او االبوست مان 
                
                // console.log(id);
                const user = req.token.userId;
                // console.log("deleteProduct");
                // عشان احذف المنتج الخاص باليوزر .
                try {
                const deleteOne = await cartModel.findOneAndDelete ({ _id: id , user:user }) 
                const cart = await cartModel.find({}).populate("user");
                // يرجع الارري بعد الحذف ويغني عن الكوبي بالفرونت اند 
                res.status(200).json(cart)
                
                } catch (error) {
                  res.status(error);
                  // console.log("Remove Product!");
                } };
    

module.exports= { postCart , getCart , deleteCart }; 