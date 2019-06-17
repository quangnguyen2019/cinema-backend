const Sequelize = require('sequelize');

const db = require('../../models/db');
const Showtime = require('../../models/showtime.model');

module.exports.GetShowtimes = async function (req, res) {
    const showtimes = await Showtime.findAll();
    res.json(showtimes);
};

module.exports.GetDetailShowtime = async function(req, res) {
    const id = req.params.id;
    const query = 'select distinct mv.name as movie_name, cgp.name as cinema_group_name, st.start_time ' +
                  'from "Cinema" as cin join "Cinema_Group" as cgp on (cin.cinema_group_id = cgp.id) ' +
                        'join "Showtime" as st on (cin.id = st.cinema_id) ' +
                        'join "Movie" as mv on (st.movie_id = mv.id) ' +
                  'where st.id = ' + id;

    var showtime = null;
    
    await db.query(query, { type: Sequelize.QueryTypes.SELECT}).then(result => {
        showtime = result;
    });

    res.json(showtime);
};

module.exports.AddShowtime = async function(req, res) {
    const showtime = await Showtime.create(req.body);
    res.json(showtime);
};

module.exports.RemoveShowtime = async function(req, res) {
    const id = req.params.id;

    const showtime = await Showtime.destroy({
        where: {
            id: id
        }
    });

    res.json(showtime);
};

module.exports.UpdateShowtime = async function(req, res) {
    const id = req.params.id;

    const showtime = await Showtime.update(
        { 
            password: req.body.password, 
            full_name: req.body.full_name 
        }, {
            where: {
                id: id
            }
        }
    );

    res.json(showtime);
};