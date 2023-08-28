const express = require("express");
const userRouter = require("./user.routes");
const wineRouter = require("./wine.routes");
const productRouter = require("./product.routes");

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/product", productRouter);
apiRouter.use("/product/wine", wineRouter);

module.exports = apiRouter;
