"use strict";

const { FoodModel } = require("../models");

async function addNewFood(req, res) {
  try {
    let foodInfo = req.body;
    let newMeal = await FoodModel.create(foodInfo);
    res.status(201).json(newMeal);
  } catch (err) {
    console.log(`error creating new meal ${err}`);
  }
}
async function getAllFood(req, res) {
  try {
    let allFood = await FoodModel.findAll();
    res.status(200).json(allFood);
  } catch (err) {
    console.log(`error getting all food ${err}`);
  }
}
async function getOneFood(req, res) {
  try {
    const id = parseInt(req.params.id);
    let meal = await FoodModel.findOne({ where: { id } });
    res.status(200).json(meal);
  } catch (err) {
    console.log(`error gettimg one one meal ${err}`);
  }
}
async function updateOneFood(req, res) {
  try {
    const id = parseInt(req.params.id);
    let newFoodInfo = req.body;
    let meal = await FoodModel.findOne({ where: { id } });
    let updatedMeal = await meal.update(newFoodInfo);
    res.status(200).json(updatedMeal);
  } catch (err) {
    console.log(`error updating one meal ${err}`);
  }
}
async function deleteOneFood(req, res) {
  try {
    const id = parseInt(req.params.id);
    let deletedMeal = await FoodModel.destroy({ where: { id } });
    res.status(204).json(deletedMeal);
  } catch (err) {
    console.log(`error deleting one meal ${err}`);
  }
}

module.exports = {
  addNewFood,
  getAllFood,
  getOneFood,
  updateOneFood,
  deleteOneFood,
};
