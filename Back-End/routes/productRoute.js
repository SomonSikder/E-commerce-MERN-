const routes = require("express").Router();
const {
  productCreate,
  getAllProducts,
  getSingleProduct,
  productUpdate,
  productDelete,
} = require("../controller/productController");

routes.post("/new", productCreate);
routes.get("/", getAllProducts);
routes.get("/:id", getSingleProduct);
routes.put("/:id", productUpdate);
routes.delete("/:id", productDelete);

module.exports = routes;
