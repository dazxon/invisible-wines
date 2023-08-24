const userLogout = async (req, res) => {
  try {
    return res.clearCookie("token").sendStatus(200);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error });
  }
};

module.exports = userLogout;
