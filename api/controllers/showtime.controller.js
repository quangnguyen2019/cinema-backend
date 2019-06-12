const Showtime = require('../../models/showtime.model');

module.exports.GetShowtimes = async function (req, res) {
    const showtimes = await Showtime.findAll();
    res.json(showtimes);
};

module.exports.GetDetailShowtime = async function(req, res) {
    const id = req.params.id;

    const showtime = await Showtime.findOne({
        where: {
            id: id
        }
    });

    res.json(showtime);
};

module.exports.AddShowtime = async function(req, res) {
    const showtime = await Showtime.create(req.body);
    res.json(showtime);
};

module.exports.RemoveShowtime = async function(req, res) {
    const id = req.params.id;

    const showtime = await Showtime.destroy({
        where: {
            id: id
        }
    });

    res.json(showtime);
};

module.exports.UpdateShowtime = async function(req, res) {
    const id = req.params.id;

    const showtime = await Showtime.update(
        { 
            password: req.body.password, 
            full_name: req.body.full_name 
        }, {
            where: {
                id: id
            }
        }
    );

    res.json(showtime);
};