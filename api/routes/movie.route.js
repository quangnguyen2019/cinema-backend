const express = require('express');

const controller = require('../controllers/movie.controller');

const router = express.Router();

router.get('/getMovies', controller.GetMovies);

router.get('/getMoviesHasMostViews', controller.GetMoviesHasMostViews);

router.get('/getMoviesNewlyReleased', controller.GetMoviesNewlyReleased);

router.get('/getMoviesByCinemaGroup/:id', controller.GetMoviesByCinemaGroup);

router.get('/getMovie/:id', controller.GetDetailMovie);

router.post('/addMovie', controller.AddMovie);

router.delete('/removeMovie/:id', controller.RemoveMovie);

router.patch('/updateMovie/:id', controller.UpdateMovie);

module.exports = router;