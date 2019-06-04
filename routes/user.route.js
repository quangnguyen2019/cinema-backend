const express = require('express');
const User = require('../models/user.model');

const router = express.Router();

router.get('/', async function (req, res) {
    const users = await User.findAll({
        attributes: ['id', 'email', 'password', 'full_name', 'phone', 'role']
    });

    res.render('index', {
        users: users
    });
});

module.exports = router;