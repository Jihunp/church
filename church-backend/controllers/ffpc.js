const Ffpc = require("../models/ffpc");

module.exports = {
  index,
  delete: deleteFfpcPost,
  update,
  create,
  show,
};

// INDUCES - Index Delete Update Create Edit Show
// Index Route
async function index(req, res) {
  try {
    res.json(await Ffpc.find({}).sort({idd: 1}));
  } catch (error) {
    res.status(400).json(error);
  };
};

// Delete Route
async function deleteFfpcPost(req, res) {
  try {
    res.json(await Ffpc.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  };
};

// Update Route
async function update(req, res) {
  try {
    res.json(
      await Ffpc.findByIdAndUpdate(req.params.id, req.body, {new: true})
    );
  } catch (error) {
    res.status(400).json(error);
  };
};

// Create Route
async function create(req, res) {
  try {
    res.json(await Ffpc.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  };
};

// Show Route
async function show(req, res) {
  try {
    res.json(await Ffpc.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  };
};
