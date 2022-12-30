const routes = require("express").Router();
const product = require("./productRoute");
const user = require("./userRoute");
const order = require("./orderRoute");

routes.use("/api/products", product);
routes.use("/api/user", user);
routes.use("/api/order", order);

module.exports = routes;
