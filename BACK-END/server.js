const { SERVER_PORT } = require("./config");
const db = require("./config/db");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const apiRouter = require("./routes/index.routes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api", apiRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server connected http://localhost:${SERVER_PORT}/`);
});

//CONEXION A LA BD
db();
