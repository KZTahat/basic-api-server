"use strict";

require("dotenv").config();
const POSTGRES_URI = process.env.POSTGRES_URI;
const { Sequelize, DataTypes } = require("sequelize");
const foodModel = require("./food.model.js");
const clothesModel = require("./clothes.model");

var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
  db: sequelize,
  FoodModel: foodModel(sequelize, DataTypes),
  ClothesModel: clothesModel(sequelize, DataTypes),
};
