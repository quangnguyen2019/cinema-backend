const Show = require('../../models/show.model');

module.exports.GetShows = async function (req, res) {
    const shows = await Show.findAll();
    res.json(shows);
};

module.exports.GetDetailShow = async function(req, res) {
    const id = req.params.id;

    const show = await Show.findOne({
        where: {
            id: id
        }
    });

    res.json(show);
};

module.exports.AddShow = async function(req, res) {
    const show = await Show.create(req.body);
    res.json(show);
};

module.exports.RemoveShow = async function(req, res) {
    const id = req.params.id;

    const show = await Show.destroy({
        where: {
            id: id
        }
    });

    res.json(show);
};

module.exports.UpdateShow = async function(req, res) {
    const id = req.params.id;

    const show = await Show.update(
        { 
            password: req.body.password, 
            full_name: req.body.full_name 
        }, {
            where: {
                id: id
            }
        }
    );

    res.json(show);
};