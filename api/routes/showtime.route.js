const express = require('express');

const controller = require('../controllers/showtime.controller');

const router = express.Router();

router.get('/getShowtimes', controller.GetShowtimes);

router.get('/getShowtime/:id', controller.GetDetailShowtime);

router.post('/addShowtime', controller.AddShowtime);

router.delete('/removeShowtime/:id', controller.RemoveShowtime);

router.patch('/updateShowtime/:id', controller.UpdateShowtime);

module.exports = router;