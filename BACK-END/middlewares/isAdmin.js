const UserModel = require("../schemas/User.schema");

/**
 * Middleware function that checks if the user has an "admin" role.
 * Grants access to the next middleware or route if the user is an admin.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Function} Calls the next middleware or sends an "Access denied" response.
 */
const isAdmin = async (req, res, next) => {
  try {
    const { role } = await UserModel.findById(req.user._id);
    if (role !== "admin") return res.status(401).send("Access denied");
    return next();
  } catch (error) {
    return res.status(403).send("Access denied");
  }
};

module.exports = isAdmin;
