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
const devicesRoute = require ("./routers/routes/RouteDevices");
const clothingRoute = require ("./routers/routes/RouteClothing");
const perfumesRoute = require ("./routers/routes/RoutePerfumes")


app.use(devicesRoute)
app.use( signUpRoute );
app.use( loginRoute );
app.use( productRoute );
app.use( RouteUsers );
app.use( clothingRoute );
app.use( perfumesRoute );

const Port = 5000;
app.listen(Port,()=> {
console.log("server is running");

 } );
