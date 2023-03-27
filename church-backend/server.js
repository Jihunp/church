require("dotenv").config();
require("./config/db");

// --- Dependencies ---//
const express = require("express");
cors = require("cors");


const app = express();

const PORT = process.env.PORT;

//middle ware
app.use(cors())
app.use(express.json())


//Routes
const ffpcRouter = require("./routes/ffpc");
app.use("/ffpc", ffpcRouter);


// app listener
app.listen(PORT, () => {
  console.log("Listening on Port: ", PORT );
})