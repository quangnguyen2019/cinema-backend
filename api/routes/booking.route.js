const express = require('express');

const controller = require('../controllers/booking.controller');

const router = express.Router();

router.get('/getBookings', controller.GetBookings);

router.get('/getSeatsByShowtime/:id', controller.GetSeatsByShowtime);

router.post('/addBooking', controller.AddBooking);

router.delete('/removeBooking/:id', controller.RemoveBooking);

router.patch('/updateBooking/:id', controller.UpdateBooking);

module.exports = router;