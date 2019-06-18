const Sequelize = require('sequelize');
const db = require('./db');

const Movie = db.define('Movie', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    publish_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    poster_image: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    views: {
        type: Sequelize.INTEGER
    }
});


// Movie.sync({force: true});

module.exports = Movie;