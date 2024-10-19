const student = require("./db/models/students.js")

let courses = [
    {
        course_name: "ARHS 1050 2T FA 2024 Art Appreciation",
        instructor: "Kruna Novovic",
    },
    {
        course_name: "COSC 2110 6T FA 2024 Computer Languages",
        instructor: "Ramziddin Khusanov"
    },
    {
        course_name: "COSC 2610 2T 2024 Operating Systems",
        instructor: "Sokhibjamol Boeva"
    },
    {
        course_name: "COSC 2710 2T FA 2024 Social Engineering and Society",
        instructor: "Ramazan Guseynov"
    },
    {
        course_name: "INTL 1050 1T FA 2024 Introduction to International Relations",
        instructor: "Zuhour Aljabary"
    },
    {
        course_name: "PSYC 1100 5T 2024 Introduction to Psychology",
        instructor: "Sandra Velasquez Montiel"
    }
];

student.create({
    student_email: "abbosshodiev@webster.edu",
    student_email_password: "Abbos2504",
    student_courses: courses,
    student_name: "Abbos Shodiev"
});