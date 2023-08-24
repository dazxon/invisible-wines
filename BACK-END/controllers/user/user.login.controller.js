const { generateToken } = require("../../config/tokens");
const UserModel = require("../../schemas/User.schema");

/**
 * Logs in a user based on the provided email and password.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} A response containing user data and an authentication token.
 * @throws {Error} If a server error occurs during the process.
 */
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOneAndUpdate(
      { email },
      { lastLoginAt: new Date() }
    );

    if (!user) return res.status(404).json({ message: "Invalid credentials" });
    const passwordMatch = await user.comparePassword(password);

    if (!passwordMatch)
      return res.status(404).json({ message: "Invalid credentials" });

    const payload = {
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      picture: user.picture,
      email: user.email,
    };

    const token = generateToken(payload);
    return res.cookie("token", token).send(payload);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = userLogin;
