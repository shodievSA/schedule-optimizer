const students = require("../db/models/students.js");

async function verifyStudentCredentials(email, password) {

    let student = await students.findOne({
        where: { student_email: email },
        attributes: ["student_email_password"]
    });

    if (student === null) {
        return false;
    } else {
        if (student['dataValues']['student_email_password'] === password) {
            return true;
        } else {
            return false;
        }
    }

}

module.exports = verifyStudentCredentials;