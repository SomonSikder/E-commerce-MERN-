const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.msg = err.msg || "Something went wrong";
  err.statusCode = err.statusCode || 500;

  // wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found with this id.. Invalid ${err.path}`;
    err = new ErrorHandler(message, 404);
  }

  res.status(err.statusCode).json({
    success: false,
    error: err.msg,
  });
};
