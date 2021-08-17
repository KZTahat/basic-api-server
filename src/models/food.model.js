"use strict";

const FoodModel = (sequelize, DataTypes) =>
  sequelize.define("Food", {
    foodName: {
      type: DataTypes.STRING,
    },
    suger: {
      type: DataTypes.STRING,
    },
  });

module.exports = FoodModel;
