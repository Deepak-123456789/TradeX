const User = require("../model/userModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);

    // Optionally set a cookie (you can remove if not needed)
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // ✅ Send token in response
    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      token,
      user: { email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed", success: false });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);

    // Optionally set a cookie (can be removed)
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // ✅ Send token in response
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      token,
      user: { email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed", success: false });
  }
};

module.exports.Logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};
