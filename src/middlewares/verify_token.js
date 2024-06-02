const jwt = require("jsonwebtoken");

const { verifyToken } = require("../utils/jwt");

exports.verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).send("Authentication failed: No token provided");
    } else {
      const decoded = await verifyToken(token);
      req.user = decoded;
      next();
    }
  } catch (err) {
    return res.status(401).send("Authentication failed: Invalid token");
  }
};
