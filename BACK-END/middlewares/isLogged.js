const { SECRET_TOKEN } = require("../config");
const jwt = require("jsonwebtoken");

/**
 * Middleware function that checks if a user is logged in based on the presence of a valid token in cookies.
 * Adds the decoded user data to the request object if logged in.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Function} Calls the next middleware or sends an "Access denied" response.
 */
const isLogged = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).send("Access denied");

    const decoded = jwt.verify(token, SECRET_TOKEN);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(403).send("Access denied");
  }
};

module.exports = isLogged;
