require("dotenv").config();
const UserModel = require("../../schemas/User.schema");
const { encrypt } = require("../../utils/crypto");
const { sendEmail } = require("../nodemailer");
const fs = require("fs");
const path = require("path");
const absolutePath = path.resolve(
  __dirname,
  "../../utils/emails/confirmation-email.html"
);
const { BASE_URL } = process.env;

/**
 * Registers a new user with the provided data, sends a confirmation email, and handles errors.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} A response indicating the result of the registration process.
 * @throws {Error} If a server error occurs during the process.
 */
const userRegister = async (req, res) => {
  const { email } = req.body;
  let user = await UserModel.findOne({ email });
  try {
    if (user) return res.status(404).json({ message: "Invalid credentials" });
    user = await UserModel.create({ ...req.body });
    if ((await UserModel.countDocuments()) === 1) {
      user.role = "admin";
      await user.save();
    }
    let emailContent = fs.readFileSync(absolutePath, "utf-8");
    const encryptedId = encrypt(user._id);
    const confirmationUrl = `${BASE_URL}/user/confirmationEmail/${encryptedId}`;
    emailContent = emailContent.replace("${confirmationUrl}", confirmationUrl);
    sendEmail(user.email, "Validate user", emailContent);
    return res.sendStatus(201);
  } catch (error) {
    await user.deleteOne({ email });
    return res.status(500).send(error.message);
  }
};

module.exports = userRegister;
