const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async(req,res)=>{
    if(req?.headers?.authorization?.startsWith("Bearer")){
       let token = req?.headers?.authorization?.split(' ')[1];
       const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
       console.log(decoded);
    }
    else{
        throw new Error("There is no token attached to the header.")
    }
})

module.exports = authMiddleware;