const express = require("express");
const userRouter = require("./user.routes");
const productRouter = require("./product.routes");

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/product", productRouter);

module.exports = apiRouter;
