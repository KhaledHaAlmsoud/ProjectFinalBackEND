// const productModel = require ("../../db/models/productModel"); 


// const addComment = (req, res) => {
//     const { comment } = req.body;
//     const id = req.params.id;
//     // console.log(req.token);
//     const userId = req.token.userId;
//     const userName=req.token.UserName;
//     // console.log(userId,userName);
//     productModel
//       .findOneAndUpdate({ _id: id }, { $push: { comment: {comment,userName,userId} } },{
//         new: true
//       })
//       .populate("user")
//       .then((result) => {
//         res.send(result);
//       }).catch(err=>{
//         res.send(err)
//       });
//   };
//   //
//   const deleteComment = (req, res) => {
//     const { comment } = req.body;
//     const id = req.params.id;
//     // console.log(req.token);
//     const userId = req.token.userId;
//     const userName=req.token.UserName
//     // console.log(userId,userName);
//     productModel
//       .findOneAndUpdate({ _id: id }, { $pull: { comment: {comment,userName,userId} } },{
//         new: true
//       })
//       .populate("user")
//       .then((result) => {
//         res.send(result);
//       }).catch(err=>{
//         res.send(err)
//       });
//   };

//   module.exports={addComment , deleteComment}