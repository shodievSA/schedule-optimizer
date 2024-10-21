const student = require("./db/models/students.js")
const courses = require("./db/models/courses.js")

let course_description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."

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
    course_description: course_description,
  },
  {
    course_name: "Operating Systems",
    instructor: "Sokhibjamol Boeva",
    days: "Tuesday",
    times: "11:30a.m - 1:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Social Engineering and Society",
    instructor: "Ramazan Guseynov",
    days: "Thursday",
    times: "11:30a.m - 1:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Introduction to International Relations",
    instructor: "Zuhour Aljabary",
    days: "Friday",
    times: "2:00p.m - 4:20p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Introduction to Psychology",
    instructor: "Sandra Velasquez Montiel",
    days: "Wednesday",
    times: "2:00pm - 4:20p.m",
    credit_hours: 3,
    course_description: course_description,
  },
]

let university_courses = [
  {
    course_name: "Financial Accounting I",
    instructor: "Umarova Zulaykho",
    days: "Monday",
    times: "9:00a.m - 11:20a.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Global Social Problems",
    instructor: "Mirakilov Bakhrom",
    days: "Monday",
    times: "7:00p.m - 9:20p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Introduction to Cultural Anthropology",
    instructor: "Grosso Sarah",
    days: "Thursday",
    times: "2:00p.m - 4:20p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Intercultural History of Art",
    instructor: "Pantic Aleksandar",
    days: "Thursday",
    times: "2:00p.m - 4:20p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Mathematics for Computer Science",
    instructor: "Nacional Maximo",
    days: "Monday",
    times: "4:30p.m - 6:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Operations Management",
    instructor: "Tien Sing Gee",
    days: "Friday",
    times: "11:30a.m - 1:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Business Information Systems",
    instructor: "Lin Kuo-Chun",
    days: "Wednesday",
    times: "4:30p.m - 6:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Introduction to Statistics",
    instructor: "Abdullayev Farhod",
    days: "Friday",
    times: "7:00p.m - 9:20p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Business Communications",
    instructor: "Rasulova Dilfuza",
    days: "Tuesday",
    times: "11:30a.m - 1:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Business Spreadsheets",
    instructor: "Mukhammedova Azizakhon",
    days: "Wednesday",
    times: "4:30p.m - 6:00p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Basic Economic Modelling",
    instructor: "Kachina Yulia",
    days: "Thursday",
    times: "9:00a.m - 11:20a.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Systems Analysis and Design",
    instructor: "Ali Subair",
    days: "Monday",
    times: "2:00p.m - 4:20p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Data Structures I",
    instructor: "Goje Nitin",
    days: "Monday",
    times: "11:30a.m - 1:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Computer and Information Security",
    instructor: "Isroilov Islombek",
    days: "Thursday",
    times: "4:30p.m - 6:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "IT Project Management",
    instructor: "Nacional Maximo",
    days: "Wednesday",
    times: "4:30p.m - 6:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Principles of Programming Languages",
    instructor: "Bekov Sanjar",
    days: "Monday",
    times: "4:30p.m - 6:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Introduction to Business Technologies",
    instructor: "Doniyorbek Ahmadaliev",
    days: "Friday",
    times: "2:00p.m - 4:20p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Introduction to Literature",
    instructor: "Khayatova Zarnigor",
    days: "Wednesday",
    times: "11:30a.m - 1:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Intermediate Microeconomics",
    instructor: "Van Rooyen Johan",
    days: "Friday",
    times: "4:30p.m - 6:50p.m",
    credit_hours: 3,
    course_description: course_description,
  },
  {
    course_name: "Issues in Economics",
    instructor: "Muminov Timur",
    days: "Saturday",
    times: "10:00am - 12:20p.m",
    credit_hours: 3,
    course_description: course_description,
  },
]

// for (let i = 0; i < university_courses.length; i++)
// {
//     courses.create({
//         course_name: university_courses[i].course_name,
//         instructor: university_courses[i].instructor,
//         days: university_courses[i].days,
//         times: university_courses[i].times,
//         credit_hours: university_courses[i].credit_hours,
//         course_description: university_courses[i].course_description
//     });
// }

student.create({
  student_email: "odilshodbekov@webster.edu",
  student_email_password: "13120000_Omad",
  student_courses: [],
  student_name: "Omadbek Dilshodbekov",
})
