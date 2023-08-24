/**
 * Logs out a user by clearing the authentication token cookie.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} A response indicating successful logout.
 * @throws {Error} If a server error occurs during the process.
 */
const userLogout = async (req, res) => {
  try {
    return res.clearCookie("token").sendStatus(200);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error });
  }
};

module.exports = userLogout;
