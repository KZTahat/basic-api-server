"use strict";

const express = require("express");
const app = express();
const notFoundHandler = require("./Handlers/404.js");
const internalServerError = require("./Handlers/500.js");
const loggerMiddelware = require("./middelware/logger.js");
const testRoutes = require("./Routes/testingRoutes.js");
const foodRoutes = require("./Routes/foodRoutes.js");
const clothesRoutes = require("./Routes/clothesRoutes.js");

app.use(loggerMiddelware); // logger middelware for all EPs

app.use(testRoutes);
app.use(foodRoutes);
app.use(clothesRoutes);

app.use("*", notFoundHandler); //404 erro r handler
app.use(internalServerError); //500 error handler

function start(port) {
  app.listen(port, () => console.log(`Listening On Port ${port}`));
}

module.exports = {
  start,
  app,
};
