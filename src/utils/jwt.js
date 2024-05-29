const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret_access = process.env.JWT_SECRET_ACCESS;
const secret_refresh = process.env.JWT_SECRET_REFRESH;

async function generateToken(data) {
  const token = await jwt.sign(data, secret_access, {
    expiresIn: "1h",
  });
  return token;
}

async function generateRefreshToken(data) {
  const token = await jwt.sign(data, secret_refresh, {
    expiresIn: "3d",
  });
  return token;
}

async function verifyToken(token) {
  const data = await jwt.verify(token, secret_access);
  if (!data) {
    throw new Error("Authentication failed: Invalid token");
  }
  return data;
}

module.exports = {
  generateToken,
  generateRefreshToken,
  verifyToken,
};
