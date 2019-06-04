const express = require('express');

const controller = require('../controllers/booking.controller');

const router = express.Router();

router.get('/', controller.GetBookings);

router.get('/:id', controller.GetDetailBooking);

router.post('/', controller.AddBooking);

router.delete('/:id', controller.RemoveBooking);

router.patch('/:id', controller.UpdateBooking);

module.exports = router;