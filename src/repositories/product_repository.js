const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

async function findAll() {
    const products = await prisma.product.findMany({
        include: {
            category: true
        },
        orderBy: {
            createdAt: "desc"
        },
    });

    if (!products) {
        throw new Error("Products not found");
    }

    return products;
}

async function findById(id) {
    const product = await prisma.product.findUnique({
        where: {
            id
        },
        include: {
            category: true
        }
    });

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
}

async function create(data) {
    const product = await prisma.product.create({
        data
    });

    if (!product) {
        throw new Error("Product not created");
    }

    return product;
}

async function update(id, data) {
    const product = await prisma.product.update({
        where: {
            id
        },
        data
    });

    if (!product) {
        throw new Error("Product not updated");
    }

    return product;
}

async function deleteById(id) {
    const product = await prisma.product.delete({
        where: {
            id
        }
    });

    if (!product) {
        throw new Error("Product not deleted");
    }
    
    return product;
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById
}