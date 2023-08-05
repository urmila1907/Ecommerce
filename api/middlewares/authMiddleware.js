const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res,next) => {
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    let token = req?.headers?.authorization?.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = decoded?.id;
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not authorized, token expired. Please login again");
    }
  } else {
    throw new Error("There is no token attached to the header.");
  }
});

const isAdmin = asyncHandler(async(req,res,next)=>{
    const id = req.user;
    const findUser = await User.findById(id);
    if(!findUser){
        throw new Error("no user with that email found");
    }
    else{
        if (findUser?.role != "admin") {
          throw new Error("You are not an admin");
        } else {
          next();
        }
    }
    

})

module.exports = { authMiddleware, isAdmin };
