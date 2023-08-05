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
  const { productId } = req.params;
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
    //Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let query = Product.find(JSON.parse(queryStr));

    //Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //Limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    //Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) {
        throw new Error("This page does not exist");
      }
    }

    const products = await query;
    res.json(products);
  } catch (err) {
    throw new Error(err);
  }
});

//Updating a product's details
const updateProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
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
  const { productId } = req.params;
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
