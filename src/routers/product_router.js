const productController = require("../controllers/product_controller");
const {postFormData}= require('../middlewares/multer')
const router = require("express").Router();

router.get("/", productController.findAll);
router.get("/:id", productController.findById);
router.post("/",postFormData.none(), productController.create);
router.put("/:id",postFormData.none(), productController.update);
router.delete("/:id", productController.deleteById);

module.exports = router;
