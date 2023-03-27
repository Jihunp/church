require("dotenv").config();
const mongoose = require("mongoose");
const DATABASE_URI= process.env.DATABASE_URI;

//data base conncection

mongoose.connect(DATABASE_URI);

//catch messages
const db = mongoose.connection
  .on("connected", () => console.log("database connected :-)"))
  .on("disconnected", () => console.log("FAILED database not connected :'-("))
  .on("error", (error) => console.log(error));

module.exports = db;