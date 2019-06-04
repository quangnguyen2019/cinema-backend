const express = require('express');

const controller = require('../controllers/movie.controller');

const router = express.Router();

router.get('/', controller.GetMovies);

router.get('/:id', controller.GetDetailMovie);

router.post('/', controller.AddMovie);

router.delete('/:id', controller.RemoveMovie);

router.patch('/:id', controller.UpdateMovie);

module.exports = router;