const Sequelize = require('sequelize');
const db = require('./db');

const Ticket = db.define('Ticket', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    booking_id:  {
        type: Sequelize.UUID,
        allowNull: false,

        references: {
            model: 'Booking',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    seat_id: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    }
});

module.exports = Ticket;