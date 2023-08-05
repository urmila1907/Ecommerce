const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/productCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/:productId", getProduct);
router.get("/", getAllProducts);
router.put("/:productId", authMiddleware, isAdmin, updateProduct);
router.delete("/:productId", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
