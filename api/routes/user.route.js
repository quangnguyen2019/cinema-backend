const express = require('express');

const controller = require('../controllers/user.controller');

const router = express.Router();

router.get('/getUsers', controller.GetUsers);

router.get('/getUser/:id', controller.GetDetailUser);

router.post('/addUser', controller.AddUser);

router.delete('/removeUser/:id', controller.RemoveUser);

router.patch('/updateUser/:id', controller.UpdateUser);

module.exports = router;