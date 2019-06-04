const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.render('login');
});

router.post('/', async function(req, res) {
    const email = req.body.email;
    
});

module.exports = router;