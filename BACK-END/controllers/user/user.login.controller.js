const { generateToken } = require("../../config/tokens");
const UserModel = require("../../schemas/User.schema");

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
