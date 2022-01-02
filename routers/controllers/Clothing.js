const clothingModel = require ("../../db/models/clothingModel"); 
const userModel = require ("../../db/models/userModel")


const addProduct = async (req, res)=>{
const { ownerName , title , des , img , price  } = req.body; 
const user = req.token.userId;
// نجيب اليوزر عن طريق التوكن 

const nweProduct = new clothingModel ({ ownerName , title , des , img , price , user }); 
// ينشى بسكيما المنتج البيانات اللي اخذناها من الفرونت اند .
try { 
   await nweProduct.save();
   // يحفظ العنصر الجديد بسكيما المنتج .
   const clothing = await clothingModel.find({}).populate("user");
   // متغير جديد قيمته يبحث عن جميع العناصر الموجودة بسكيما المنتج
   // يستدعي البيانات بناءا على اي دي اليوزر , ويجلب بياناته كاملة من سكيما اليوزر .

   
  res.status(200).json(clothing); 
} catch (error) {
  res.status(404).json(error);
} }; 


const getProduct = async (req,res)=>{
  // console.log("Send Me Data");
try {
  const clothing = await clothingModel.find({}).populate("user"); 
  //findOne = يرجع عنصر واحد عبارة عن اوبجكت .
  //find = يرجع ارري - مجموعة عناصر .
  res.status(200).json(clothing);
  
} catch (error) {
  res.status(404).json(error);  
} } ;
////////////////

const getOneProduct = async (req,res)=>{
  const {id} = req.params;
  try {

  const clothing = await clothingModel.findOne ({_id:id}).populate("user"); 
  res.status(200).json(clothing);
} catch (error) {
  res.status(404).json(error);  
} } ;

/////////////////////
const deleteProduct = async (req,res)=>{
const id = req.params.id; 
// req.p الاي دي اللي بعد السلاش بالفرونت او االبوست مان 

// console.log(id);
const user = req.token.userId;
// console.log("deleteProduct");
// عشان احذف المنتج الخاص باليوزر .
try {
const deleteOne = await clothingModel.findOneAndDelete ({ _id: id , user:user }) 
const clothing = await clothingModel.find({}).populate("user");
// يرجع الارري بعد الحذف ويغني عن الكوبي بالفرونت اند 
res.status(200).json(clothing)

} catch (error) {
  res.status(error);
  // console.log("Remove Product!");
} };

const updateProduct = async (req, res)=>{
  let { ownerName , title , des , img , price } = req.body; 
  const {id} = req.params;
  //نجيب الايدي من البرامس 
  const user = req.token.userId;
  // نجيب اليوزر عن طريق التوكن 
  try { 
  const clothing = await clothingModel.findOneAndUpdate ( {_id:id }, { ownerName , title , des , img , price } , {new:true}).populate("user")
  //الاوبجكت الاول الايدي من الداتا بيس والبرامس والاوبجكت الثاني البيانات اللي نعدل عليها من البدي والابجكت الثالث عشان نحفظ التعديل الجديد 
  //البابيوليت عشان بيانات اليوزر اللي عدل على المنتج 
  res.status(200).json(clothing); 
  } catch (error) {
    res.status(404).json(error);
  } }; 


module.exports= { addProduct , getProduct , deleteProduct , updateProduct , getOneProduct};  


