const routes = require("express").Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  productCreate,
  getAllProducts,
  getSingleProduct,
  productUpdate,
  productDelete,
} = require("../controller/productController");

routes.post("/new", isAuthenticatedUser, authorizeRoles, productCreate);
routes.get("/", getAllProducts);
routes.get("/:id", getSingleProduct);
routes.put("/:id", productUpdate);
routes.delete("/:id", productDelete);

module.exports = routes;
