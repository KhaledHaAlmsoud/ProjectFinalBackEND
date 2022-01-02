const express = require("express");
const RouteUsers = express.Router();

const { profile , removeUser , upDateUser  } = require("../controllers/Users");
const { authentication } = require("../middlewares/authentication");

RouteUsers.get("/user", authentication , profile );
RouteUsers.delete("/user/:id", authentication , removeUser );
RouteUsers.put("/userUpdate", authentication , upDateUser );


module.exports = RouteUsers;
