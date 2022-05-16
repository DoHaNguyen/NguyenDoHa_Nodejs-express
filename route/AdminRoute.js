const express = require('express');
const AdminController = require('../controller/AdminController');
const router = express.Router();

router.get('/dangki',AdminController.dangki);
router.get('/login',AdminController.login);
router.get('/dashboard',AdminController.kiemduyet,AdminController.dashboard);
router.post('/guidn',AdminController.guidn);
router.post('/guidk',AdminController.guidk);
router.get('/logout',AdminController.logout);
module.exports = router;