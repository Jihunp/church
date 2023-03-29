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

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})


//Routes
const ffpcRouter = require("./routes/ffpc");
app.use("/ffpc", ffpcRouter);

//connect to front end
// app.get("/getData", (req,res) => {
//   res.send("Hello");
// })


// app listener
// app.listen(PORT, () => {
//   console.log("Listening on Port: ", PORT );
// })

app.listen(PORT, () => {
  console.log("Listening on Port: ", PORT);
})