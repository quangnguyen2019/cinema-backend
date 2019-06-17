const Sequelize = require('sequelize');

const db = require('../../models/db');
const Booking = require('../../models/booking.model');

module.exports.GetBookings = async function (req, res) {
    const bookings = await Booking.findAll();
    res.json(bookings);
};

module.exports.GetDetailBooking = async function(req, res) {
    const id = req.params.id;
    const query = 'select distinct mv.name as movie_name, cgp.name as cinema_group_name, st.start_time ' +
                  'from "Cinema" as cin join "Cinema_Group" as cgp on (cin.cinema_group_id = cgp.id) ' +
                        'join "Showtime" as st on (cin.id = st.cinema_id) ' +
                        'join "Movie" as mv on (st.movie_id = mv.id) ' +
                  'where st.id = ' + id;

    var booking = null;
    
    await db.query(query, { type: Sequelize.QueryTypes.SELECT}).then(result => {
        console.log(result);
        booking = result;
    });

    res.json(booking);
};

module.exports.AddBooking = async function(req, res) {
    const booking = await Booking.create(req.body);
    res.json(booking);
};

module.exports.RemoveBooking = async function(req, res) {
    const id = req.params.id;

    const booking = await Booking.destroy({
        where: {
            id: id
        }
    });

    res.json(booking);
};

module.exports.UpdateBooking = async function(req, res) {
    const id = req.params.id;

    const booking = await Booking.update(
        { 
            password: req.body.password, 
            full_name: req.body.full_name 
        }, {
            where: {
                id: id
            }
        }
    );

    res.json(booking);
};