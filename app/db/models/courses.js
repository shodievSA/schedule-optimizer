require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        port: 5432
    }
);

const Courses = sequelize.define(
    "university_courses",
    {
        course: {
            type: DataTypes.TEXT
        },
        title: {
            type: DataTypes.TEXT
        },
        term: {
            type: DataTypes.TEXT
        },
        section: {
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
        student_feedbacks: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            defaultValue: []
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