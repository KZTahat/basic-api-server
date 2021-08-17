"use strict";

const express = require("express");
const router = express.Router();

const {
  addNewCloth,
  getAllCloth,
  getOneCloth,
  updateOneCloth,
  deleteOneCloth,
} = require("../business/ClothesRoutes-Implementation.js");

router.post("/Cloth", addNewCloth);
router.get("/Cloth", getAllCloth);
router.get("/Cloth/:id", getOneCloth);
router.put("/Cloth/:id", updateOneCloth);
router.delete("/Cloth/:id", deleteOneCloth);

module.exports = router;