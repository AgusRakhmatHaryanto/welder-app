const authService = require("../services/auth_service");

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authService.login(email, password);
        res.status(200).send({
            message: "Login successful",
            token: user.token,
            refreshToken: user.refreshToken,
            userId: user.user.id,
            username: user.user.username
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

exports.findByToken = async (req, res) => {
    const { token } = req.params;
    try {
        const user = await authService.findTokenByToken(token);
        res.status(200).send({
            message: "Token found",
            user: user
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

exports.deleteByToken = async (req, res) => {
    const { token } = req.params;
    try {
        const user = await authService.deleteTokenByToken(token);
        res.status(200).send({
            message: "Token deleted",
            user: user
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

exports.refreshToken = async (req, res) => {
    const { token } = req.params;
    try {
        const user = await authService.refreshToken(token);
        res.status(200).send({
            message: "Token refreshed",
            token: user.token,
            refreshToken: user.refreshToken,
            userId: user.user.id,
            username: user.user.username
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

exports.verifyEmailToken = async (req, res) => {
    const { token } = req.params;
    try {
        const user = await authService.verifyEmail(token);
        res.status(200).send({
            message: "Email verified",
            user: user
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}