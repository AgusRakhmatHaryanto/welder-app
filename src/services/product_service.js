const productRepository = require("../repositories/product_repository");

const create = async (data) => {
    const product = await productRepository.create(data);
    return product;
};

const findAll = async () => {
    const products = await productRepository.findAll();
    return products;
};

const findById = async (id) => {
    const product = await productRepository.findById(id);
    return product;
};

const update = async (id, data) => {
    const product = await productRepository.update(id, data);
    return product;
};

const deleteById = async (id) => {
    const product = await productRepository.deleteById(id);
    return product;
};

module.exports = {
    create,
    findAll,
    findById,
    update,
    deleteById
}