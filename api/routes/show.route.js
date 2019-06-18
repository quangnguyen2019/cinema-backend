const express = require('express');

const controller = require('../controllers/show.controller');

const router = express.Router();

router.get('/getShows', controller.GetShows);

router.get('/getShow/:id', controller.GetDetailShow);

router.post('/addShow', controller.AddShow);

router.delete('/removeShow/:id', controller.RemoveShow);

router.patch('/updateShow/:id', controller.UpdateShow);

module.exports = router;