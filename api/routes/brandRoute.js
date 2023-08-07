const express = require("express");
const router = express.Router();
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrands,
  getBrand,
} = require("../controllers/brandCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createBrand);
router.get("/", getBrands);
router.get("/:id", getBrand);
router.put("/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);

module.exports = router;
