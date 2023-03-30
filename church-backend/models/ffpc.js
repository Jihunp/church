const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ffpcSchema = new Schema(
  {
    title: {type: String, required: true}
  },
  {
    caption: {type: String,}
  },
  { timestamps: true })

const Ffpc = mongoose.model("Ffpc", ffpcSchema);
module.exports = Ffpc;