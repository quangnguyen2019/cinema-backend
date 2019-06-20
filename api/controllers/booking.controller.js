const Sequelize = require('sequelize');

const db = require('../../models/db');
const Booking = require('../../models/booking.model');

module.exports.GetBookings = async function (req, res) {
    const bookings = await Booking.findAll();
    res.json(bookings);
};

module.exports.GetSeatsByShowtime = async function(req, res) {
    const id = req.params.id;
    const query = 'select distinct bk.seats ' +
                  'from "Booking" as bk, "Showtime" as st ' +
                  'where bk.showtime_id = ' + id;

    var seats = null;
    
    await db.query(query, { type: Sequelize.QueryTypes.SELECT })
            .then(result => {
                seats = result;
            });

    res.json(seats);
};

module.exports.GetBookingsByUser = async function(req, res) {
    const userId = req.params.id;
    const query = 'select mv.name as movie_name, cgp.name as cinema_gr_name, cin.name as room, st.date_showing, st.start_time, bk.seats ' +
                  'from "Booking" as bk join "Showtime" as st on (bk.showtime_id = st.id) ' +
                        'join "Movie" as mv on (st.movie_id = mv.id) ' +
                        'join "Cinema" as cin on (st.cinema_id = cin.id) ' +
                        'join "Cinema_Group" as cgp on (cin.cinema_group_id = cgp.id) ' +
                  'where bk.user_id = ' + userId;

    var booking = null;

    await db.query(query, { type: Sequelize.QueryTypes.SELECT })
            .then(result => {
                booking = result;
            });

    res.json(booking);
}

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