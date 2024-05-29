
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

async function findAll() {
    const categories = await prisma.category.findMany({
        include: {
            products: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    if (!categories) {
        throw new Error("Categories not found");
    }

    return categories;
}

async function findById(id) {
    const category = await prisma.category.findUnique({
        where: {
            id
        },
        include: {
            products: true
        }
    });

    if (!category) {
        throw new Error("Category not found");
    }

    return category;
}

async function create(data) {
    const category = await prisma.category.create({
        data
    });

    if (!category) {
        throw new Error("Category not created");
    }

    return category;
}

async function update(id, data) {
    const category = await prisma.category.update({
        where: {
            id
        },
        data
    });

    if (!category) {
        throw new Error("Category not updated");
    }

    return category;
}

async function deleteById(id) {
    const category = await prisma.category.delete({
        where: {
            id
        }
    });

    if (!category) {
        throw new Error("Category not deleted");
    }

    return category;
}

async function deleteAll() {
    const categories = await prisma.category.deleteMany();

    if (!categories) {
        throw new Error("Categories not deleted");
    }
    
    return categories;
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
    deleteAll
}
