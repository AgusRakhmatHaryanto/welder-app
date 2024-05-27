const userRepository = require('../repositories/user_repository');
const {hashPassword, comparePassword} = require('../utils/hash_password');
const {generateToken} = require('../utils/jwt');

async function create(data) {
    const hashedPassword = await hashPassword(data.password);
    data.password = hashedPassword;
    const user = await userRepository.create(data);
    return user;
}

async function login(email, password) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
        return null;
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
        return null;
    }
    const token = await generateToken({
        id: user.id
    });
    return {
        token,
        user
    }
}

async function findById(id) {
    const user = await userRepository.findById(id);
    if (!user) {
        return null;
    }
    return user;
}

async function findAll() {
    const users = await userRepository.findAll();
    return users;
}

async function update(id, data) {
    const user = await userRepository.update(id, data);
    return user;
}

async function deleteById(id) {
    const user = await userRepository.deleteById(id);
    return user;
}

module.exports = {
    create,
    login,
    findById,
    findAll,
    update,
    deleteById
}