const Sequelize = require('sequelize');
const db = require('./db');

const Cinema = db.define("Cinema", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    cinema_group_id: {
        type: Sequelize.INTEGER,

        references: {
            model: 'Cinema_Group',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    type: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    width: {
        type: Sequelize.REAL
    },
    height: {
        type: Sequelize.REAL
    }
});

module.exports = Cinema;