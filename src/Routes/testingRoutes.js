const express = require("express");
const router = express.Router();

const { getHomeInfo, getServerErrorInfo} = require('../business/testRoutes-Implementation.js');
router.get("/", getHomeInfo);
router.get("/bad", getServerErrorInfo);

module.exports = router;