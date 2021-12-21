const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");

app.use(express.json());
app.use(cors());

const signUpRoute = require ("./routers/routes/RouteSignUp");
const loginRoute = require ("./routers/routes/RouteLogin");
const productRoute = require ("./routers/routes/RouteProduct")

app.use( signUpRoute );
app.use( loginRoute );
app.use( productRoute )

const Port = 5000;
app.listen(Port,()=> {
console.log("server is running");

 } );
