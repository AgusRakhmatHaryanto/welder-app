const authService = require("../services/auth_service");

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authService.login(email, password);
        res.status(200).json({
            token: user.token,
            refreshToken: user.refreshToken,
            userId: user.user.id,
            username: user.user.username
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findByToken = async (req, res) => {
    const { token } = req.params;
    try {
        const user = await authService.findTokenByToken(token);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteByToken = async (req, res) => {
    const { token } = req.params;
    try {
        const user = await authService.deleteTokenByToken(token);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.refreshToken = async (req, res) => {
    const { token } = req.params;
    try {
        const user = await authService.refreshToken(token);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}