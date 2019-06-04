const express = require('express');

const controller = require('../controllers/cinema_group.controller');

const router = express.Router();

router.get('/getCinemaGroups', controller.GetCinemaGroups);

router.get('/getCinemaGroup/:id', controller.GetDetailCinemaGroup);

router.post('/addCinemaGroup', controller.AddCinemaGroup);

router.delete('/removeCinemaGroup/:id', controller.RemoveCinemaGroup);

router.patch('/updateCinemaGroup/:id', controller.UpdateCinemaGroup);

module.exports = router;