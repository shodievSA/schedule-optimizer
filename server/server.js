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
      "course_name",
      "instructor",
      "days",
      "times",
      "credit_hours",
      "course_description",
      "course_id",
    ],
  })

  res.json({ data: courses })
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
    ],
  })

  res.json({ data: courses })
})

app.get("/api/v1/user-courses", async (req, res) => {
  const userEmail = req.session["student-email"]

  const studentCourses = await Students.findOne({
    where: { student_email: userEmail },
  })

  console.log(studentCourses)

  res.json({ data: studentCourses })
})

app.post("/api/v1/login-user", async (req, res) => {
  const studentEmail = req.body["webster-email"]
  const emailPassword = req.body["webster-email-password"]

  let isAuthorized = await verifyStudentCredentials(studentEmail, emailPassword)

  if (isAuthorized == true) {
    req.session["student-email"] = studentEmail
    res.sendStatus(200)
  } else {
    res.status(401).send("Unauthorized")
  }
})

app.post("/api/v1/new-course", async (req, res) => {
  const {
    course_id,
    instructor,
    course_name,
    course_description,
    days,
    times,
    credit_hours,
  } = req.body

  const studentEmail = req.session["student-email"]

  const user = await Students.findOne({
    where: { student_email: studentEmail },
    attributes: ["student_courses"],
  })

  const studentCourses = user["student_courses"] || []

  studentCourses.push({
    course_name: course_name,
    instructor: instructor,
    days: days,
    times: times,
    credit_hours: credit_hours,
    course_description: course_description,
    course_id: course_id,
  })

  await Students.update(
    { student_courses: studentCourses },
    { where: { student_email: studentEmail } }
  )

  res.sendStatus(200)
})

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
