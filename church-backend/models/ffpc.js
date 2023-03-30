const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FfpcSchema = new Schema(
  {
    title: {type: String, required: true}
  },
  {
    caption: {type: String, required: true}
  },
  { timestamps: true })

const Ffpc = mongoose.model("Ffpc", FfpcSchema);
module.exports = Ffpc;