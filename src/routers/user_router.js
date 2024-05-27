const userController = require("../controllers/user_controller");
const { postFormData } = require("../middlewares/multer");
const router = require("express").Router();

router.get("/", userController.findAll);
router.get("/:id", userController.findById);
router.post("/", postFormData.none(), userController.create);
router.put("/:id", postFormData.none(), userController.update);
router.delete("/:id", userController.deleteById);
router.put(
  "/email/:email",
  postFormData.none(),
  userController.updateByEmail
);

module.exports = router;
