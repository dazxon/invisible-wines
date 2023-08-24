const express = require("express");

const {
  userRegister,
  userLogin,
  userEditByCookie,
  userLogout,
} = require("../controllers/user");

// middlewares
const { isNotLogged, isLogged } = require("../middlewares");

// router express
const userRouter = express.Router();

// routes
userRouter.post("/register", isNotLogged, userRegister);
userRouter.post("/login", isNotLogged, userLogin);
userRouter.put("/edit", isLogged, userEditByCookie);
userRouter.post("/logout", isLogged, userLogout);

// router express export
module.exports = userRouter;
