const Sequelize = require('sequelize');
const db = require('./db');

const Booking = db.define('Booking', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
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
    showtime_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
            model: 'Showtime',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    created_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    created_time: {
        type: Sequelize.TIME,
        allowNull: false
    },
    seats: {
        type: Sequelize.STRING,
        allowNull: false
    },
    total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    }
});

module.exports = Booking;