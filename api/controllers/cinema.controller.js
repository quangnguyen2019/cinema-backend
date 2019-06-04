const Cinema = require('../../models/cinema.model');

module.exports.GetCinemas = async function (req, res) {
    const cinema = await Cinema.findAll();
    res.json(cinema);
};

module.exports.GetDetailCinema = async function(req, res) {
    const id = req.params.id;

    const cinema = await Cinema.findOne({
        where: {
            id: id
        }
    });

    res.json(cinema);
};

module.exports.AddCinema = async function(req, res) {
    const cinema = await Cinema.create(req.body);
    res.json(cinema);
};

module.exports.RemoveCinema = async function(req, res) {
    const id = req.params.id;

    const cinema = await Cinema.destroy({
        where: {
            id: id
        }
    });

    res.json(cinema);
};

module.exports.UpdateCinema = async function(req, res) {
    const id = req.params.id;

    const cinema = await Cinema.update(
        { 
            password: req.body.password, 
            full_name: req.body.full_name 
        }, {
            where: {
                id: id
            }
        }
    );

    res.json(cinema);
};