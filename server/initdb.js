const student = require("./db/models/students.js")
const courses = require("./db/models/courses.js")
const instructors = require("./db/models/instructors.js")

// let university_courses = [
//     {
//         course: "ACCT 2010",
//         title: "Financial Accounting I",
//         term: "FA 2024",
//         section: "1T",
//         instructor: "Umarova Zulaykho",
//         days: "Monday",
//         times: "9:00AM - 11:20AM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//     },
//     {
//         course: "ANSO 1050",
//         title: "Global Social Problems",
//         term: "FA 2024",
//         section: "1T",
//         instructor: "Mirakilov Bakhrom",
//         days: "Monday",
//         times: "7:00PM - 9:20PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//     },
//     {
//         course: "ANSO 1060",
//         title: "Introduction to Cultural Anthropology",
//         term: "FA 2024",
//         section: "2T",
//         instructor: "Grosso Sarah",
//         days: "Thursday",
//         times: "2:00PM - 4:20PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "ARHS 2210",
//         title: "Intercultural History of Art",
//         term: "FA 2024",
//         section: "2T",
//         instructor: "Pantic Aleksandar",
//         days: "Thursday",
//         times: "2:00PM - 4:20PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "COSC 1570",
//         title: "Mathematics for Computer Science",
//         term: "FA 2024",
//         section: "1T",
//         instructor: "Nacional Maximo",
//         days: "Monday",
//         times: "4:30PM - 6:50PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "BUSN 4110",
//         title: "Operations Management",
//         term: "FA 2024",
//         section: "1T",
//         instructor: "Tien Sing Gee",
//         days: "Friday",
//         times: "11:30AM - 1:50PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "BUSN 3150",
//         title: "Business Information Systems",
//         term: "FA 2024",
//         section: "5T",
//         instructor: "Lin Kuo-Chun",
//         days: "Wednesday",
//         times: "4:30PM - 6:50PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "BUSN 2750",
//         title: "Introduction to Statistics",
//         term: "FA 2024",
//         section: "6U",
//         instructor: "Abdullayev Farhod",
//         days: "Friday",
//         times: "7:00PM - 9:20PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "BUSN 2100",
//         title: "Business Communications",
//         term: "FA 2024",
//         section: "6T",
//         instructor: "Rasulova Dilfuza",
//         days: "Tuesday",
//         times: "11:30AM - 1:50PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "BUSN 1000",
//         title: "Business Spreadsheets",
//         term: "FA 2024",

//         days: "Wednesday",
//         times: "4:30PM - 6:00PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "ECON 3000",
//         title: "Basic Economic Modelling",
//         term: "FA 2024",
//         section: "1T",
//         instructor: "Kachina Yulia",
//         days: "Thursday",
//         times: "9:00AM - 11:20AM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "COSC 2810",
//         title: "Systems Analysis and Design",
//         term: "FA 2024",
//         section: "2T",
//         instructor: "Ali Subair",
//         days: "Monday",
//         times: "2:00PM - 4:20PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "COSC 3050",
//         title: "Data Structures I",
//         term: "FA 2024",
//         section: "3T",
//         instructor: "Goje Nitin",
//         days: "Monday",
//         times: "11:30AM - 1:50PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "COSC 3410",
//         title: "Computer and Information Security",
//         term: "FA 2024",
//         section: "1T",
//         instructor: "Isroilov Islombek",
//         days: "Thursday",
//         times: "4:30PM - 6:50PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "COSC 3500",
//         title: "IT Project Management",
//         term: "FA 2024",
//         section: "2T",
//         instructor: "Nacional Maximo",
//         days: "Wednesday",
//         times: "4:30PM - 6:50PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "COSC 3810",
//         title: "Principles of Programming Languages",
//         term: "FA 2024",
//         section: "3T",
//         instructor: "Bekov Sanjar",
//         days: "Monday",
//         times: "4:30PM - 6:50PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "CSIS 1500",
//         title: "Introduction to Business Technologies",
//         term: "FA 2024",
//         section: "1T",
//         instructor: "Doniyorbek Ahmadaliev",
//         days: "Friday",
//         times: "2:00PM - 4:20PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "ENGL 1030",
//         title: "Introduction to Literature",
//         term: "FA 2024",
//         section: "4T",
//         instructor: "Khayatova Zarnigor",
//         days: "Wednesday",
//         times: "11:30AM - 1:50PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "ECON 3020",
//         title: "Intermediate Microeconomics",
//         term: "FA 2024",
//         section: "2T",
//         instructor: "Van Rooyen Johan",
//         days: "Friday",
//         times: "4:30PM - 6:50PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
//   {
//         course: "ECON 3100",
//         title: "Issues in Economics",
//         term: "FA 2024",
//         section: "1T",
//         instructor: "Muminov Timur",
//         days: "Saturday",
//         times: "10:00am - 12:20PM",
//         credit_hours: 3,
//         course_description: course_description,
//         student_feedbacks: []
//   },
// ]

// for (let i = 0; i < university_courses.length; i++) {
//   courses.create({
//     course: university_courses[i].course,
//     title: university_courses[i].title,
//     term: university_courses[i].term,
//     section: university_courses[i].section,
//     instructor: university_courses[i].instructor,
//     days: university_courses[i].days,
//     times: university_courses[i].times,
//     credit_hours: university_courses[i].credit_hours,
//     course_description: university_courses[i].course_description,
//   })
// }

// student.create({
//     student_email: "abbosshodiev@webster.edu",
//     student_email_password: "Abbos2504",
//     student_courses: student_courses,
//     student_name: "Abbos Shodiev"
// });

