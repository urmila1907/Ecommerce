const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
const orderSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
      color: String,
    },
  ],
  paymentMethod: {},
  orderStatus: {
    type: String,
    default: "Not processed",
    enum: [
      "Not processed",
      "Cash on delivery",
      "Processing",
      "Dispatched",
      "Delivered",
      "Cancelled",
    ],
  },
  orderBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},{
    timestamps:true
});

//Export the model
module.exports = mongoose.model('Order', orderSchema);