const express = require("express");
const router = express.Router();
const {
  createCoupon,
  updateCoupon,
  deleteCoupon,
  getCoupons,
  getCoupon,
} = require("../controllers/couponCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/", authMiddleware, isAdmin, getCoupons);
router.get("/:id", authMiddleware, isAdmin, getCoupon);
router.put("/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/:id", authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
