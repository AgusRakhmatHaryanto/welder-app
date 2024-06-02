const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createToken(data) {
  const token = await prisma.refreshToken.create({
    data,
  });
  if (!token) {
    throw new Error("Token not created");
  }
  return token;
}

async function findTokenById(userId) {
  const token = await prisma.refreshToken.findUnique({
    where: {
      userId,
    },
    include: {
      user: true,
    },
  });

  //   if (!token) {
  //     throw new Error("Token not found");
  //   }

  return token;
}

async function findByToken(token) {
  const tokenExists = await prisma.refreshToken.findUnique({
    where: {
      token,
    },
    include: {
      user: true,
    },
  });
  if (!tokenExists) {
    throw new Error("Token not found");
  }
  return tokenExists;
}

async function deleteByToken(token) {
  const tokenExists = await prisma.refreshToken.delete({
    where: {
      token,
    },
  });
  if (!tokenExists) {
    throw new Error("Token not found");
  }
  return tokenExists;
}

module.exports = {
  createToken,
  findByToken,
  deleteByToken,
  findTokenById,
};
