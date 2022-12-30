const routes = require("express").Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  productCreate,
  getAllProducts,
  getSingleProduct,
  productUpdate,
  productDelete,
  createProductReview,
  getSingleProductReviews,
  deleteReview,
} = require("../controller/productController");

routes.post(
  "/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  productCreate
);
routes.get("/", getAllProducts);
routes.get("/:id", getSingleProduct);
routes.put("/:id", isAuthenticatedUser, authorizeRoles("admin"), productUpdate);
routes.delete(
  "/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  productDelete
);
routes.post("/review/new", isAuthenticatedUser, createProductReview);
routes.get("/review/:id", getSingleProductReviews);
routes.delete(
  "/review-delete/:productId",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteReview
);
module.exports = routes;
