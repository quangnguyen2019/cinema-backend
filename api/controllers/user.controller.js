const User = require('../../models/user.model');

module.exports.GetUsers = async function (req, res) {
    const users = await User.findAll();
    res.json(users);
};

module.exports.GetDetailUser = async function(req, res) {
    const email = req.params.email;

    const user = await User.findOne({
        where: {
            email: email
        }
    });

    if (!user) {
        res.json({success: false});
        return;
    }

    res.json(user);
};

module.exports.AddUser = async function(req, res) {
    const user = await User.create(req.body);
    res.json(user);
};

module.exports.RemoveUser = async function(req, res) {
    const id = req.params.id;

    const user = await User.destroy({
        where: {
            id: id
        }
    });

    res.json(user);
};

module.exports.UpdateUser = async function(req, res) {
    const id = req.params.id;

    const user = await User.update(
        { 
            password: req.body.password, 
            full_name: req.body.full_name 
        }, {
            where: {
                id: id
            }
        }
    );

    res.json(user);
};