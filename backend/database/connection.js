const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ace', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;