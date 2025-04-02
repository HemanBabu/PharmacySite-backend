const express = require("express");
const mongoose = require('mongoose');
const authRouter = require("./routers/authRouter.js");
const netmedsRouter = require("./routers/netmedsRouter.js");
const wishlistRouter = require("./routers/wishlistRouter.js");
const cartRouter = require("./routers/cartRouter.js");
const notificationRouter = require("./routers/notificationRouter.js");
const connectDB = require("./connectDB.js");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/search", netmedsRouter);
app.use("/wishlist", wishlistRouter);
app.use("/cart", cartRouter);
app.use("/notifications", notificationRouter);

connectDB()
.catch(e=>{
  throw e;
});

/*
app.listen(3002,()=>{
 console.log(" server is listening on !!!!!!!!!!!!!!!!!!!") 
})*/

module.exports = app;
