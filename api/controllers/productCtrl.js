const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//Create a product
const createProduct = asyncHandler(async (req, res) => {
  const slug = req.body.slug;
  const findProduct = await Product.findOne({ slug });
  if (!findProduct) {
    const product = await Product.create(req.body);
    res.json(product);
  } else {
    throw new Error("Product already exists");
  }
});

//Get a product's details
const getProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const findProduct = await Product.findById(productId);
  if (!findProduct) {
    throw new Error("No such product exists");
  } else {
    res.json(findProduct);
  }
});

//Updating a product's details
const updateProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    throw new Error("No such product exists");
  }
});

//Deleting a product
const deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  try {
    await Product.findByIdAndDelete(productId);
    res.json("The product has been deleted");
  } catch (err) {
    throw new Error("No such product exists");
  }
});

module.exports = { createProduct, getProduct, updateProduct, deleteProduct };
