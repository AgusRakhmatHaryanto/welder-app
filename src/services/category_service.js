const categoryRepository = require("../repositories/category_repository");

const create = async (data) => {
  const category = await categoryRepository.create(data);
  return category;
};
const update = async (id, data) => {
  const category = await categoryRepository.update(id, data);
  return category;
};
const deleteById = async (id) => {
  const category = await categoryRepository.deleteById(id);
  return category;
};
const findAll = async () => {
  const categories = await categoryRepository.findAll();
  return categories;
};
const findById = async (id) => {
  const category = await categoryRepository.findById(id);
  return category;
};

module.exports = {
  create,
  update,
  deleteById,
  findAll,
  findById,
};
