const student = require("./db/models/students.js");
const courses = require("./db/models/courses.js");
const instructors = require("./db/models/instructors.js");
const instructorsData = require("./mock data/instructorsMockData.js");
const studentCourses = require("./mock data/studentMockData.js");

async function fillTables() {

    await student.sync();
    await courses.sync();
    await instructors.sync();

    // INSERTS DATA ABOUT A STUDENT INTO DB
    await student.create({
        student_email: "abbosshodiev@webster.edu",
        student_email_password: "Abbos2504",
        student_courses: studentCourses,
        student_name: "Abbos Shodiev",
        student_major: "Computer Science",
        student_status: "Freshman"
    });

    // INSERTS DATA ABOUT INSTRUCTORS INTO DB
    for (let i = 0; i < instructorsData.length; i++) {

        await instructors.create({
            instructor_name: instructorsData[i]["instructor_name"],
            instructor_courses: instructorsData[i]["instructor_courses"],
            instructor_email: instructorsData[i]["instructor_email"],
            office_hours: instructorsData[i]["office_hours"],
        });

    }

    // INSERTS DATA ABOUT UNIVERSITY COURSES INTO DB
    for (let i = 0; i < instructorsData.length; i++) {

        const instructor_courses = instructorsData[i]['instructor_courses'];

        for (let j = 0; j < instructor_courses.length; j++) {

            await courses.create({
                course: instructor_courses[j]['course'],
                instructor: instructorsData[i]['instructor_name'],
                days: instructor_courses[j]['days'],
                credit_hours: instructor_courses[j]['credit_hours'],
                course_description: instructor_courses[j]['course_description'],
                times: instructor_courses[j]['times'],
                title: instructor_courses[j]['title'],
                section: instructor_courses[j]['section'],
                term: instructor_courses[j]['term'],
                student_feedbacks: []
            });
            
        }

    }

}

fillTables();
