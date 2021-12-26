const productModel = require ("../../db/models/productModel"); 
const userModel = require ("../../db/models/userModel")


const addProduct = async (req, res)=>{
const { ownerName , title , des , img , price  } = req.body; 


const user = req.token.userId;

const nweProduct = new productModel ({ ownerName , title , des , img , price , user }); 
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


const getProduct = async (req,res)=>{
  // console.log("Send Me Data");
try {
  const products = await productModel.find({}).populate("user");
  //findOne = يرجع عنصر واحد عبارة عن اوبجكت .
  //find = يرجع ارري - مجموعة عناصر .
  res.status(200).json(products);
  
} catch (error) {
  res.status(404).json(error);  
} } ;


const deleteProduct = async (req,res)=>{
const id = req.params.id; 
// req.p الاي دي اللي بعد السلاش بالفرونت او االبوست مان 

// console.log(id);

const user = req.token.userId;
// console.log("deleteProduct");
// عشان احذف المنتج الخاص باليوزر .
try {
const deleteOne = await productModel.findOneAndDelete ({ _id: id , user:user })
const products = await productModel.find({}).populate("user");
res.status(200).json(products)

} catch (error) {
  res.status(error);
  // console.log("Remove Product!");
} };


module.exports= { addProduct , getProduct , deleteProduct };  


