const productModel = require ("../../db/models/productModel"); 
const userModel = require ("../../db/models/userModel")


const addProduct = async (req, res)=>{
const { title, des , img , price , user } = req.body; 

const nweProduct = new productModel ({title, des , img , price , user});
// ينشى بسكيما المنتج البيانات اللي اخذناها من الفرونت اند .
try {
   await nweProduct.save();
   // يحفظ العنصر الجديد بسكيما المنتج .
   const products = await productModel.find({}).populate("user");
   // متغير جديد قيمته يبحث عن جميع العناصر الموجودة بسكيما المنتج
   // يستدعي البيانات بناءا على اي دي اليوزر , ويجلب بياناته كاملة من سكيما اليوزر .

   res.status(200).json(products);
    
} catch (error) {
  res.status(404).json(error);
} }; 

module.exports= {addProduct}; 