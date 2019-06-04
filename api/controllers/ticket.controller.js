const Ticket = require('../../models/ticket.model');

module.exports.GetTickets = async function (req, res) {
    const tickets = await Ticket.findAll();
    res.json(tickets);
};

module.exports.GetDetailTicket = async function(req, res) {
    const id = req.params.id;

    const ticket = await Ticket.findOne({
        where: {
            id: id
        }
    });

    res.json(ticket);
};

module.exports.AddTicket = async function(req, res) {
    const ticket = await Ticket.create(req.body);
    res.json(ticket);
};

module.exports.RemoveTicket = async function(req, res) {
    const id = req.params.id;

    const ticket = await Ticket.destroy({
        where: {
            id: id
        }
    });

    res.json(ticket);
};

module.exports.UpdateTicket = async function(req, res) {
    const id = req.params.id;

    const ticket = await Ticket.update(
        { 
            password: req.body.password, 
            full_name: req.body.full_name 
        }, {
            where: {
                id: id
            }
        }
    );

    res.json(ticket);
};