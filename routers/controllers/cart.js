const productModel = require ("../../db/models/productModel"); 
const userModel = require ("../../db/models/userModel")
const cartModel=require("../../db/models/cartModel")


    const postCart = async (req,res)=> {
    const id = req.params.id;
    const user = req.token.userId; 
    // console.log(id,user);

    try {
      const isFoundProdect = await cartModel.findOne({items : id})
      // سويت فايند ون عشان اوبجكت الايتم الواحد 
      if (isFoundProdect) {
        // اذا كان موجود ...
        try {
          // console.log(id);
      const onCart = await cartModel.findOne({items : id})
      // عرفت متغير جديد , سويت له فايند ون للا ايتم عن طريق الاي دي 
      // الاي دي من البارامس = برودكت 

      const prodect = await productModel.findOne({items : id})
      const price = onCart.priceTotal + prodect.price
      // 


      await cartModel.findOneAndUpdate({items : id } , { counter : Number (onCart.counter + 1) , priceTotal : price });
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
      const prodect = await productModel.findOne({items : id})

       const newCart = new cartModel({ items : id , user : user , counter : 1 ,  priceTotal : Number(prodect.price)}); 
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
                const user = req.token.userId;
                
                const onCart = await cartModel.findOne({_id:id})
                const prodect = await productModel.findOne({_id:onCart.items})

                try {
                  if (onCart.counter == 1) { 
                      const onCartUpdate = await cartModel.findOneAndDelete({_id:id})
                      const findCart = await cartModel.find({user:user}).populate("items").populate("user");
                      res.status(200).json(findCart)
                  }else if (onCart.counter > 1) {
                      const onCartUpdate = await cartModel.findOneAndUpdate({_id:id} , 
                      {counter : Number (onCart.counter - 1) , priceTotal : onCart.priceTotal - prodect.price})
                      const findCart = await cartModel.find({user:user}).populate("items").populate("user");
                      res.status(200).json(findCart)
                  }
                  
                } catch (error) {
                  res.send(error)
                  //console.log(error);
                }

               
                };
    

module.exports= { postCart , getCart , deleteCart }; 