const asyncHandler = require("express-async-handler");
const Brand = require("../models/brandModel");
const validateMongodbID = require("../utils/validateMongodbID");

//Create a Brand
const createBrand = asyncHandler(async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.json(brand);
  } catch (err) {
    throw new Error(err);
  }
});

//Update a Brand
const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbID(id);
  const findBrand = await Brand.findById(id);
  if (!findBrand) throw new Error("This brand does not exist");
  else {
    try {
      const brand = await Brand.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(brand);
    } catch (err) {
      throw new Error(err);
    }
  }
});

//Delete a Brand
const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbID(id);
  const findBrand = await Brand.findById(id);
  if (!findBrand) throw new Error("This brand does not exist");
  else {
    try {
      const brand = await Brand.findByIdAndDelete(id);
      res.json("This brand has been deleted");
    } catch (err) {
      throw new Error(err);
    }
  }
});

//Get a Brand
const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbID(id);
  try {
    const brand = await Brand.findById(id);
    res.json(brand);
  } catch (err) {
    throw new Error(err);
  }
});

//Get all Brands
const getBrands = asyncHandler(async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  createBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
};
