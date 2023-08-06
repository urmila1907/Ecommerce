const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongodbID = require("../utils/validateMongodbID");

//Creating a blog
const createBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.json(blog);
  } catch (err) {
    throw new Error(err);
  }
});

//Updating a blog
const updateBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  validateMongodbID(blogId);
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, {
      new: true,
    });
    res.json(updatedBlog);
  } catch (err) {
    throw new Error(err);
  }
});

//Deleting a blog
const deleteBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  validateMongodbID(blogId);
  try {
    await Blog.findByIdAndDelete(blogId);
    res.json("The blog has been deleted");
  } catch (err) {
    throw new Error("No such blog exists");
  }
});

//Getting a blog's details
const getBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  validateMongodbID(blogId);
  try {
    //If you want only id of people who liked or disliked the blog, use "likes"._id or "dislikes"._id in the populate line
    const findBlog = await Blog.findById(blogId)
      .populate("likes")
      .populate("dislikes");
    const updateViews = await Blog.findByIdAndUpdate(
      blogId,
      {
        $inc: { countViews: 1 },
      },
      { new: true }
    );
    res.json(findBlog);
  } catch (err) {
    throw new Error(err);
  }
});

//Getting all blogs
const getBlogs = asyncHandler(async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    throw new Error(err);
  }
});

//Like a blog
const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongodbID(blogId);
  // Find the blog which you want to be liked
  const blog = await Blog.findById(blogId);
  // find the login user
  const loginUserId = req?.user;
  // find if the user has liked the blog
  const isLiked = blog?.isLiked;
  // find if the user has disliked the blog
  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  if (alreadyDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

//Dislike a blog
const dislikeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongodbID(blogId);
  // Find the blog which you want to be liked
  const blog = await Blog.findById(blogId);
  // find the login user
  const loginUserId = req?.user;
  // find if the user has liked the blog
  const isDisLiked = blog?.isDisliked;
  // find if the user has disliked the blog
  const alreadyLiked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  if (alreadyLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isDisLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  likeBlog,
  dislikeBlog,
};
