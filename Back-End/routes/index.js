const routes = require("express").Router();
const product = require("./productRoute");
const user = require("./userRoute");

routes.use("/api/products", product);
routes.use("/api/user", user);

module.exports = routes;
