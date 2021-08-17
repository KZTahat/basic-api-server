"use strict";

module.exports = (err, req, res, next) => {
  res.status(500).send({
    status: 500,
    route: req.path,
    message: `Internal Server Error ${err}`,
  });
};
