/**
 * Middleware function that checks if a user is not logged in based on the absence of a token in cookies.
 * Proceeds to the next middleware or route if the user is not logged in.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Function} Calls the next middleware or sends an "Access denied" response.
 */
const isNotLogged = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (token) return res.status(401).send("Access denied");
    return next();
  } catch (error) {
    return res.status(403).send("Access denied");
  }
};

module.exports = isNotLogged;
