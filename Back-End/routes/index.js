const routes = require("express").Router();
const product = require("./productRoute");

routes.use("/api/products", product);

module.exports = routes;
