require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "postgres"
    }
);

const Courses = sequelize.define(
    "university_courses",
    {
        course_name: {
            type: DataTypes.TEXT
        },
        instructor: {
            type: DataTypes.TEXT
        },
        days: {
            type: DataTypes.TEXT
        },
        times: {
            type: DataTypes.TEXT
        },
        credit_hours: {
            type: DataTypes.BIGINT
        },
        course_description: {
            type: DataTypes.TEXT
        },
        course_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    }
);

module.exports = Courses;