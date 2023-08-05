const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productCtrl");

router.post("/", createProduct);
router.get("/:productId", getProduct);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
