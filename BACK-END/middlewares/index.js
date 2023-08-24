const isNotLogged = require("../middlewares/isNotLogged");
const isLogged = require("../middlewares/isLogged");
const isAdmin = require("../middlewares/isAdmin");

module.exports = { isNotLogged, isLogged, isAdmin };
