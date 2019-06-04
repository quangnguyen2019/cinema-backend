const db = require('./db');
const Sequelize = require('sequelize');

const User = db.define('Users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    full_name: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false
    },
    role: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

// User.sync({ force: true });

module.exports = User;