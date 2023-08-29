const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

const Student = sequelize.define('Student', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    grade: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    birthday: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


module.exports = Student;