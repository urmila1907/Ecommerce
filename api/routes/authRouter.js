const express = require("express");
const {
  createUser,
  login,
  getUsers,
  getUser,
} = require("../controllers/userCtrl");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);
router.get("/users",getUsers);
router.get("/:userId",getUser);

module.exports = router;