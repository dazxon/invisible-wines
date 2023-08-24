const UserModel = require("../../schemas/User.schema");
const { decrypt } = require("../../utils/crypto");

/**
 * Confirms the user's email address based on the provided encrypted token.
 * Marks the user's email as validated in the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} A response indicating the result of the confirmation.
 * @throws {Error} If a server error occurs during the process.
 */
const userConfirmEmail = async (req, res) => {
  const { encrypted } = req.params;
  try {
    const decrypted = decrypt(encrypted);
    const user = await UserModel.findById(decrypted);

    if (!user) return res.status(200).send("Usuario no existe");
    if (user.isEmailValidated)
      return res.status(200).send("Usuario ya fue validado");

    user.isEmailValidated = true;
    await user.save();
    return res.status(200).send("Usuario validado puede ingresar");
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = userConfirmEmail;
