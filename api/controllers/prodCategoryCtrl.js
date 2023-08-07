const asyncHandler = require("express-async-handler");
const ProdCategory = require("../models/prodCategoryModel");
const validateMongodbID = require("../utils/validateMongodbID");

//Create a category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const category = await ProdCategory.create(req.body);
    res.json(category);
  } catch (err) {
    throw new Error(err);
  }
});

//Update a category
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbID(id);
  const findCategory = await ProdCategory.findById(id);
  if (!findCategory) throw new Error("This category does not exist");
  else {
    try {
      const category = await ProdCategory.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(category);
    } catch (err) {
      throw new Error(err);
    }
  }
});

//Delete a category
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbID(id);
  const findCategory = await ProdCategory.findById(id);
  if (!findCategory) throw new Error("This category does not exist");
  else {
    try {
      const category = await ProdCategory.findByIdAndDelete(id);
      res.json("This category has been deleted");
    } catch (err) {
      throw new Error(err);
    }
  }
});

//Get a category
const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbID(id);
  try {
    const category = await ProdCategory.findById(id);
    res.json(category);
  } catch (err) {
    throw new Error(err);
  }
});

//Get all categories
const getCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await ProdCategory.find();
    res.json(categories);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
