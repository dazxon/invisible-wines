const { wineCreate } = require("../controllers/product");
const { isAdmin, isLogged } = require("../middlewares");

const express = require("express");

const productRouter = express.Router();

productRouter.post("/create/wine", isLogged, isAdmin, wineCreate);

module.exports = productRouter;
