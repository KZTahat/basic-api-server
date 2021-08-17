"use strict";

const ClothesModel = (sequelize, DataTypes) =>
  sequelize.define("Clothes", {
    clothType: {
      type: DataTypes.STRING,
      alowNull: false,
    },
    color: {
      type: DataTypes.STRING,
    },
  });

module.exports = ClothesModel;