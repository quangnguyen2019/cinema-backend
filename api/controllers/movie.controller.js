const Sequelize = require('sequelize');

const db = require('../../models/db');
const Movie = require('../../models/movie.model');

module.exports.GetMovies = async function(req, res) {
    const movies = await Movie.findAll();
    res.json(movies);
};

module.exports.GetMoviesHasMostViews = async function(req, res) {
    const movies = await Movie.findAll({
        order: [
            ['views', 'DESC']
        ]
    });
    
    res.json(movies);
};

module.exports.GetMoviesNewlyReleased = async function(req, res) {
    const movies = await Movie.findAll({
        order: [
            ['publish_date', 'DESC']
        ]
    });

    res.json(movies);
}

module.exports.GetMoviesByCinemaGroup = async function(req, res) {
    const id = req.params.id;
    const query = 'select distinct mv.id, mv.name, mv.poster_image ' +
                  'from "Cinema_Group" as cgp join "Cinema" as cin on (cgp.id = cin.cinema_group_id) ' +
                        'join "Showtime" as st on (cin.id = st.cinema_id) ' +
                        'join "Movie" as mv on (mv.id = st.movie_id)' +
                  'where cgp.id = ' + id;

    var movies = null;

    await db.query(query, { type: Sequelize.QueryTypes.SELECT })
            .then(result => {
                movies = result;
            });

    res.json(movies);
}

module.exports.GetDetailMovie = async function(req, res) {
    const id = req.params.id;
    
    const movie = await Movie.findOne({
        where: {
            id: id
        }
    });

    res.json(movie);
};

module.exports.AddMovie = async function(req, res) {
    const movie = await Movie.create(req.body);
    res.json(movie);
};

module.exports.RemoveMovie = async function(req, res) {
    const id = req.params.id;

    const movie = await Movie.destroy({
        where: {
            id: id
        }
    });

    res.json(movie);
};

module.exports.UpdateMovie = async function(req, res) {
    const id = req.params.id;

    const movie = await Movie.update(
        {
            name: req.body.name,
            publish_date: req.body.publish_date,
            poster_image: req.body.poster_image,
            duration: req.body.duration
        }, 
        {
            where: {
                id: id
            }
        }
    );

    res.json(movie);
};