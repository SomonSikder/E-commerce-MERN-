const { model } = require("mongoose");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter a Name of Product"],
    maxlength: [15, "Product Name can't be more then 15 words"],
  },
  description: {
    type: String,
    required: [true, "Please Enter a Description of Product"],
    maxlength: [4000, "Description can't be more then 4000 words"],
  },
  price: {
    type: Number,
    required: [true, "Please Provide price of Product"],
    maxlength: [8, "Price can't be more then 8 Characters"],
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        // required: true,
      },
      url: {
        type: String,
        // required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Add a category of your Product"],
  },
  stock: {
    type: Number,
    required: [true, "Please Add some stock of your Product"],
    minlength: [4, "Stock can't be less then 4"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: true,
      },
      name: {
        type: String,
        // required: true,
      },
      rating: {
        type: Number,
        // required: true,
      },
      comment: {
        type: Number,
      },
      time: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    // required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
