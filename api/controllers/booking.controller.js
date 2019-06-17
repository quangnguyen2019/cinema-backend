const Sequelize = require('sequelize');

const db = require('../../models/db');
const Booking = require('../../models/booking.model');

module.exports.GetBookings = async function (req, res) {
    const bookings = await Booking.findAll();
    res.json(bookings);
};

module.exports.GetDetailBooking = async function(req, res) {
    const id = req.params.id;
    
    const booking = await Booking.findOne({
        where: {
            id: id
        }
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