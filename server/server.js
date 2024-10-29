require("dotenv").config()
const session = require("express-session")
const Sequelize = require("sequelize")
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const verifyStudentCredentials = require("./utils/verifyStudentCredentials.js")
const crypto = require("crypto")
const path = require("path")
const app = require("./app")
const Courses = require("./db/models/courses.js")
const Students = require("./db/models/students.js")
const Instructors = require("./db/models/instructors.js")
const sendPrompt = require("./utils/sendPrompt.js")

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
)

const sessionStore = new SequelizeStore({
  db: sequelize,
  tableName: "sessions",
})

sessionStore.sync()

app.use(
  session({
    secret: process.env.SECRET_KEY,
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    genid: function (req) {
      return crypto.randomBytes(32).toString("hex")
    },
  })
)

app.get("/registration", (req, res) => {
  const filePath = path.join(__dirname, "../client/dist/index.html")

  res.sendFile(filePath)
})

app.get("/api/v1/available-university-courses", async (req, res) => {
  const courses = await Courses.findAll({
    attributes: [
      "course",
      "title",
      "term",
      "section",
      "instructor",
      "days",
      "times",
      "credit_hours",
      "course_description",
      "course_id",
      "student_feedbacks"
    ],
  })

  res.json({ data: courses })
})

app.get("/api/v1/user-courses", async (req, res) => {

    const student_email = req.session["student-email"];
    const studentData = await Students.findOne({
        where: { student_email: student_email },
    });
    res.json({ data: studentData });

});

app.get("/api/v1/instructors", async (req, res) => {

      const instructorsData = await Instructors.findAll({
          attributes: [
              "instructor_name",
              "instructor_courses",
              "instructor_email",
              "office_hours"
          ]
      });

      res.status(200).json({ data: instructorsData });

});

app.post("/api/v1/login-user", async (req, res) => {

    const studentEmail = req.body["webster-email"];
    const emailPassword = req.body["webster-email-password"];

    let isAuthorized = await verifyStudentCredentials(
      studentEmail, emailPassword
    );

    if (isAuthorized == true) {
        req.session["student-email"] = studentEmail;
        res.sendStatus(200);
    } else {
        res.status(401).send("Unauthorized");
    }

});

app.post("/api/v1/new-course", async (req, res) => {

    const {
      course_id,
      instructor,
      course,
      course_description,
      days,
      times,
      credit_hours,
      title,
      section,
      term
    } = req.body;

    const studentEmail = req.session["student-email"];

    const user = await Students.findOne({
        where: { student_email: studentEmail },
        attributes: ["student_courses"],
    });

    const studentCourses = user["student_courses"] || []

    studentCourses.push({
        course: course,
        instructor: instructor,
        days: days,
        times: times,
        credit_hours: credit_hours,
        course_description: course_description,
        course_id: course_id,
        title: title,
        section: section,
        term: term
    });

    await Students.update(
        { student_courses: studentCourses },
        { where: { student_email: studentEmail } }
    );

    res.sendStatus(200);

});

app.post("/api/v1/delete-user-course", async (req, res) => {

    const { courseId, userEmail, emailPassword } = req.body;

    let isAuthorized = await verifyStudentCredentials(userEmail, emailPassword);

    if (isAuthorized) {

        const user = await Students.findOne({
            where: { student_email: userEmail },
            attributes: ["student_courses"],
        });

        let studentCourses = user["student_courses"] || [];

        studentCourses = studentCourses.filter((course) => {

            if (course.course_id !== courseId) {
                return course
            }

        });

        await Students.update(
            { student_courses: studentCourses },
            { where: { student_email: userEmail } }
        )
      
        res.sendStatus(200);

    }

});

app.post("/api/v1/student-prompt", async (req, res) => {

    const student_email = req.session['student-email'];
    const prompt = req.body['prompt'];

    const studentData = await Students.findOne({
        where: { student_email: student_email },
        attributes: [
          'student_email',
          'student_email_password',
          'student_courses',
          'student_name',
          'student_status',
          'student_major'
        ]
    });

    const universityData = await Courses.findAll({
      attributes: [
        'instructor',
        'days',
        'times',
        'title',
        'section',
        'student_feedbacks'
      ]
    });

    const instructorsData = await Instructors.findAll({
        attributes: [
          'instructor_name',
          'instructor_courses',
          'instructor_email',
          'office_hours'
        ]
    });
    
    const gptResponse = await sendPrompt(
        prompt, 
        JSON.stringify(studentData.dataValues),
        JSON.stringify(universityData),
        JSON.stringify(instructorsData)
    );

    res.json({ data: gptResponse });

});

app.post("/api/v1/courses/:courseID/student-feedback", async (req, res) => {

    const studentEmail = req.session['student-email'];
    const course_id = req.params['courseID'];
    const { feedback, rating } = req.body;

    let profanityRes = await fetch('https://vector.profanity.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: feedback })
    });
    let data = await profanityRes.json();

    if (data.isProfanity) {
        res.json(
            { message: "This feedback can't be submitted since it contains inappropriate language. " +
                       "Modify your feedback and submit again." 
            }
        );
    } else {

        const studentData = await Students.findOne({
            where: { student_email: studentEmail },
            attributes: [
                'student_name',
                'student_status'
            ]
        });

        const universityCoursesData = await Courses.findOne({
            where: { course_id: Number(course_id) },
            attributes: [
                'student_feedbacks',
            ]
        });

        universityCoursesData['student_feedbacks'].push({
            student_name: studentData['student_name'],
            student_status: studentData['student_status'],
            student_feedback: feedback,
            rating: Number(rating)
        });

        await Courses.update(
          { student_feedbacks: universityCoursesData['student_feedbacks'] },
          { where: { course_id: course_id } }
      )

        res.json(
            { message: "Your feedback has been successfully submitted!" }
        );
    }

});

app.get('/api/v1/course-feedback/:courseID', async (req, res) => {

    const course_id = req.params['courseID'];

    const courseFeedbacks = await Courses.findOne({
        where: { course_id: course_id },
        attributes: ['student_feedbacks']
    });

    res.json({ data: courseFeedbacks });

});

// app.get('/api/v1/instructors', async (req, res) => {

//     const instructorsData = await Instructors.findAll({
//         attributes: [
//             "instructor_name",
//             "instructor_courses",
//             "instructor_email",
//             "office_hours"
//         ]
//     });

//     console.log(instructorsData)

//     res.send(200).json({ data: instructorsData });

// });

app.get("/api/v1/logout-user", async (req, res) => {

    req.session.destroy((err) => {
      if (err) {
          return res.status(500).send('Unable to log out.');
      }

    res.clearCookie('connect.sid');
    res.sendStatus(200);
    
  });

});

app.get("*", async (req, res) => {
  if (req.session["student-email"]) {
    const filePath = path.join(__dirname, "../client/dist/index.html")

    res.sendFile(filePath)
  } else {
    res.redirect("/registration")
  }
})

app.listen(3000, () => {
  console.log("App running on port 3000...")
})
