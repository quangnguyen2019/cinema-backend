const Sequelize = require('sequelize');
const db = require('./db');

const Showtime = db.define('Showtime', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cinema_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
            model: 'Cinema',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
            model: 'Movie',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    start_time: {
        type: Sequelize.TIME,
        allowNull: false
    },
    end_time: {
        type: Sequelize.TIME,
        allowNull: false
    },
    date_showing: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    }
});

// Showtime.sync({force: true});

module.exports = Showtime;