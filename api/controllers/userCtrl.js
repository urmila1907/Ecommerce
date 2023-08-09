const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const asyncHandler = require("express-async-handler");
const validateMongodbID = require("../utils/validateMongodbID");
const { generateRefreshToken } = require("../config/refreshToken");
const jwt = require("jsonwebtoken");
const sendEmail = require("./emailCtrl");
const crypto = require("crypto");

//Create a new user
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  console.log(req.body);
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User already exists");
  }
});

//Login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email: email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = generateRefreshToken(findUser?._id);
    await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser?._id,
      name: findUser?.name,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid credentials");
  }
});

// admin login
const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findAdmin = await User.findOne({ email: email });
  if (findAdmin.role !== "admin") throw new Error("Not authorized");
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = generateRefreshToken(findAdmin?._id);
    await User.findByIdAndUpdate(
      findAdmin.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findAdmin?._id,
      name: findAdmin?.name,
      email: findAdmin?.email,
      mobile: findAdmin?.mobile,
      token: generateToken(findAdmin?._id),
    });
  } else {
    throw new Error("Invalid credentials");
  }
});

//Handle refresh Token
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) {
    throw new Error("No refresh token in cookies");
  } else {
    const refreshToken = cookie?.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
      throw new Error("No such refresh token is present in database");
    }
    jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err || user.id != decoded.id) {
        throw new Error("There is something wrong with refresh token");
      } else {
        const accessToken = generateToken(user?._id);
        res.json({ accessToken });
      }
    });
  }
});

//Logout
const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) {
    throw new Error("No refresh token in cookies");
  } else {
    const refreshToken = cookie?.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
      });
      res.sendStatus(204); //forbidden
    }
    await User.findOneAndUpdate(
      { refreshToken },
      {
        refreshToken: "",
      }
    );
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    res.sendStatus(204); //forbidden
  }
});

//Get all users
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    throw new Error(err);
  }
});

//Get a single user
const getUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateMongodbID(id);
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    throw new Error(err);
  }
});

//Update a user's details
const updateUser = asyncHandler(async (req, res) => {
  const id = req.user;
  validateMongodbID(id);
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (err) {
    throw new Error(err);
  }
});

// Save user's address
const saveAddress = asyncHandler(async (req, res) => {
  const id = req.user;
  validateMongodbID(id);
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (err) {
    throw new Error(err);
  }
});

//Delete a user
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const id = req.user;
    validateMongodbID(id);
    await User.findByIdAndDelete(id);
    res.json("The user has been deleted");
  } catch (err) {
    throw new Error(err);
  }
});

//Block a user
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbID(id);
  try {
    await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      { new: true }
    );
    res.json("The user has been blocked.");
  } catch (err) {
    throw new Error(err);
  }
});

//Unblock a user
const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbID(id);
  try {
    await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      { new: true }
    );
    res.json("The user has been unblocked.");
  } catch (err) {
    throw new Error(err);
  }
});

//Updating a password
const updatePassword = asyncHandler(async (req, res) => {
  const id = req.user;
  const { password } = req.body;
  validateMongodbID(id);
  const user = await User.findById(id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

//Forgot password token
const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("No user with this email exists");
  else {
    try {
      const token = await user.createPasswordResetToken();
      await user.save();
      const resetUrl = `Please follow this link to reset your password. This link is valid for 10 mins from now <a href="http://localhost:8800/api/user/reset-password/${token}">Click here</a>`;
      const data = {
        to: email,
        text: "Hey user",
        subject: "Forgot password",
        html: resetUrl,
      };
      sendEmail(data);
      res.json(token);
    } catch (err) {
      throw new Error(err);
    }
  }
});

//Reset password
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error("Token expired,please try again");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
});

//Get a user's wishlist
const getWishlist = asyncHandler(async (req, res) => {
  const id = req.user;
  validateMongodbID(id);
  try {
    const findUser = await User.findById(id).populate("wishlist");
    res.json(findUser);
  } catch (err) {
    throw new Error(err);
  }
});

//Add to cart
const addToCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const id = req.user;
  validateMongodbID(id);
  try {
    const products = [];
    const user = await User.findById(id);
    const alreadyExistCart = await Cart.findOne({ orderBy: user.id });

    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.color = cart[i].color;
      object.quantity = cart[i].quantity;
      let getPrice = await Product.findById(cart[i]._id).select("price").exec();
      object.price = getPrice.price;
      products.push(object);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal += products[i].price * products[i].quantity;
    }
    if (alreadyExistCart) {
      let cartProducts = alreadyExistCart.products;
      let newCartTotal = alreadyExistCart.cartTotal;

      for (let pr of products) {
        for (let cp of cartProducts) {
          const prod = JSON.stringify(cp.product);
          const product = JSON.stringify(pr.product);
          if (
            prod === product &&
            pr.color === cp.color &&
            pr.quantity === cp.quantity
          ) {
            cartProducts.pop(cp);
            cartProducts.push(pr);
          } else if (
            prod === product &&
            pr.color === cp.color &&
            pr.quantity !== cp.quantity
          ) {
            pr.quantity += cp.quantity;
            newCartTotal = newCartTotal + cp.price * (pr.quantity-cp.quantity);
            cartProducts.pop(cp);
            cartProducts.push(pr);
          } else {
            cartProducts.push(pr);
            newCartTotal += cartTotal;
          }
        }
      }

      const updateCart = await Cart.findOneAndUpdate(
        { orderBy: user.id },
        { products: cartProducts, cartTotal: newCartTotal },
        { new: true }
      );
      res.json(updateCart);
    } else {
      const newCart = await Cart.create({ products, cartTotal, orderBy: id });
      res.json(newCart);
    }
  } catch (err) {
    throw new Error(err);
  }
});

//Get a user's cart
const getUserCart = asyncHandler(async (req, res) => {
  const id = req.user;
  validateMongodbID(id);
  try {
    const findCart = await Cart.findOne({ orderBy: id }).populate(
      "products.product"
    );
    res.json(findCart);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  createUser,
  login,
  adminLogin,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  getWishlist,
  saveAddress,
  addToCart,
  getUserCart,
};
