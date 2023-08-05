const express = require("express");
const {
  createUser,
  login,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userCtrl");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);
router.get("/users", getUsers);
router.get("/:userId", getUser);
router.delete("/:userId", deleteUser);
router.put("/:userId", updateUser);

module.exports = router;
