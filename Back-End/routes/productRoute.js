const routes = require("express").Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  productCreate,
  getAllProducts,
  getSingleProduct,
  productUpdate,
  productDelete,
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

module.exports = routes;
