const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const validateMongodbID = require("../utils/validateMongodbID");
const slugify = require("slugify");

//Create a product
const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    throw new Error(err);
  }
});

//Get a product's details
const getProduct = asyncHandler(async (req, res) => {
  const {productId} = req.params;
  validateMongodbID(productId);
  try {
    const findProduct = await Product.findById(productId);
    res.json(findProduct);
  } catch (err) {
    throw new Error(err);
  }
});

//Get all products
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    throw new Error(err);
  }
});

//Updating a product's details
const updateProduct = asyncHandler(async (req, res) => {
  const {productId} = req.params;
  validateMongodbID(productId);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    throw new Error(err);
  }
});

//Deleting a product
const deleteProduct = asyncHandler(async (req, res) => {
  const {productId} = req.params;
  validateMongodbID(productId);
  try {
    await Product.findByIdAndDelete(productId);
    res.json("The product has been deleted");
  } catch (err) {
    throw new Error("No such product exists");
  }
});

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
