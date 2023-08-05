const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  quantity: {
    type: Number,
  },
  images: {
    type: Array,
  },
  sold: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    enum: ["Black", "Brown", "Red"],
  },
  ratings: [
    {
      star: Number,
      postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
  brand: {
    type: String,
    enum: ["Samsung", "Dell", "Lenovo"],
  },
},{
    timestamps:true
});

//Export the model
module.exports = mongoose.model("Product", productSchema);
