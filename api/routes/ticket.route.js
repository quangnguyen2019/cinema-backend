const express = require('express');

const controller = require('../controllers/ticket.controller');

const router = express.Router();

router.get('/', controller.GetTickets);

router.get('/:id', controller.GetDetailTicket);

router.post('/', controller.AddTicket);

router.delete('/:id', controller.RemoveTicket);

router.patch('/:id', controller.UpdateTicket);

module.exports = router;