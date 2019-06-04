const Sequelize = require('sequelize');
const db = require('./db');

const Booking = db.define('Booking', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
            model: 'Users',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    show_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
            model: 'Shows',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    created_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    }
});

module.exports = Booking;