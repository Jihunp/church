const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  getPost,
} = require('../controllers/ffpc')

//const ffpcCtrl = require("../controllers/ffpc");


router.get("/", getPosts); // show all Posts
router.get("/:id", getPost); // show single post
//router.put("/:id", ffpcCtrl.update); // update post
router.post("/", createPost); // create post
//router.delete("/:id", ffpcCtrl.delete); // delete post

module.exports = router;