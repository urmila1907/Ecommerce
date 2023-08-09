const express = require("express");
const {
  createUser,
  login,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  adminLogin,
  getWishlist,
  saveAddress
} = require("../controllers/userCtrl");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, updatePassword);

router.post("/register", createUser);
router.post("/login", login);
router.post("/admin-login", adminLogin);
router.get("/refresh", handleRefreshToken);
router.get("/users", getAllUsers);
router.get("/wishlist", authMiddleware, getWishlist);
router.put("/save-address", authMiddleware, saveAddress);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.delete("/:id", deleteUser);
router.put("/:id", authMiddleware, updateUser);
router.put("/block/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock/:id", authMiddleware, isAdmin, unblockUser);

router.get("/logout", logout);

module.exports = router;
