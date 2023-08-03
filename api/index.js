const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

dbConnect();
app.use("/",(req,res)=>{
    res.send("Hello from server side");
})

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})