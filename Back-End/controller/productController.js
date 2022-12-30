const Product = require("../models/ProductModel");
const ErrorHandler = require("../middleware/error");
const Features = require("../utils/features");

const productCreate = async (req, res, next) => {
  const product = await Product.create(req.body);
  try {
    return res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  const resultPerPage = 8;
  const productsCount = await Product.countDocuments();

  const feature = new Features(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const allProducts = await feature.query;

  try {
    return res.status(201).json({
      success: true,
      allProducts,
      productsCount,
      resultPerPage,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  try {
    if (!product) {
      return next(ErrorHandler("Product not found", 404));
    }
    return res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};
const productUpdate = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  try {
    if (!product) {
      return next(ErrorHandler("Product not found", 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useUnified: false,
    });
    res.status(200).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};

const productDelete = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  try {
    if (!product) {
      return next(ErrorHandler("Product not found", 404));
    } else {
      await product.remove();
      res.status(200).json({ success: true, message: "Product deleted" });
    }
  } catch (error) {
    next(error);
  }
};

// Create New Review or Update the review
const createProductReview = async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  try {
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// Get All reviews of a single product
const getSingleProductReviews = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  try {
    if (!product) {
      return next(new ErrorHandler("Product is not found with this id", 404));
    }

    res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Review --Admin
const deleteReview = async (req, res, next) => {
  const product = await Product.findById(req.params.productId);
  if (!product) {
    return next(new ErrorHandler("Product not found with this id", 404));
  }

  try {
    const reviews = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );
    let avg = 0;

    reviews.forEach((rev) => {
      avg += rev.rating;
    });

    let ratings = 0;

    if (reviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / reviews.length;
    }
    const numOfReviews = reviews.length;
    const result = await Product.findByIdAndUpdate(
      req.params.productId,
      {
        reviews,
        ratings,
        numOfReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    console.log(result);

    res.status(200).json({
      success: true,
      message: "Review Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  productCreate,
  getAllProducts,
  getSingleProduct,
  productUpdate,
  productDelete,
  createProductReview,
  getSingleProductReviews,
  deleteReview,
};
