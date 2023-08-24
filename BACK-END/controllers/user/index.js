const userLogin = require("./user.login.controller");
const userRegister = require("./user.register.controller");
const userEditByCookie = require("./user.editByCookie.controller");
const userLogout = require("./user.logout.controller");

module.exports = {
  userLogin,
  userRegister,
  userEditByCookie,
  userLogout,
};
