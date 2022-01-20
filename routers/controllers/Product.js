const productModel = require("../../db/models/productModel");
const userModel = require("../../db/models/userModel");

const addProduct = async (req, res) => {
  const { ownerName, title, des, img, price } = req.body;

  const user = req.token.userId;
  // نجيب اليوزر عن طريق التوكن

  // ينشى بسكيما المنتج البيانات اللي اخذناها من الفرونت اند .
  try {
    const useradmin = await userModel.findOne({ _id: user });
    // if (useradmin.admin == true) {
      const nweProduct = new productModel({
        ownerName,
        title,
        des,
        img,
        price,
        user,
      });

      await nweProduct.save();
      // يحفظ العنصر الجديد بسكيما المنتج .
      const products = await productModel.find({}).populate("user");
      // متغير جديد قيمته يبحث عن جميع العناصر الموجودة بسكيما المنتج
      // يستدعي البيانات بناءا على اي دي اليوزر , ويجلب بياناته كاملة من سكيما اليوزر .

      res.status(200).json(products);
    // } else {
      res.sned("you not admin");
    // }
  } catch (error) {
    res.status(404).json(error);
  }
};

const getProduct = async (req, res) => {
  // console.log("Send Me Data");
  try {
    const products = await productModel.find({}).populate("user");
    //findOne = يرجع عنصر واحد عبارة عن اوبجكت .
    //find = يرجع ارري - مجموعة عناصر .
    res.status(200).json(products);
    // البا اند يرد على الفرونت اند
  } catch (error) {
    res.status(404).json(error);
  }
};
////////////////////////////////////

const getOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.findOne({ _id: id }).populate("user");
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json(error);
  }
};

/////////////////////
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  // req.p الاي دي اللي بعد السلاش بالفرونت او االبوست مان

  // console.log(id);
  const user = req.token.userId;
  // console.log("deleteProduct");
  // عشان احذف المنتج الخاص باليوزر .
  try {
    // const useradmin = await userModel.findOne({ _id: user });
    // if (useradmin.admin == true) {
      // اذا الادمين ترو احذف 
      const deleteOne = await productModel.findOneAndDelete({
        _id: id,
      
      });
      const products = await productModel.find({}).populate("user");
      // يرجع الارري بعد الحذف ويغني عن الكوبي بالفرونت اند
      res.status(200).json(products);
    // } else {
    //   res.send("you are not admin");
    // }
  } catch (error) {
    res.status(error);
    // console.log("Remove Product!");
  }
};

const updateProduct = async (req, res) => {
  let { ownerName, title, des, img, price } = req.body;
  const { id } = req.params;
  //نجيب الايدي من البرامس
  const user = req.token.userId;
  // نجيب اليوزر عن طريق التوكن
  try {
    const Products = await productModel
      .findOneAndUpdate(
        { _id: id },
        { ownerName, title, des, img, price },
        { new: true }
      )
      .populate("user");
    //الاوبجكت الاول الايدي من الداتا بيس والبرامس والاوبجكت الثاني البيانات اللي نعدل عليها من البدي والابجكت الثالث عشان نحفظ التعديل الجديد
    //البابيوليت عشان بيانات اليوزر اللي عدل على المنتج
    res.status(200).json(Products);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getOneProduct,
};
