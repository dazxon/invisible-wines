const isNotLogged = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (token) return res.status(401).send("Access denied");
    next();
  } catch (error) {
    return res.status(403).send("Access denied");
  }
};

module.exports = isNotLogged;
