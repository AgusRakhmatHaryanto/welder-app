const productService = require("../services/product_service");

exports.create = async (req, res) => {
  try {
    const product = await productService.create(req.body);
    res.status(200).send({
      message: "Product was created successfully!",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const products = await productService.findAll();
    res.status(200).send({
      message: "Products were found successfully!",
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.findById = async (req, res) => {
  try {
    const product = await productService.findById(req.params.id);
    res.status(200).send({
      message: "Product was found successfully!",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const product = await productService.update(req.params.id, req.body);
    res.status(200).send({
      message: "Product was updated successfully!",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.deleteById = async (req, res) => {
  try {
    const product = await productService.deleteById(req.params.id);
    res.status(200).send({
      message: "Product was deleted successfully!",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
