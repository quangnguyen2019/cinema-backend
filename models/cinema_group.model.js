const Sequelize = require('sequelize');
const db = require('./db');

const CinemaGroup = db.define("Cinema_Group", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(300),
        allowNull: false
    }
});

// CinemaGroup.sync({ force: true });

module.exports = CinemaGroup;