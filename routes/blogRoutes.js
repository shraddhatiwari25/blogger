const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogController,
} = require("../controllers/blogController");

//router object
const router = express.Router();

//routes
router.get("/all-blog", getAllBlogsController);

//post || create blog
router.post("/create-blog", createBlogController);

//put || update blog
router.put("/update-blog/:id", updateBlogController);

//get || single blog details
router.get("/get-blog/:id", getBlogByIdController);

//delete blog
router.delete("/delete-blog/:id", deleteBlogController);

//get user blog
router.get("/user-blog/:id", userBlogController);

module.exports = router;
