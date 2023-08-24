const UserModel = require("../../schemas/User.schema");
const { sendEmail } = require("../nodemailer");

const userRegister = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) return res.status(404).json({ message: "Invalid credentials" });
    const userCreated = await UserModel.create({ ...req.body });
    if ((await UserModel.countDocuments()) === 1) {
      userCreated.role = "admin";
      await userCreated.save();
    }
    sendEmail("donalisioagustin@gmail.com");
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = userRegister;
