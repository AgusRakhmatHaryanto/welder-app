const userRouter = require("./user_router");
const authRouter = require("./auth_router");
const categoryRouter = require("./category_router");
require("dotenv").config();

const api = process.env.API_URL;

const router = require("express").Router();

router.use(`/${api}/users`, userRouter);
router.use(`/${api}/auth`, authRouter);
router.use(`/${api}/categories`, categoryRouter);

module.exports = router;
