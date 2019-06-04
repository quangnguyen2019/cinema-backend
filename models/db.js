const Sequelize = require('sequelize');

const db = new Sequelize({
    database:'Cinema',
    username: 'postgres',
    password: '12345',
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        timestamps: false
    }
} || process.env.DATABASE_URL);

module.exports = db;