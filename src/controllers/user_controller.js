const userService = require('../services/user.service');

exports.create = async (req, res) => {
    try {
        const user = await userService.create(req.body);
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.login = async (req, res) => {
    try {
        const user = await userService.login(req.body.email, req.body.password);
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.findById = async (req, res) => {
    try {
        const user = await userService.findById(req.params.id);
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.findAll = async (req, res) => {
    try {
        const users = await userService.findAll();
        res.send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.update = async (req, res) => {
    try {
        const user = await userService.update(req.params.id, req.body);
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.deleteById = async (req, res) => {
    try {
        const user = await userService.deleteById(req.params.id);
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}