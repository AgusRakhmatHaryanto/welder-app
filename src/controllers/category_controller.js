const categoryService = require("../services/category_service");

exports.create = async (req, res) => {
  try {
    const category = await categoryService.create(req.body);
    res.status(201).send({
      message: "Category was created successfully!",
      data: category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const category = await categoryService.update(req.params.id, req.body);
    res.status(200).send({
      message: "Category was updated successfully!",
      data: category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.findById = async (req, res) => {
  try {
    const category = await categoryService.findById(req.params.id);
    res.status(200).send({
      message: "Category was found successfully!",
      data: category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.deleteById = async (req, res) => {
  try {
    const category = await categoryService.deleteById(req.params.id);
    res.status(200).send({
      message: "Category was deleted successfully!",
      data: category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const categories = await categoryService.findAll();
    res.status(200).send({
      message: "Categories were found successfully!",
      data: categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const categories = await categoryService.deleteAll();
    res.status(200).send({
      message: "Categories were deleted successfully!",
      data: categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
