const express = require("express");
const productRouter = express.Router();
const { isLogged, isAdmin } = require("../middlewares");
const { productDelete } = require("../controllers/product");

productRouter.delete("/:id", isLogged, isAdmin, productDelete);

module.exports = productRouter;
