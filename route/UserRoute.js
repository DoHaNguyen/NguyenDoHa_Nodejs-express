const express = require('express');
const UserController = require('../controller/UserController');
const route = express.Router();

route.get('/user',UserController.user);
route.get('/adduser',UserController.adduser);
route.post('/guiadduser',UserController.guiadduser);
route.get('/userupdate/:id',UserController.UserUpdate);
module.exports=route;