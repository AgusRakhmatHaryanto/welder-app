const userService = require("../services/user.service");

exports.create = async (req, res) => {
  try {
    const user = await userService.create(req.body);
    res.status(201).send({
      message: "User was created successfully!",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);
    res.status(200).send({
      token: user.token,
      user: user.username,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.findById = async (req, res) => {
  try {
    const user = await userService.findById(req.params.id);
    res.status(200).send({
      message: "User was found successfully!",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const users = await userService.findAll();
    res.status(200).send({
      message: "Users were found successfully!",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    res.status(200).send({
      message: "User was updated successfully!",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.deleteById = async (req, res) => {
  try {
    const user = await userService.deleteById(req.params.id);
    res.status(200).send({
      message: "User was deleted successfully!",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.updateByEmail = async (req, res) => {
  try {
    const user = await userService.updateByEmail(req.params.email, req.body);
    res.status(200).send({
      message: "User was updated successfully!",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
