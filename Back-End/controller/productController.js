const Product = require("../modles/Product");
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
module.exports = {
  productCreate,
  getAllProducts,
  getSingleProduct,
  productUpdate,
  productDelete,
};
