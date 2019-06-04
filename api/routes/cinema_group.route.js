const express = require('express');

const controller = require('../controllers/cinema_group.controller');

const router = express.Router();

router.get('/', controller.GetCinemaGroups);

router.get('/:id', controller.GetDetailCinemaGroup);

router.post('/', controller.AddCinemaGroup);

router.delete('/:id', controller.RemoveCinemaGroup);

router.patch('/:id', controller.UpdateCinemaGroup);

module.exports = router;