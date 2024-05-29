  const { PrismaClient } = require("@prisma/client");

  const prisma = new PrismaClient();

  async function create(data) {
    const user = await prisma.user.create({
      data,
    });

    if (!user) {
      throw new Error("User not created");
    }

    return user;
  }

  async function findById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        Order: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }



  async function findAll() {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        Order: true,
      }
    });

    if (!users) {
      throw new Error("Users not found");
    }

    return users;
  }

  async function findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async function update(id, data) {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    });

    if (!user) {
      throw new Error("User not updated");
    }

    return user;
  }

  async function deleteById(id) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error("User not deleted");
    }

    return user;
  }



  module.exports = {
    create,
    findById,
    findAll,
    findByEmail,
    update,
    deleteById,
  };
