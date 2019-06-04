const Cinema_Group = require('../../models/cinema_group.model');

module.exports.GetCinemaGroups = async function (req, res) {
    const cinema_group = await Cinema_Group.findAll();
    res.json(cinema_group);
};

module.exports.GetDetailCinemaGroup = async function(req, res) {
    const id = req.params.id;

    const cinema_group = await Cinema_Group.findOne({
        where: {
            id: id
        }
    });

    res.json(cinema_group);
};

module.exports.AddCinemaGroup = async function(req, res) {
    const cinema_group = await Cinema_Group.create(req.body);
    res.json(cinema_group);
};

module.exports.RemoveCinemaGroup = async function(req, res) {
    const id = req.params.id;

    const cinema_group = await Cinema_Group.destroy({
        where: {
            id: id
        }
    });

    res.json(cinema_group);
};

module.exports.UpdateCinemaGroup = async function(req, res) {
    const id = req.params.id;

    const cinema_group = await Cinema_Group.update(
        { 
            password: req.body.password, 
            full_name: req.body.full_name 
        }, {
            where: {
                id: id
            }
        }
    );

    res.json(cinema_group);
};