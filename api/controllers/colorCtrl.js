const asyncHandler = require("express-async-handler");
const Color = require("../models/colorModel");
const validateMongodbID = require("../utils/validateMongodbID");

//Create a color
const createColor = asyncHandler(async (req, res) => {
  try {
    const color = await Color.create(req.body);
    res.json(color);
  } catch (err) {
    throw new Error(err);
  }
});

//Update a color
const updateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbID(id);
  const findcolor = await Color.findById(id);
  if (!findcolor) throw new Error("This color does not exist");
  else {
    try {
      const color = await Color.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(color);
    } catch (err) {
      throw new Error(err);
    }
  }
});

//Delete a color
const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbID(id);
  const findcolor = await Color.findById(id);
  if (!findcolor) throw new Error("This color does not exist");
  else {
    try {
      await Color.findByIdAndDelete(id);
      res.json("This color has been deleted");
    } catch (err) {
      throw new Error(err);
    }
  }
});

//Get a color
const getColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbID(id);
  try {
    const color = await Color.findById(id);
    res.json(color);
  } catch (err) {
    throw new Error(err);
  }
});

//Get all colors
const getColors = asyncHandler(async (req, res) => {
  try {
    const colors = await Color.find();
    res.json(colors);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  createColor,
  getColors,
  getColor,
  updateColor,
  deleteColor,
};
