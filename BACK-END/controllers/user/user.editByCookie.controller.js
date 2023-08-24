const UserModel = require("../../schemas/User.schema");

/**
 * Edits the user's profile based on the provided data using the user's cookie authentication.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} A response containing the updated user's profile.
 * @throws {Error} If a server error occurs during the process.
 */
const userEditByCookie = async (req, res) => {
  try {
    const userId = req.user._id;
    const updateData = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, {
      new: true,
    }).select(
      "-isPhoneValidated -isEmailValidated -password -createdAt -updatedAt -lastLoginAt -salt -__v"
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error });
  }
};

module.exports = userEditByCookie;
