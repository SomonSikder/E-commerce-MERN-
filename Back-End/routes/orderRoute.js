const routes = require("express").Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  createOrder,
  getSingleOrder,
  getAllOrders,
  getAdminAllOrders,
  updateAdminOrder,
  deleteOrder,
} = require("../controller/orderController");
const { create } = require("../models/OrderModel");

routes.post("/new", isAuthenticatedUser, createOrder);
routes.get("/me", isAuthenticatedUser, getAllOrders);
routes.get("/:id", isAuthenticatedUser, getSingleOrder);
routes.get(
  "/admin",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAdminAllOrders
);
routes.put(
  "/admin/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateAdminOrder
);
routes.delete(
  "/admin/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteOrder
);

module.exports = routes;
