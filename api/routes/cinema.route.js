const express = require('express');

const controller = require('../controllers/cinema.controller');

const router = express.Router();

router.get('/getCinemas', controller.GetCinemas);

router.get('/getCinema/:id', controller.GetDetailCinema);

router.post('/addCinema', controller.AddCinema);

router.delete('/removeCinema/:id', controller.RemoveCinema);

router.patch('/updateCinema/:id', controller.UpdateCinema);

module.exports = router;