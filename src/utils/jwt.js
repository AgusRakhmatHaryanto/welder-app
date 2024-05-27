const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

async function generateToken(data) {
    const token = await jwt.sign(data, secret, {
        expiresIn: '12h'
    });
    return token;
}

module.exports = {generateToken}