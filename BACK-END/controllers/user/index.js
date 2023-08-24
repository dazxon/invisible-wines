const userLogin = require("./user.login.controller");
const userRegister = require("./user.register.controller");
const userEditByCookie = require("./user.editByCookie.controller");
const userLogout = require("./user.logout.controller");
const userConfirmEmail = require("./user.confirmEmail.controller");

module.exports = {
  userLogin,
  userRegister,
  userEditByCookie,
  userLogout,
  userConfirmEmail,
};
