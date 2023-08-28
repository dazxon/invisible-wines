const { wineCreate, wineEdit } = require("../controllers/product");
const { isAdmin, isLogged } = require("../middlewares");

const express = require("express");

const wineRouter = express.Router();

wineRouter.post("/create", isLogged, isAdmin, wineCreate);
wineRouter.put("/edit/:id", isLogged, isAdmin, wineEdit);

module.exports = wineRouter;
