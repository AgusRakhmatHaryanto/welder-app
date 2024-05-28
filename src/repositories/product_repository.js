const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

async function findAll() {
    const products = await prisma.product.findMany();
    return products;
}

async function findById(id) {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    });
    return product;
}

async function create(data) {
    const product = await prisma.product.create({
        data
    });
    return product;
}

async function update(id, data) {
    const product = await prisma.product.update({
        where: {
            id
        },
        data
    });
    return product;
}

async function deleteById(id) {
    const product = await prisma.product.delete({
        where: {
            id
        }
    });
    return product;
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById
}