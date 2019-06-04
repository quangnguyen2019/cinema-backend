const express = require('express');

const controller = require('../controllers/show.controller');

const router = express.Router();

router.get('/', controller.GetShows);

router.get('/:id', controller.GetDetailShow);

router.post('/', controller.AddShow);

router.delete('/:id', controller.RemoveShow);

router.patch('/:id', controller.UpdateShow);

module.exports = router;