const express = require('express');
const Movie = require('../models/movie.model');

const router = express.Router();

router.get('/', async function(req, res) {
    const movies = await Movie.findAll({
        attributes: ['id', 'name', 'publish_date', 'poster_image', 'duration']
    });

    res.render('index', {
        movies: movies
    });
});

module.exports = router;