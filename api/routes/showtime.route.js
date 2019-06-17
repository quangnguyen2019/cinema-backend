const express = require('express');

const controller = require('../controllers/showtime.controller');

const router = express.Router();

router.get('/getShowtimes', controller.GetShowtimes);

router.get('/getShowtimesByMovie/:id', controller.GetShowtimesByMovie);

router.get('/getAllInfoByShowtime/:id', controller.GetAllInfoByShowtime);

router.post('/addShowtime', controller.AddShowtime);

router.delete('/removeShowtime/:id', controller.RemoveShowtime);

router.patch('/updateShowtime/:id', controller.UpdateShowtime);

module.exports = router;