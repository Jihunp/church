const Ffpc = require("../models/ffpc");
const mongoose = require('mongoose')

//get all posts
const getPosts = async(req,res) => {
  const ffpcs = await Ffpc.find({}).sort({createdAt: -1})

  res.status(200).json(ffpcs)
}

//get a single post
const getPost = async(req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "no such post"})
  }

  const ffpc = await Ffpc.findById(id)
  if(!ffpc) {
    return res.status(404).json({error: "no post is found"})
  }
  res.status(200).json(ffpc)
}


// create new post
const createPost = async(req, res) => {
  const {title, caption} = req.body
  
  try {
    const ffpc = await Ffpc.create({title, caption})
    res.status(200).json(ffpc)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a post
const deletePost = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such post'})
  }
  const ffpc = await Ffpc.findOneAndDelete({_id: id})

  if(!ffpc) {
    return res.status(404).json({error: "no post is found"})
  }
  res.status(200).json(ffpc)
}

//update a post
const updatePost = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such post'})
  }

  const ffpc = await Ffpc.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if(!ffpc) {
    return res.status(404).json({error: "no post is found"})
  }
  res.status(200).json(ffpc)
}

module.exports = {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
};