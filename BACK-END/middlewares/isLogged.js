const { SECRET_TOKEN } = require("../config");
const jwt = require("jsonwebtoken");

const isLogged = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).send("Access denied");

    const decoded = jwt.verify(token, SECRET_TOKEN);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).send("Access denied");
  }
};

module.exports = isLogged;
