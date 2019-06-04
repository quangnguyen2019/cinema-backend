const express = require('express');

const controller = require('../controllers/ticket.controller');

const router = express.Router();

router.get('/getTickets', controller.GetTickets);

router.get('/getTicket/:id', controller.GetDetailTicket);

router.post('/addTicket', controller.AddTicket);

router.delete('/removeTicket/:id', controller.RemoveTicket);

router.patch('/updateTicket/:id', controller.UpdateTicket);

module.exports = router;