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

const Instructors = sequelize.define(
    "instructors",
    {
        instructor_name: {
            type: DataTypes.TEXT
        },
        instructor_courses: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            defaultValue: []
        },
        instructor_email: {
            type: DataTypes.TEXT
        },
        office_hours: {
            type: DataTypes.JSON
        },
        instructor_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    }
);

module.exports = Instructors;