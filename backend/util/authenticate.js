const jwt = require("jsonwebtoken");

module.exports.authenticate = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    console.log("User authenticated:", decoded);
    next();
  } catch (err) {
    console.log("JWT verification failed:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};
