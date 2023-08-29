const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

const Result = sequelize.define('Result', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    grade: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    // Family
    employment_status: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    family_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    quality_relationships: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    couple: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    // Academic Performance
    average: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },

    more_difficult_subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    adequacy: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    learning_technique: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    // Habits
    favorite_meal_time: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    weight: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },

    height: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },

    eat_times_day: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    take_medications: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    // Recommendations
    extracurricular_activity: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    comment_for_improvement: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    subjects_to_improve: {
        type: DataTypes.STRING,
        allowNull: false,
    },



    self_esteem: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    },

    social_relationships: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    },

    anxiety: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    },

    depression: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    },

    behavioral_interest_changes: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    },

    last_month_mood: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    },

    education: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    },

    religion: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    },



    score: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    },

    state: {
        type: DataTypes.STRING,
        defaultValue: 'HEALTHY'
    },

});


module.exports = Result;