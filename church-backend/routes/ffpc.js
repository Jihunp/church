const express = require("express");
const router = express.Router();

const {
  createPost,
  deletePost,
  updatePost,
  getPosts,
  getPost,
} = require('../controllers/ffpc')


router.get("/", getPosts); // show all Posts
router.get("/:id", getPost); // show single post
router.post("/", createPost); // create post
router.delete("/:id", deletePost); // delete post
router.put("/:id", updatePost); // update post

module.exports = router;