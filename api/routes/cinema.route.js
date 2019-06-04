const express = require('express');

const controller = require('../controllers/cinema.controller');

const router = express.Router();

router.get('/', controller.GetCinemas);

router.get('/:id', controller.GetDetailCinema);

router.post('/', controller.AddCinema);

router.delete('/:id', controller.RemoveCinema);

router.patch('/:id', controller.UpdateCinema);

module.exports = router;