const express = require("express");
const {
  createUser,
  login,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
} = require("../controllers/userCtrl");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/login", login);
router.get("/users", getUsers);
router.get("/:id", authMiddleware,isAdmin, getUser); 
router.delete("/:id", deleteUser);
router.put("/:id", authMiddleware, updateUser);
router.put("/block/:id", authMiddleware, isAdmin, blockUser); 
router.put("/unblock/:id", authMiddleware, isAdmin, unblockUser); 

module.exports = router;
