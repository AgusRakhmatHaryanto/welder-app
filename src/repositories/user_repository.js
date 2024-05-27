const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function create(data) {
  const user = await prisma.user.create({
    data,
  });

  return user;
}

async function findById(id) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
}

async function findByEmail(email) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

async function findAll() {
  const users = await prisma.user.findMany();
  return users;
}

async function findByEmail(email) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

async function update(id, data) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  return user;
}

async function deleteById(id) {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
}



module.exports = {
  create,
  findById,
  findByEmail,
  findAll,
  findByEmail,
  update,
  deleteById,
};
