const UserModel = require("../schemas/User.schema");

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
