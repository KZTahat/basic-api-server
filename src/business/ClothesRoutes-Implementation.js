"use strict";

const { ClothesModel } = require("../models");

async function addNewCloth(req, res) {
  try {
    let ClothInfo = req.body;
    let newCloth = await ClothesModel.create(ClothInfo);
    res.status(201).json(newCloth);
  } catch (err) {
    console.log(`error creating new Cloth ${err}`);
  }
}
async function getAllCloth(req, res) {
  try {
    let allCloth = await ClothesModel.findAll();
    res.status(200).json(allCloth);
  } catch (err) {
    console.log(`error getting all Clothes ${err}`);
  }
}
async function getOneCloth(req, res) {
  try {
    const id = parseInt(req.params.id);
    let Cloth = await ClothesModel.findOne({ where: { id } });
    res.status(200).json(Cloth);
  } catch (err) {
    console.log(`error gettimg one one Cloth ${err}`);
  }
}
async function updateOneCloth(req, res) {
  try {
    const id = parseInt(req.params.id);
    let newClothInfo = req.body;
    let Cloth = await ClothesModel.findOne({ where: { id } });
    let updatedCloth = await Cloth.update(newClothInfo);
    res.status(200).json(updatedCloth);
  } catch (err) {
    console.log(`error updating one Cloth ${err}`);
  }
}
async function deleteOneCloth(req, res) {
  try {
    const id = parseInt(req.params.id);
    let deletedCloth = await ClothesModel.destroy({ where: { id } });
    res.status(204).json(deletedCloth);
  } catch (err) {
    console.log(`error deleting one Cloth ${err}`);
  }
}

module.exports = {
  addNewCloth,
  getAllCloth,
  getOneCloth,
  updateOneCloth,
  deleteOneCloth,
};
