const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const validateMongodbID = require("../utils/validateMongodbID");
const slugify = require("slugify");
const User = require("../models/userModel");
const fs = require("fs");
const {cloudinaryUploadImg,cloudinaryDeleteImg} = require("../utils/cloudinary");

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

//Add to wishlist
const addToWishlist = asyncHandler(async (req, res) => {
  const id = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(id);
    const alreadyadded = user.wishlist.find((id) => id.toString() === prodId);
    if (alreadyadded) {
      let user = await User.findByIdAndUpdate(
        id,
        {
          $pull: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        id,
        {
          $push: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (err) {
    throw new Error(err);
  }
});

//Ratings
const rating = asyncHandler(async (req, res) => {
  const id = req.user;
  const { star, prodId, comment } = req.body;
  try {
    const product = await Product.findById(prodId);
    let alreadyRated = product.ratings.find(
      (userId) =>
        JSON.stringify(userId.postedBy) === JSON.stringify(id.toString())
    );
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: {
            "ratings.$.star": star,
            "ratings.$.comment": comment,
            "ratings.$.postedBy": id,
          },
        },
        {
          new: true,
        }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedBy: id,
            },
          },
        },
        {
          new: true,
        }
      );
    }
    const getallratings = await Product.findById(prodId);
    let totalRating = getallratings.ratings.length;
    let ratingsum = getallratings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.round(ratingsum / totalRating);
    let finalproduct = await Product.findByIdAndUpdate(
      prodId,
      {
        totalRating: actualRating,
      },
      { new: true }
    );
    res.json(finalproduct);
  } catch (error) {
    throw new Error(error);
  }
});

//Upload Images
const uploadImages = asyncHandler(async (req, res) => {
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      urls.push(newpath);
      fs.unlinkSync(path);
    }
    const images = urls.map((file)=>{
      return file;
    })
    res.json(images);
    
  } catch (err) {
    throw new Error(err);
  }
});

//Delete images
const deleteImages = asyncHandler(async (req, res) => {
  const {productId} = req.params;
  try {
    const deleted = cloudinaryDeleteImg(productId, "images");
    res.json({message:"Deleted"});
    
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
  uploadImages,
  deleteImages,
};
