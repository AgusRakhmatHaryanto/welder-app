
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

async function findAll() {
    const categories = await prisma.category.findMany();
    return categories;
}

async function findById(id) {
    const category = await prisma.category.findUnique({
        where: {
            id
        }
    });
    return category;
}

async function create(data) {
    const category = await prisma.category.create({
        data
    });
    return category;
}

async function update(id, data) {
    const category = await prisma.category.update({
        where: {
            id
        },
        data
    });
    return category;
}

async function deleteById(id) {
    const category = await prisma.category.delete({
        where: {
            id
        }
    });
    return category;
}

async function deleteAll() {
    const categories = await prisma.category.deleteMany();
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
