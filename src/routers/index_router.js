const userRouter = require("./user_router");
const authRouter = require("./auth_router");
require("dotenv").config();

const api = process.env.API_URL;

const router = require("express").Router();

router.use(`/${api}/users`, userRouter);
router.use(`/${api}/auth`, authRouter);

module.exports = router;
