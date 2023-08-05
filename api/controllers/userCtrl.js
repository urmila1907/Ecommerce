const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

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

//Get all users
const getUsers = asyncHandler(async (req, res) => {
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
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.json(user);
  } catch (err) {
    throw new Error(err);
  }
});

//Update a user's details
const updateUser = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    throw new Error(err);
  }
});

//Delete a user
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete(userId);
    res.json("The user has been deleted");
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  createUser,
  login,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
