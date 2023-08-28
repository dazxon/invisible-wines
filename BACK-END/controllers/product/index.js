const wineCreate = require("./wine/wine.create.controller");
const wineEdit = require("./wine/wine.edit.controller");
const productDelete = require("./product.delete.controller");

module.exports = { productDelete, wineCreate, wineEdit };
