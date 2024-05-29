const userRepository = require("../repositories/user_repository");
const tokenRepository = require("../repositories/token_repository");
const { comparePassword } = require("../utils/hash_password");
const { generateToken, generateRefreshToken } = require("../utils/jwt");

exports.login = async (email, password) => {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new Error("Incorrect password");
  }

  const token = await generateToken({
    id: user.id,
  });
  const refreshToken = await generateRefreshToken({
    id: user.id,
  });
  const findToken = await tokenRepository.findTokenById(user.id);

  if (findToken) {
    throw new Error("Token already exists");
  }
  
  await tokenRepository.createToken({
    token: refreshToken,
    userId: user.id,
  });


  return {
    token,
    refreshToken,
    // tokenCreated,
    user,
  };
};

exports.findTokenByToken = async (token) => {
  const tokenData = await tokenRepository.findByToken(token);
  if (!tokenData) {
    throw new Error("Token not found");
  }
  return tokenData;
};

exports.deleteTokenByToken = async (token) => {
  const tokenData = await tokenRepository.deleteByToken(token);
  if (!tokenData) {
    throw new Error("Token not found");
  }
  return tokenData;
};

exports.refreshToken = async (refreshToken) => {
  const tokenData = await tokenRepository.findByToken(refreshToken);

  if (!tokenData) {
    throw new Error("Token not found");
  }

  const user = await userRepository.getUserById(tokenData.userId);

  if (!user) {
    throw new Error("User not found");
  }

  const token = await generateToken({
    id: user.id,
  });

  return {
    token,
    user,
  };
};
