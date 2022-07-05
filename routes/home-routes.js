const express = require('express');

const {indexView, iconsView, mapView, profileView, userView,updateStatus} = require('../controllers/homeController');
const router = express.Router();


router.get('/', indexView);
router.get('/icons', iconsView);
router.get('/map', mapView);
router.get('/profile', profileView);
router.get('/user', userView);
router.post('/updateStatus',updateStatus);


module.exports = {
    routes: router
}