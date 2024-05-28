const categoryController = require("../controllers/category_controller");

const { postFormData } = require("../middlewares/multer");
const router = require("express").Router();

router.get("/", categoryController.findAll);
router.get("/:id", categoryController.findById);
router.post("/", postFormData.none(), categoryController.create);
router.put("/:id", postFormData.none(), categoryController.update);
router.delete("/:id", categoryController.deleteById);

module.exports = router;
