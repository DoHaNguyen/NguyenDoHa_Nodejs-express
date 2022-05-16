const express = require('express');
const FrontendController = require('../controller/FrontendController');
const route = express.Router();

route.get('/',FrontendController.home);

module.exports = route;