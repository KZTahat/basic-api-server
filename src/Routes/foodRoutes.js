"use strict";

const express = require("express");
const router = express.Router();

const {
  addNewFood,
  getAllFood,
  getOneFood,
  updateOneFood,
  deleteOneFood,
} = require("../business/foodRoutes-Implementation.js");

router.post("/food", addNewFood);
router.get("/food", getAllFood);
router.get("/food/:id", getOneFood);
router.put("/food/:id", updateOneFood);
router.delete("/food/:id", deleteOneFood);

module.exports = router;
