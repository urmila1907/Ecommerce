const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  addToWishlist,
  rating,
  uploadImages,
} = require("../controllers/productCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  uploadPhoto,
  productImgResize,
} = require("../middlewares/uploadImages");

router.post("/", authMiddleware, isAdmin, createProduct);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);
router.get("/:productId", getProduct);
router.get("/", getAllProducts);
router.put("/rating", authMiddleware, rating);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/:productId", authMiddleware, isAdmin, updateProduct);
router.delete("/:productId", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
