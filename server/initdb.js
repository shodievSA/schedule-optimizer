const student = require("./db/models/students.js");
const courses = require("./db/models/courses.js");

let course_description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."

let student_courses = [
    {
        course_name: "Art Appreciation",
        instructor: "Kruna Novovic",
        days: "Monday",
        times: "11:30a.m - 1:50p.m",
        credit_hours: 3,
        course_description: course_description,
    },
    {
        course_name: "Computer Languages",
        instructor: "Ramziddin Khusanov",
        days: "Thursday",
        times: "9:00a.m - 11:20a.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course_name: "Operating Systems",
        instructor: "Sokhibjamol Boeva",
        days: "Tuesday",
        times: "11:30a.m - 1:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course_name: "Social Engineering and Society",
        instructor: "Ramazan Guseynov",
        days: "Thursday",
        times: "11:30a.m - 1:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course_name: "Introduction to International Relations",
        instructor: "Zuhour Aljabary",
        days: "Friday",
        times: "2:00p.m - 4:20p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course_name: "Introduction to Psychology",
        instructor: "Sandra Velasquez Montiel",
        days: "Wednesday",
        times: "2:00pm - 4:20p.m",
        credit_hours: 3,
        course_description: course_description
    }
];

let university_courses = [
    {
        course: "ACCT 2010",
        title: "Financial Accounting I",
        term: "FA 2025",
        section: "1T",
        instructor: "Umarova Zulaykho",
        days: "Monday",
        times: "9:00a.m - 11:20a.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "ANSO 1050",
        title: "Global Social Problems",
        term: "FA 2025",
        section: "1T",
        instructor: "Mirakilov Bakhrom",
        days: "Monday",
        times: "7:00p.m - 9:20p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "ANSO 1060",
        title: "Introduction to Cultural Anthropology",
        term: "FA 2025",
        section: "2T",
        instructor: "Grosso Sarah",
        days: "Thursday",
        times: "2:00p.m - 4:20p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "ARHS 2210",
        title: "Intercultural History of Art",
        term: "FA 2025",
        section: "2T",
        instructor: "Pantic Aleksandar",
        days: "Thursday",
        times: "2:00p.m - 4:20p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "COSC 1570",
        title: "Mathematics for Computer Science",
        term: "FA 2025",
        section: "1T",
        instructor: "Nacional Maximo",
        days: "Monday",
        times: "4:30p.m - 6:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "BUSN 4110",
        title: "Operations Management",
        term: "FA 2025",
        section: "1T",
        instructor: "Tien Sing Gee",
        days: "Friday",
        times: "11:30a.m - 1:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "BUSN 3150",
        title: "Business Information Systems",
        term: "FA 2025",
        section: "5T",
        instructor: "Lin Kuo-Chun",
        days: "Wednesday",
        times: "4:30p.m - 6:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "BUSN 2750",
        title: "Introduction to Statistics",
        term: "FA 2025",
        section: "6U",
        instructor: "Abdullayev Farhod",
        days: "Friday",
        times: "7:00p.m - 9:20p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "BUSN 2100",
        title: "Business Communications",
        term: "FA 2025",
        section: "6T",
        instructor: "Rasulova Dilfuza",
        days: "Tuesday",
        times: "11:30a.m - 1:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "BUSN 1000",
        title: "Business Spreadsheets",
        term: "FA 2025",
        section: "4T",
        instructor: "Mukhammedova Azizakhon",
        days: "Wednesday",
        times: "4:30p.m - 6:00p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "ECON 3000",
        title: "Basic Economic Modelling",
        term: "FA 2025",
        section: "1T",
        instructor: "Kachina Yulia",
        days: "Thursday",
        times: "9:00a.m - 11:20a.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "COSC 2810",
        title: "Systems Analysis and Design",
        term: "FA 2025",
        section: "2T",
        instructor: "Ali Subair",
        days: "Monday",
        times: "2:00p.m - 4:20p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "COSC 3050",
        title: "Data Structures I",
        term: "FA 2025",
        section: "3T",
        instructor: "Goje Nitin",
        days: "Monday",
        times: "11:30a.m - 1:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "COSC 3410",
        title: "Computer and Information Security",
        term: "FA 2025",
        section: "1T",
        instructor: "Isroilov Islombek",
        days: "Thursday",
        times: "4:30p.m - 6:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "COSC 3500",
        title: "IT Project Management",
        term: "FA 2025",
        section: "2T",
        instructor: "Nacional Maximo",
        days: "Wednesday",
        times: "4:30p.m - 6:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "COSC 3810",
        title: "Principles of Programming Languages",
        term: "FA 2025",
        section: "3T",
        instructor: "Bekov Sanjar",
        days: "Monday",
        times: "4:30p.m - 6:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "CSIS 1500",
        title: "Introduction to Business Technologies",
        term: "FA 2025",
        section: "1T",
        instructor: "Doniyorbek Ahmadaliev",
        days: "Friday",
        times: "2:00p.m - 4:20p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "ENGL 1030",
        title: "Introduction to Literature",
        term: "FA 2025",
        section: "4T",
        instructor: "Khayatova Zarnigor",
        days: "Wednesday",
        times: "11:30a.m - 1:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "ECON 3020",
        title: "Intermediate Microeconomics",
        term: "FA 2025",
        section: "2T",
        instructor: "Van Rooyen Johan",
        days: "Friday",
        times: "4:30p.m - 6:50p.m",
        credit_hours: 3,
        course_description: course_description
    },
    {
        course: "ECON 3100",
        title: "Issues in Economics",
        term: "FA 2025",
        section: "1T",
        instructor: "Muminov Timur",
        days: "Saturday",
        times: "10:00am - 12:20p.m",
        credit_hours: 3,
        course_description: course_description
    }
];

for (let i = 0; i < university_courses.length; i++)
{
    courses.create({
        course: university_courses[i].course,
        title: university_courses[i].title,
        term: university_courses[i].term,
        section: university_courses[i].section,
        instructor: university_courses[i].instructor,
        days: university_courses[i].days,
        times: university_courses[i].times,
        credit_hours: university_courses[i].credit_hours,
        course_description: university_courses[i].course_description
    });
}

// student.create({
//     student_email: "abbosshodiev@webster.edu",
//     student_email_password: "Abbos2504",
//     student_courses: student_courses,
//     student_name: "Abbos Shodiev"
// });