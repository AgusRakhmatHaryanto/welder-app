const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret_access = process.env.JWT_SECRET_ACCESS;
const secret_refresh = process.env.JWT_SECRET_REFRESH;
const secret_access_verify = process.env.JWT_SECRET_ACCESS_VERIFY;

async function generateToken(data) {
  const token = await jwt.sign(data, secret_access, {
    expiresIn: "1h",
  });
  return token;
}

async function generateVerifyToken(data) {
  const token = await jwt.sign(data, secret_access_verify, {
    expiresIn: "5m",
  });
  return token;
}

async function generateRefreshToken(data) {
  const token = await jwt.sign(data, secret_refresh, {
    expiresIn: "3d",
  });
  return token;
}

async function verifyEmailToken(token) {
  const decoded = await jwt.verify(token, secret_access_verify);
  if (!decoded) {
    throw new Error("Authentication failed: Invalid token");
  }
  return decoded;
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
  generateVerifyToken,
  verifyEmailToken,
};
