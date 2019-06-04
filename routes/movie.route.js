const express = require('express');
const Movie = require('../models/movie.model');
const Show = require('../models/show.model');

const router = express.Router();

router.get('/:id', async function (req, res) {
    const id = req.params.id;

    const movie = await Movie.findOne({
        where: {
            id: id
        }
    });

    const shows = await Show.findAll({
        attributes: ['id', 'cinema_id', 'movie_id', 'start_time', 'end_time', 'price']
    });

    res.render('movie', {
        movie: movie,
        shows: shows
    });
});

module.exports = router;