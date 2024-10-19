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

const Student = sequelize.define(
    "students",
    {
        student_email: {
            type: DataTypes.TEXT
        },
        student_email_password: {
            type: DataTypes.TEXT
        },
        student_courses: {
            type: DataTypes.ARRAY(DataTypes.JSON)
        },
        student_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        student_name: {
            type: DataTypes.TEXT
        }
    }
);

module.exports = Student;