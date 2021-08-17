"use strict";

function getHomeInfo(req, res) {
  res.status(200).send("All Good :)");
}

function getServerErrorInfo(req, res, next) {
  next("this is a bad EP");
}

module.exports = {
  getHomeInfo,
  getServerErrorInfo,
};
