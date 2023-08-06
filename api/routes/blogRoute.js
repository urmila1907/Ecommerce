const express = require("express");
const router = express.Router();
const {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  likeBlog,
  dislikeBlog,
} = require("../controllers/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createBlog);
router.get("/:blogId", getBlog);
router.get("/", getBlogs);
router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, dislikeBlog);
router.put("/:blogId", authMiddleware, isAdmin, updateBlog);
router.delete("/:blogId", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
