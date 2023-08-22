const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    first_surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    second_surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    charge: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'READER_ROLE'
    },

    state: {
        type: DataTypes.TINYINT
    },
});


module.exports = User;