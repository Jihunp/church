const express = require("express");
const router = express.Router();
const ffpcCtrl = require("../controllers/ffpc");

// INDUCES ROUTES //
router.get("/", ffpcCtrl.index); // index route
router.get("/:id", ffpcCtrl.show); // show single route
router.put("/:id", ffpcCtrl.update); // update route
router.post("/", ffpcCtrl.create); // create route
router.delete("/:id", ffpcCtrl.delete); // delete route

module.exports = router;