let instructorsData = [
  {
    instructor_name: "Umarova Zulaykho",
    instructor_courses: [
      {
        course: "ACCT 2010",
        title: "Financial Accounting I",
        term: "FA 2024",
        section: "1T",
        days: "Monday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "Introduces accounting with an emphasis on systemic thinking and problem solving as the relationships between business events and financial statements are explored. There will be an extensive use of technology, with an emphasis on Excel, that will be integrated throughout the course as the students develop an understanding of how any given business event impacts an organization’s financial statements. A primary objective of this course is to examine the use of financial accounting information for decision making in an organization.",
      },
      {
        course: "ACCT 2010",
        title: "Financial Accounting I",
        term: "FA 2024",
        section: "2T",
        days: "Tuesday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "Introduces accounting with an emphasis on systemic thinking and problem solving as the relationships between business events and financial statements are explored. There will be an extensive use of technology, with an emphasis on Excel, that will be integrated throughout the course as the students develop an understanding of how any given business event impacts an organization’s financial statements. A primary objective of this course is to examine the use of financial accounting information for decision making in an organization.",
      },
      {
        course: "ACCT 2010",
        title: "Financial Accounting I",
        term: "FA 2024",
        section: "7T",
        days: "Monday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "Introduces accounting with an emphasis on systemic thinking and problem solving as the relationships between business events and financial statements are explored. There will be an extensive use of technology, with an emphasis on Excel, that will be integrated throughout the course as the students develop an understanding of how any given business event impacts an organization’s financial statements. A primary objective of this course is to examine the use of financial accounting information for decision making in an organization.",
      },
      {
        course: "ACCT 2010",
        title: "Financial Accounting I",
        term: "FA 2024",
        section: "3T",
        days: "Wednesday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "Introduces accounting with an emphasis on systemic thinking and problem solving as the relationships between business events and financial statements are explored. There will be an extensive use of technology, with an emphasis on Excel, that will be integrated throughout the course as the students develop an understanding of how any given business event impacts an organization’s financial statements. A primary objective of this course is to examine the use of financial accounting information for decision making in an organization.",
      },
    ],
    instructor_email: "zulaykhoumarova@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Mirakilov Bakhrom",
    instructor_courses: [
      {
        course: "ANSO 1050",
        title: "Global Social Problems",
        term: "FA 2024",
        section: "1T",
        days: "Monday",
        times: "7:00PM - 9:20PM",
        credit_hours: 3,
        course_description:
          "Provides an introduction to a wide range of social problems around the globe, such as homelessness, crime and poverty, and how these social problems differ by race, class, gender and country. Includes major sociological as well as anthropological perspectives on such social problems.",
      },
      {
        course: "ANSO 1050",
        title: "Global Social Problems",
        term: "FA 2024",
        section: "1U",
        days: "Thursday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "Provides an introduction to a wide range of social problems around the globe, such as homelessness, crime and poverty, and how these social problems differ by race, class, gender and country. Includes major sociological as well as anthropological perspectives on such social problems.",
      },
      {
        course: "ANSO 1050",
        title: "Global Social Problems",
        term: "FA 2024",
        section: "2U",
        days: "Thursday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "Provides an introduction to a wide range of social problems around the globe, such as homelessness, crime and poverty, and how these social problems differ by race, class, gender and country. Includes major sociological as well as anthropological perspectives on such social problems.",
      },
      {
        course: "ANSO 1050",
        title: "Global Social Problems",
        term: "FA 2024",
        section: "3T",
        days: "Tuesday",
        times: "7:00PM - 9:20PM",
        credit_hours: 3,
        course_description:
          "Provides an introduction to a wide range of social problems around the globe, such as homelessness, crime and poverty, and how these social problems differ by race, class, gender and country. Includes major sociological as well as anthropological perspectives on such social problems.",
      },
    ],
    instructor_email: "bakhrommirakilov@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Grosso Sarah",
    instructor_courses: [
      {
        course: "ANSO 1060",
        title: "Introduction to Cultural Anthropology",
        term: "FA 2024",
        section: "4T",
        days: "Thursday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "Explores the concepts of culture, universals and diversities of humanity, transmission of culture, and the role of the anthropologist in modern society.",
      },
      {
        course: "ANSO 1060",
        title: "Introduction to Cultural Anthropology",
        term: "FA 2024",
        section: "2T",
        days: "Monday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "Explores the concepts of culture, universals and diversities of humanity, transmission of culture, and the role of the anthropologist in modern society.",
      },
      {
        course: "ANSO 1060",
        title: "Introduction to Cultural Anthropology",
        term: "FA 2024",
        section: "3T",
        days: "Thursday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "Explores the concepts of culture, universals and diversities of humanity, transmission of culture, and the role of the anthropologist in modern society.",
      },
      {
        course: "ANSO 1060",
        title: "Introduction to Cultural Anthropology",
        term: "FA 2024",
        section: "1T",
        days: "Friday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "Explores the concepts of culture, universals and diversities of humanity, transmission of culture, and the role of the anthropologist in modern society.",
      },
    ],
    instructor_email: "sarahgrosso79@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Pantic Aleksandar",
    instructor_courses: [
      {
        course: "ARHS 2210",
        title: "Intercultural History of Art",
        term: "FA 2024",
        section: "2T",
        days: "Thursday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "Covers the history of art and design from the prehistoric to the early twentieth century by looking at moments of intersection between cultures. Covers periods and styles of art history, while touching on techniques and mediums, and form and content, as an introduction to the principles of art history. Students learn about multiple cultures and how they develop through an examination of the artworks, objects, and artifacts of those cultures. Considers questions such as: how do artworks tell us about culture or engage with it? How are artworks created by culture and work to create it in turn?",
      },
      {
        course: "ARHS 2210",
        title: "Intercultural History of Art",
        term: "FA 2024",
        section: "4T",
        days: "Wednesday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "Covers the history of art and design from the prehistoric to the early twentieth century by looking at moments of intersection between cultures. Covers periods and styles of art history, while touching on techniques and mediums, and form and content, as an introduction to the principles of art history. Students learn about multiple cultures and how they develop through an examination of the artworks, objects, and artifacts of those cultures. Considers questions such as: how do artworks tell us about culture or engage with it? How are artworks created by culture and work to create it in turn?",
      },
      {
        course: "ARHS 2210",
        title: "Intercultural History of Art",
        term: "FA 2024",
        section: "1T",
        days: "Monday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "Covers the history of art and design from the prehistoric to the early twentieth century by looking at moments of intersection between cultures. Covers periods and styles of art history, while touching on techniques and mediums, and form and content, as an introduction to the principles of art history. Students learn about multiple cultures and how they develop through an examination of the artworks, objects, and artifacts of those cultures. Considers questions such as: how do artworks tell us about culture or engage with it? How are artworks created by culture and work to create it in turn?",
      },
      {
        course: "ARHS 2210",
        title: "Intercultural History of Art",
        term: "FA 2024",
        section: "3T",
        days: "Tuesday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "Covers the history of art and design from the prehistoric to the early twentieth century by looking at moments of intersection between cultures. Covers periods and styles of art history, while touching on techniques and mediums, and form and content, as an introduction to the principles of art history. Students learn about multiple cultures and how they develop through an examination of the artworks, objects, and artifacts of those cultures. Considers questions such as: how do artworks tell us about culture or engage with it? How are artworks created by culture and work to create it in turn?",
      },
    ],
    instructor_email: "aleksandarpantic@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Nacional Maximo",
    instructor_courses: [
      {
        course: "COSC 1570",
        title: "Mathematics for Computer Science",
        term: "FA 2024",
        section: "2T",
        days: "Monday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course covers topics including number systems, computer arithmetic, binary, octal, hexadecimal, floating point operations, sets and Boolean algebra. Prerequisites: COSC 1550 and COSC 1570.",
      },
      {
        course: "COSC 1570",
        title: "Mathematics for Computer Science",
        term: "FA 2024",
        section: "1T",
        days: "Friday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course covers topics including number systems, computer arithmetic, binary, octal, hexadecimal, floating point operations, sets and Boolean algebra. Prerequisites: COSC 1550 and COSC 1570.",
      },
      {
        course: "COSC 3500",
        title: "IT Project Management",
        term: "FA 2024",
        section: "1T",
        days: "Wednesday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course provides students a holistic and integrative view of project management. The course covers concepts and skills that are used by IT professionals to propose, plan, secure resources, budget and lead IT project teams to a successful completion of their projects. Prerequisites: COSC 1560 and junior standing.",
      },
      {
        course: "COSC 3500",
        title: "IT Project Management",
        term: "FA 2024",
        section: "3T",
        days: "Monday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "This course provides students a holistic and integrative view of project management. The course covers concepts and skills that are used by IT professionals to propose, plan, secure resources, budget and lead IT project teams to a successful completion of their projects. Prerequisites: COSC 1560 and junior standing.",
      },
      {
        course: "COSC 3500",
        title: "IT Project Management",
        term: "FA 2024",
        section: "2T",
        days: "Thursday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "This course provides students a holistic and integrative view of project management. The course covers concepts and skills that are used by IT professionals to propose, plan, secure resources, budget and lead IT project teams to a successful completion of their projects. Prerequisites: COSC 1560 and junior standing.",
      },
    ],
    instructor_email: "maximonacional20@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Tien Sing Gee",
    instructor_courses: [
      {
        course: "BUSN 4110",
        title: "Operations Management",
        term: "FA 2024",
        section: "1T",
        days: "Friday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "Operations Management (OM) deals with the part of an enterprise that creates values for its customers and shareholders. The course introduces a series of concepts and techniques used in the field of OM. Topics include the role of OM in a firm, how OM should be integrated with other functions such as finance and marketing to ensure the success of a firm, demand forecasting, product design, types of OM processes, inventory management, supply chain management, quality management, lean operations and project management. Spreadsheets are used in this course to develop OM models and solve OM problems. Prerequisite: ACCT 2010, ECON 2000, BUSN 2750, MNGT 2000 and FINC 3210",
      },
      {
        course: "BUSN 4110",
        title: "Operations Management",
        term: "FA 2024",
        section: "3T",
        days: "Thursday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "Operations Management (OM) deals with the part of an enterprise that creates values for its customers and shareholders. The course introduces a series of concepts and techniques used in the field of OM. Topics include the role of OM in a firm, how OM should be integrated with other functions such as finance and marketing to ensure the success of a firm, demand forecasting, product design, types of OM processes, inventory management, supply chain management, quality management, lean operations and project management. Spreadsheets are used in this course to develop OM models and solve OM problems. Prerequisite: ACCT 2010, ECON 2000, BUSN 2750, MNGT 2000 and FINC 3210",
      },
      {
        course: "BUSN 4110",
        title: "Operations Management",
        term: "FA 2024",
        section: "4T",
        days: "Tuesday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "Operations Management (OM) deals with the part of an enterprise that creates values for its customers and shareholders. The course introduces a series of concepts and techniques used in the field of OM. Topics include the role of OM in a firm, how OM should be integrated with other functions such as finance and marketing to ensure the success of a firm, demand forecasting, product design, types of OM processes, inventory management, supply chain management, quality management, lean operations and project management. Spreadsheets are used in this course to develop OM models and solve OM problems. Prerequisite: ACCT 2010, ECON 2000, BUSN 2750, MNGT 2000 and FINC 3210",
      },
      {
        course: "BUSN 4110",
        title: "Operations Management",
        term: "FA 2024",
        section: "2T",
        days: "Thursday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "Operations Management (OM) deals with the part of an enterprise that creates values for its customers and shareholders. The course introduces a series of concepts and techniques used in the field of OM. Topics include the role of OM in a firm, how OM should be integrated with other functions such as finance and marketing to ensure the success of a firm, demand forecasting, product design, types of OM processes, inventory management, supply chain management, quality management, lean operations and project management. Spreadsheets are used in this course to develop OM models and solve OM problems. Prerequisite: ACCT 2010, ECON 2000, BUSN 2750, MNGT 2000 and FINC 3210",
      },
    ],
    instructor_email: "singgeetien@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Lin Kuo-Chun",
    instructor_courses: [
      {
        course: "BUSN 3150",
        title: "Business Information Systems",
        term: "FA 2024",
        section: "5T",
        days: "Wednesday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course provides students with a foundational technology literacy and understanding of Information Systems (IS) as they apply to business. Topics covered include IS fundamentals and infrastructure; organization and business strategies; Management Information Systems; IS for commerce and collaboration; business intelligence and Enterprise Information Systems; Enterprise Resource Planning; and, IS security, privacy and ethics. Students examine how IS programs support systems thinking management concepts, as well as the factors that can influence a business selection of their IS. Students also apply problem solving and solution development as they study how databases are used in business to collect data, the different methodologies used to develop an IS solution, its functional systems, and the relationship between communications and networks with intra-systems and inter-systems",
      },
      {
        course: "BUSN 3150",
        title: "Business Information Systems",
        term: "FA 2024",
        section: "2T",
        days: "Monday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course provides students with a foundational technology literacy and understanding of Information Systems (IS) as they apply to business. Topics covered include IS fundamentals and infrastructure; organization and business strategies; Management Information Systems; IS for commerce and collaboration; business intelligence and Enterprise Information Systems; Enterprise Resource Planning; and, IS security, privacy and ethics. Students examine how IS programs support systems thinking management concepts, as well as the factors that can influence a business selection of their IS. Students also apply problem solving and solution development as they study how databases are used in business to collect data, the different methodologies used to develop an IS solution, its functional systems, and the relationship between communications and networks with intra-systems and inter-systems",
      },
      {
        course: "BUSN 3150",
        title: "Business Information Systems",
        term: "FA 2024",
        section: "3T",
        days: "Thursday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course provides students with a foundational technology literacy and understanding of Information Systems (IS) as they apply to business. Topics covered include IS fundamentals and infrastructure; organization and business strategies; Management Information Systems; IS for commerce and collaboration; business intelligence and Enterprise Information Systems; Enterprise Resource Planning; and, IS security, privacy and ethics. Students examine how IS programs support systems thinking management concepts, as well as the factors that can influence a business selection of their IS. Students also apply problem solving and solution development as they study how databases are used in business to collect data, the different methodologies used to develop an IS solution, its functional systems, and the relationship between communications and networks with intra-systems and inter-systems",
      },
      {
        course: "BUSN 3150",
        title: "Business Information Systems",
        term: "FA 2024",
        section: "1T",
        days: "Friday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course provides students with a foundational technology literacy and understanding of Information Systems (IS) as they apply to business. Topics covered include IS fundamentals and infrastructure; organization and business strategies; Management Information Systems; IS for commerce and collaboration; business intelligence and Enterprise Information Systems; Enterprise Resource Planning; and, IS security, privacy and ethics. Students examine how IS programs support systems thinking management concepts, as well as the factors that can influence a business selection of their IS. Students also apply problem solving and solution development as they study how databases are used in business to collect data, the different methodologies used to develop an IS solution, its functional systems, and the relationship between communications and networks with intra-systems and inter-systems",
      },
    ],
    instructor_email: "linku@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Abdullayev Farhod",
    instructor_courses: [
      {
        course: "BUSN 2750",
        title: "Introduction to Statistics",
        term: "FA 2024",
        section: "6U",
        days: "Friday",
        times: "7:00PM - 9:20PM",
        credit_hours: 3,
        course_description:
          "This course introduces basic statistics concepts and methods. Students learn how to identify, summarize, present, and analyze different types of data. Students also learn basic probability and probability distributions to make inferences and draw conclusions for a population based on sample data. The emphasis is on the application of statistical analysis to solve real-world business problems rather than theory. Excel is used as a tool to practice statistical techniques. Prerequisite: MATH 1430 or equivalent.",
      },
      {
        course: "BUSN 2750",
        title: "Introduction to Statistics",
        term: "FA 2024",
        section: "5T",
        days: "Monday",
        times: "7:00PM - 9:20PM",
        credit_hours: 3,
        course_description:
          "This course introduces basic statistics concepts and methods. Students learn how to identify, summarize, present, and analyze different types of data. Students also learn basic probability and probability distributions to make inferences and draw conclusions for a population based on sample data. The emphasis is on the application of statistical analysis to solve real-world business problems rather than theory. Excel is used as a tool to practice statistical techniques. Prerequisite: MATH 1430 or equivalent.",
      },
      {
        course: "BUSN 2750",
        title: "Introduction to Statistics",
        term: "FA 2024",
        section: "2U",
        days: "Wednesday",
        times: "7:00PM - 9:20PM",
        credit_hours: 3,
        course_description:
          "This course introduces basic statistics concepts and methods. Students learn how to identify, summarize, present, and analyze different types of data. Students also learn basic probability and probability distributions to make inferences and draw conclusions for a population based on sample data. The emphasis is on the application of statistical analysis to solve real-world business problems rather than theory. Excel is used as a tool to practice statistical techniques. Prerequisite: MATH 1430 or equivalent.",
      },
    ],
    instructor_email: "farhodabdullayev@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Rasulova Dilfuza",
    instructor_courses: [
      {
        course: "BUSN 2100",
        title: "Business Communications",
        term: "FA 2024",
        section: "6T",
        days: "Tuesday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "This course develops the communication abilities in the areas of business formats, presentations, formal presentation of business data and oral communications related to business applications.",
      },
      {
        course: "BUSN 2100",
        title: "Business Communications",
        term: "FA 2024",
        section: "5T",
        days: "Thursday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "This course develops the communication abilities in the areas of business formats, presentations, formal presentation of business data and oral communications related to business applications.",
      },
      {
        course: "BUSN 2100",
        title: "Business Communications",
        term: "FA 2024",
        section: "4T",
        days: "Friday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "This course develops the communication abilities in the areas of business formats, presentations, formal presentation of business data and oral communications related to business applications.",
      },
      {
        course: "BUSN 2100",
        title: "Business Communications",
        term: "FA 2024",
        section: "3T",
        days: "Tuesday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "This course develops the communication abilities in the areas of business formats, presentations, formal presentation of business data and oral communications related to business applications.",
      },
    ],
    instructor_email: "dilfuzarasulova@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Mukhammedova Azizakhon",
    instructor_courses: [
      {
        course: "BUSN 1000",
        title: "Business Spreadsheets",
        term: "FA 2024",
        section: "1U",
        days: "Wednesday",
        times: "7:00PM - 8:30PM",
        credit_hours: 3,
        course_description:
          "Excel spreadsheets applications used in business plans, analysis of financial statements and other business applications. May be repeated for credit if content differs.",
      },
      {
        course: "BUSN 1000",
        title: "Business Spreadsheets",
        term: "FA 2024",
        section: "6T",
        days: "Monday",
        times: "11:30AM - 1:00PM",
        credit_hours: 3,
        course_description:
          "Excel spreadsheets applications used in business plans, analysis of financial statements and other business applications. May be repeated for credit if content differs.",
      },
      {
        course: "BUSN 1000",
        title: "Business Spreadsheets",
        term: "FA 2024",
        section: "1T",
        days: "Monday",
        times: "7:00PM - 8:30PM",
        credit_hours: 3,
        course_description:
          "Excel spreadsheets applications used in business plans, analysis of financial statements and other business applications. May be repeated for credit if content differs.",
      },
    ],
    instructor_email: "amukhammedova@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Kachina Yulia",
    instructor_courses: [
      {
        course: "ECON 3000",
        title: "Basic Economic Modelling",
        term: "FA 2024",
        section: "4T",
        days: "Thursday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "This course builds on the concepts developed in Survey of Economics. The student is introduced to economic modeling used in both microeconomics and macroeconomics. The purpose of the course is to act as a bridge between the more topical approach to will require the student to take the exam(s) application to their chosen economics program. Prerequisite: All program-specific requirements for the applicable program.",
      },
      {
        course: "ECON 3000",
        title: "Basic Economic Modelling",
        term: "FA 2024",
        section: "3T",
        days: "Monday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "This course builds on the concepts developed in Survey of Economics. The student is introduced to economic modeling used in both microeconomics and macroeconomics. The purpose of the course is to act as a bridge between the more topical approach to will require the student to take the exam(s) application to their chosen economics program. Prerequisite: All program-specific requirements for the applicable program.",
      },
      {
        course: "ECON 3000",
        title: "Basic Economic Modelling",
        term: "FA 2024",
        section: "5T",
        days: "Monday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "This course builds on the concepts developed in Survey of Economics. The student is introduced to economic modeling used in both microeconomics and macroeconomics. The purpose of the course is to act as a bridge between the more topical approach to will require the student to take the exam(s) application to their chosen economics program. Prerequisite: All program-specific requirements for the applicable program.",
      },
      {
        course: "ECON 3000",
        title: "Basic Economic Modelling",
        term: "FA 2024",
        section: "7T",
        days: "Wednesday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "This course builds on the concepts developed in Survey of Economics. The student is introduced to economic modeling used in both microeconomics and macroeconomics. The purpose of the course is to act as a bridge between the more topical approach to will require the student to take the exam(s) application to their chosen economics program. Prerequisite: All program-specific requirements for the applicable program.",
      },
    ],
    instructor_email: "yuliakachina@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Ali Subair",
    instructor_courses: [
      {
        course: "COSC 2810",
        title: "Systems Analysis and Design",
        term: "FA 2024",
        section: "2T",
        days: "Monday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "This course covers the basic concepts involved in systems analysis, including effective communication, analysis tools and phases of the systems development life cycle. Prerequisite: COSC 1560 or permission of the department.",
      },
      {
        course: "COSC 2810",
        title: "Systems Analysis and Design",
        term: "FA 2024",
        section: "1T",
        days: "Friday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "This course covers the basic concepts involved in systems analysis, including effective communication, analysis tools and phases of the systems development life cycle. Prerequisite: COSC 1560 or permission of the department.",
      },
      {
        course: "COSC 2810",
        title: "Systems Analysis and Design",
        term: "FA 2024",
        section: "3T",
        days: "Tuesday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "This course covers the basic concepts involved in systems analysis, including effective communication, analysis tools and phases of the systems development life cycle. Prerequisite: COSC 1560 or permission of the department.",
      },
      {
        course: "COSC 4110",
        title: "Database Concepts",
        term: "FA 2024",
        section: "1T",
        days: "Tuesday",
        times: "9:00AM - 11:20PM",
        credit_hours: 3,
        course_description:
          "This course covers the basic concepts involved in systems analysis, including effective communication, analysis tools and phases of the systems development life cycle. Prerequisite: COSC 1560 or permission of the department.",
      },
    ],
    instructor_email: "subairali@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Goje Nitin",
    instructor_courses: [
      {
        course: "COSC 3050",
        title: "Data Structures I",
        term: "FA 2024",
        section: "1T",
        days: "Monday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "This course studies the design and implementation of the most common algorithms associated with the basic data types and with some elementary data structures using C++. The relationship of algorithm design to problem solving in general is studied. The course also covers algorithms to improve the robustness and user friendliness of programs. Prerequisites: COSC 1560 with a grade of B- or better, COSC 2610 and COSC 2810*. *Students who have completed 60 credit hours may take COSC 2810 concurrently with COSC 3050",
      },
      {
        course: "COSC 2670",
        title: "Network Principles",
        term: "FA 2024",
        section: "1T",
        days: "Friday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "This course is an introduction to computer networks and covers wired, wireless and internet architectures. Students will gain an understanding of network terminology and the various related technologies and protocols. The course provides an analysis of the current and future trends in networking technologies and services and includes an overview of the industry and associated management and strategy issues. Prerequisite: COSC 1550 or permission of the department.",
      },
      {
        course: "COSC 2670",
        title: "Network Principles",
        term: "FA 2024",
        section: "2T",
        days: "Thursday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "This course is an introduction to computer networks and covers wired, wireless and internet architectures. Students will gain an understanding of network terminology and the various related technologies and protocols. The course provides an analysis of the current and future trends in networking technologies and services and includes an overview of the industry and associated management and strategy issues. Prerequisite: COSC 1550 or permission of the department.",
      },
      {
        course: "BUSN 4120",
        title: "Integrated Business Processes and ERP",
        term: "FA 2024",
        section: "1T",
        days: "Friday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course provides students a comprehensive understanding of how Enterprise Resource Planning (ERP) Systems foster the integration of the fundamental business processes in today's business organizations. This course also examines the evolution of ERP and the components of a modern ERP system. There is a significant technology component to this class. Students directly practice real business functions and transactions in an ERP system to gain hands on experience.",
      },
      {
        course: "COSC 1550",
        title: "Computer Programming I",
        term: "FA 2024",
        section: "5T",
        days: "Thursday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "This course introduces students to the C++ language in order to teach programming as a systematic discipline and as a problem solving tool. Acquaints students with fundamental concepts of computers, information processing, algorithms and programs. Only offered in a 16-week format. May be repeated once for credit.",
      },
    ],
    instructor_email: "nitingoje@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Isroilov Islombek",
    instructor_courses: [
      {
        course: "COSC 3410",
        title: "Computer and Information Security",
        term: "FA 2024",
        section: "1T",
        days: "Thursday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "Students in this course will study the techniques for protecting data within a computer and protecting data as it moves through a network. Data and system security and reliability will be considered in a distributed environment. Topics will include encryption, authentication and digital signatures, threats to the computer system, and system reliability. Additionally, the students will be exposed to information system vulnerabilities, critical infrastructures, the growing threat of social networks, intelligence and counter intelligence, international laws, security policies, privacy and information liability, cyber attacks and threats, risk assessment, cybersecurity data gathering and recovery, and a survey of future cyber technology developments. Prerequisite: COSC 1560 and junior standing",
      },
      {
        course: "COSC 3410",
        title: "Computer and Information Security",
        term: "FA 2024",
        section: "3T",
        days: "Tuesday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "Students in this course will study the techniques for protecting data within a computer and protecting data as it moves through a network. Data and system security and reliability will be considered in a distributed environment. Topics will include encryption, authentication and digital signatures, threats to the computer system, and system reliability. Additionally, the students will be exposed to information system vulnerabilities, critical infrastructures, the growing threat of social networks, intelligence and counter intelligence, international laws, security policies, privacy and information liability, cyber attacks and threats, risk assessment, cybersecurity data gathering and recovery, and a survey of future cyber technology developments. Prerequisite: COSC 1560 and junior standing",
      },
      {
        course: "CSIS 1500",
        title: "Introduction to Business Technologies",
        term: "FA 2024",
        section: "2T",
        days: "Wednesday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "Business organizations operate in competitive environments and constantly redefine their business strategies to create competitive advantages. Information technology plays an important role in daily business activities by supporting and implementing enterprise-wide initiatives and global business strategies. This course will provide a broad overview of the close correlation between business and technology. The course will explore various information technologies and how they fit into business operations as a key enabler to help business success.",
      },
      {
        course: "CSIS 1500",
        title: "Introduction to Business Technologies",
        term: "FA 2024",
        section: "3T",
        days: "Friday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "Business organizations operate in competitive environments and constantly redefine their business strategies to create competitive advantages. Information technology plays an important role in daily business activities by supporting and implementing enterprise-wide initiatives and global business strategies. This course will provide a broad overview of the close correlation between business and technology. The course will explore various information technologies and how they fit into business operations as a key enabler to help business success.",
      },
    ],
    instructor_email: "iisroilov@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Bekov Sanjar",
    instructor_courses: [
      {
        course: "COSC 3810",
        title: "Principles of Programming Languages",
        term: "FA 2024",
        section: "1T",
        days: "Monday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course is a study of the design, evaluation, and implementation of programming languages. It focuses on the principles of design and evaluation and their relationship to the syntax, semantics and pragmatics of programming languages. Prerequisites: COSC 1560 and junior standing.",
      },
      {
        course: "COSC 2110",
        title: "Computer Languages",
        term: "FA 2024",
        section: "1T",
        days: "Monday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "This course investigates different computer languages, offered under different subtitles. May be repeated for credit if content differs.",
      },
      {
        course: "COSC 2110",
        title: "Computer Languages",
        term: "FA 2024",
        section: "4T",
        days: "Wednesday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course investigates different computer languages, offered under different subtitles. May be repeated for credit if content differs.",
      },
      {
        course: "COSC 2110",
        title: "Computer Languages",
        term: "FA 2024",
        section: "3T",
        days: "Tuesday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "This course investigates different computer languages, offered under different subtitles. May be repeated for credit if content differs.",
      },
      {
        course: "COSC 2110",
        title: "Computer Languages",
        term: "FA 2024",
        section: "2T",
        days: "Wednesday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "This course investigates different computer languages, offered under different subtitles. May be repeated for credit if content differs.",
      },
    ],
    instructor_email: "sanjarbekov@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Doniyorbek Ahmadaliev",
    instructor_courses: [
      {
        course: "CSIS 1500",
        title: "Introduction to Business Technologies",
        term: "FA 2024",
        section: "1T",
        days: "Friday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "Business organizations operate in competitive environments and constantly redefine their business strategies to create competitive advantages. Information technology plays an important role in daily business activities by supporting and implementing enterprise-wide initiatives and global business strategies. This course will provide a broad overview of the close correlation between business and technology. The course will explore various information technologies and how they fit into business operations as a key enabler to help business success.",
      },
      {
        course: "CSIS 1500",
        title: "Introduction to Business Technologies",
        term: "FA 2024",
        section: "8T",
        days: "Wednesday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "Business organizations operate in competitive environments and constantly redefine their business strategies to create competitive advantages. Information technology plays an important role in daily business activities by supporting and implementing enterprise-wide initiatives and global business strategies. This course will provide a broad overview of the close correlation between business and technology. The course will explore various information technologies and how they fit into business operations as a key enabler to help business success.",
      },
      {
        course: "CSIS 1500",
        title: "Introduction to Business Technologies",
        term: "FA 2024",
        section: "9T",
        days: "Friday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "Business organizations operate in competitive environments and constantly redefine their business strategies to create competitive advantages. Information technology plays an important role in daily business activities by supporting and implementing enterprise-wide initiatives and global business strategies. This course will provide a broad overview of the close correlation between business and technology. The course will explore various information technologies and how they fit into business operations as a key enabler to help business success.",
      },
    ],
    instructor_email: "ahmadalievd@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Khayatova Zarnigor",
    instructor_courses: [
      {
        course: "ENGL 1030",
        title: "Introduction to Literature",
        term: "FA 2024",
        section: "4T",
        days: "Wednesday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "Designed to accommodate non-majors. Introduces the perceptive analysis of literature with an emphasis on enhancing the appreciation and enjoyment of literature in ways that extend beyond academic study. Studies a range of literature including such genres as poetry, fiction and drama.",
      },
      {
        course: "ENGL 1030",
        title: "Introduction to Literature",
        term: "FA 2024",
        section: "2T",
        days: "Thursday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "Designed to accommodate non-majors. Introduces the perceptive analysis of literature with an emphasis on enhancing the appreciation and enjoyment of literature in ways that extend beyond academic study. Studies a range of literature including such genres as poetry, fiction and drama.",
      },
      {
        course: "ENGL 1030",
        title: "Introduction to Literature",
        term: "FA 2024",
        section: "4T",
        days: "Wednesday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "Designed to accommodate non-majors. Introduces the perceptive analysis of literature with an emphasis on enhancing the appreciation and enjoyment of literature in ways that extend beyond academic study. Studies a range of literature including such genres as poetry, fiction and drama.",
      },
    ],
    instructor_email: "zkhayatova@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Van Rooyen Johan",
    instructor_courses: [
      {
        course: "ECON 3020",
        title: "Intermediate Microeconomics",
        term: "FA 2024",
        section: "2T",
        days: "Friday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course covers advanced theory and applications in microeconomics. Topics include utility theory, consumer and firm choice, optimization, goods and services markets, resource markets, strategic behavior and market equilibrium. Prerequisite: ECON 2000 and ECON 3000.",
      },
      {
        course: "ECON 3720",
        title: "International Trade and Finance",
        term: "FA 2024",
        section: "1T",
        days: "Friday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "Students examine the theories, policies and instruments (e.g., tariffs, quotas, V.E.R.’s) of international trade and consider trade integration. Course content also focuses on the foreign exchange market and balance of payments in international trade. Macropolicies in open economies, such as flexible exchange rates and the nature of world money, are examined. Theories and policies of foreign direct investment are considered. Prerequisite: ECON 2000.",
      },
      {
        course: "ECON 3020",
        title: "Intermediate Microeconomics",
        term: "FA 2024",
        section: "1T",
        days: "Friday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "This course covers advanced theory and applications in microeconomics. Topics include utility theory, consumer and firm choice, optimization, goods and services markets, resource markets, strategic behavior and market equilibrium. Prerequisite: ECON 2000 and ECON 3000.",
      },
      {
        course: "ECON 3720",
        title: "International Trade and Finance",
        term: "FA 2024",
        section: "2T",
        days: "Thursday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "Students examine the theories, policies and instruments (e.g., tariffs, quotas, V.E.R.’s) of international trade and consider trade integration. Course content also focuses on the foreign exchange market and balance of payments in international trade. Macropolicies in open economies, such as flexible exchange rates and the nature of world money, are examined. Theories and policies of foreign direct investment are considered. Prerequisite: ECON 2000.",
      },
    ],
    instructor_email: "johanvanrooyen19@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Muminov Timur",
    instructor_courses: [
      {
        course: "ECON 3100",
        title: "Issues in Economics",
        term: "FA 2024",
        section: "1T",
        days: "Saturday",
        times: "10:00AM - 12:20PM",
        credit_hours: 3,
        course_description:
          "Analyzes current economic issues in terms of historical background, present status and possible solutions. May be repeated for credit if content differs. Prerequisite: ECON 2000",
      },
      {
        course: "ECON 3100",
        title: "Issues in Economics",
        term: "FA 2024",
        section: "2T",
        days: "Saturday",
        times: "1:30PM - 3:50PM",
        credit_hours: 3,
        course_description:
          "Analyzes current economic issues in terms of historical background, present status and possible solutions. May be repeated for credit if content differs. Prerequisite: ECON 2000",
      },
    ],
    instructor_email: "timurmuminov@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
  {
    instructor_name: "Das Debasis",
    instructor_courses: [
      {
        course: "COSC 1560",
        title: "Computer Programming II",
        term: "FA 2024",
        section: "1T",
        days: "Friday",
        times: "2:00PM - 4:20PM",
        credit_hours: 3,
        course_description:
          "This course uses the C++ language to introduce students to programming concepts such as abstract data types, use of classes and objects, pointers and advanced file operations. Only offered in a 16-week format. May be repeated once for credit. Prerequisite: COSC 1550 with grade of B- or better.",
      },
      {
        course: "COSC 1560",
        title: "Computer Programming II",
        term: "FA 2024",
        section: "4T",
        days: "Monday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "This course uses the C++ language to introduce students to programming concepts such as abstract data types, use of classes and objects, pointers and advanced file operations. Only offered in a 16-week format. May be repeated once for credit. Prerequisite: COSC 1550 with grade of B- or better.",
      },
      {
        course: "COSC 1560",
        title: "Computer Programming II",
        term: "FA 2024",
        section: "5T",
        days: "Wednesday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "This course uses the C++ language to introduce students to programming concepts such as abstract data types, use of classes and objects, pointers and advanced file operations. Only offered in a 16-week format. May be repeated once for credit. Prerequisite: COSC 1550 with grade of B- or better.",
      },
      {
        course: "COSC 1570",
        title: "Mathematics for Computer Science",
        term: "FA 2024",
        section: "5T",
        days: "Wednesday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "This course covers topics including number systems, computer arithmetic, binary, octal, hexadecimal, floating point operations, sets and Boolean algebra.",
      },
      {
        course: "COSC 1570",
        title: "Mathematics for Computer Science",
        term: "FA 2024",
        section: "3T",
        days: "Thursday",
        times: "4:30PM - 6:50PM",
        credit_hours: 3,
        course_description:
          "This course covers topics including number systems, computer arithmetic, binary, octal, hexadecimal, floating point operations, sets and Boolean algebra.",
      },
    ],
    instructor_email: "debasisdas@webster.edu",
    office_hours: {
      "3:30PM - 5:30PM": ["Wednesday"],
      "9:30AM - 11:30AM": ["Friday"],
      room: "217NH",
    },
  },
  {
    instructor_name: "Kakde Yogesh",
    instructor_courses: [
      {
        course: "COSC 1550",
        title: "Computer Programming I",
        term: "FA 2024",
        section: "1T",
        days: "Thursday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "This course introduces students to the C++ language in order to teach programming as a systematic discipline and as a problem solving tool. Acquaints students with fundamental concepts of computers, information processing, algorithms and programs. Only offered in a 16-week format. May be repeated once for credit.",
      },
      {
        course: "COSC 1550",
        title: "Computer Programming I",
        term: "FA 2024",
        section: "2T",
        days: "Tuesday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "This course introduces students to the C++ language in order to teach programming as a systematic discipline and as a problem solving tool. Acquaints students with fundamental concepts of computers, information processing, algorithms and programs. Only offered in a 16-week format. May be repeated once for credit.",
      },
      {
        course: "COSC 1550",
        title: "Computer Programming I",
        term: "FA 2024",
        section: "3T",
        days: "Wednesday",
        times: "9:00AM - 11:20AM",
        credit_hours: 3,
        course_description:
          "This course introduces students to the C++ language in order to teach programming as a systematic discipline and as a problem solving tool. Acquaints students with fundamental concepts of computers, information processing, algorithms and programs. Only offered in a 16-week format. May be repeated once for credit.",
      },
      {
        course: "COSC 1550",
        title: "Computer Programming I",
        term: "FA 2024",
        section: "6T",
        days: "Tuesday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "This course introduces students to the C++ language in order to teach programming as a systematic discipline and as a problem solving tool. Acquaints students with fundamental concepts of computers, information processing, algorithms and programs. Only offered in a 16-week format. May be repeated once for credit.",
      },
      {
        course: "COSC 1550",
        title: "Computer Programming I",
        term: "FA 2024",
        section: "4T",
        days: "Thursday",
        times: "11:30AM - 1:50PM",
        credit_hours: 3,
        course_description:
          "This course introduces students to the C++ language in order to teach programming as a systematic discipline and as a problem solving tool. Acquaints students with fundamental concepts of computers, information processing, algorithms and programs. Only offered in a 16-week format. May be repeated once for credit.",
      },
    ],
    instructor_email: "yogeshkakde@webster.edu",
    office_hours: {
      "2:00PM - 4:10PM": ["Monday", "Wednesday", "Friday"],
      "4:30PM - 6:00PM": ["Thursday"],
      room: "106WH",
    },
  },
]

// for (let i = 0; i < instructorsData.length; i++) {
//   const instructor_courses = instructorsData[i]["instructor_courses"] // array

//   for (let j = 0; j < instructor_courses.length; j++) {
//     courses.create({
//       course: instructor_courses[j]["course"],
//       instructor: instructorsData[i]["instructor_name"],
//       days: instructor_courses[j]["days"],
//       credit_hours: instructor_courses[j]["credit_hours"],
//       course_description: instructor_courses[j]["course_description"],
//       times: instructor_courses[j]["times"],
//       title: instructor_courses[j]["title"],
//       section: instructor_courses[j]["section"],
//       term: instructor_courses[j]["term"],
//       student_feedbacks: [],
//     })
//   }
// }

for (let i = 0; i < instructorsData.length; i++) {
  instructors.create({
    instructor_name: instructorsData[i]["instructor_name"],
    instructor_courses: instructorsData[i]["instructor_courses"],
    instructor_email: instructorsData[i]["instructor_email"],
    office_hours: instructorsData[i]["office_hours"],
  })
}
