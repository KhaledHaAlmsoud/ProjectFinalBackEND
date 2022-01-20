require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());


const signUpRoute = require ("./routers/routes/RouteSignUp");
const loginRoute = require ("./routers/routes/RouteLogin");
const productRoute = require ("./routers/routes/RouteProduct")
const RouteUsers = require ("./routers/routes/RouteUsers");
const cartRoute = require ("./routers/routes/RouteCart");


app.use( signUpRoute );
app.use( loginRoute );
app.use( productRoute );
app.use( RouteUsers );
app.use( cartRoute );

// console.log(process.env.PORT);
// const Port =  process.env.PORT || 5000; 
app.listen(process.env.PORT,()=> {
console.log("server is running");
 } );
