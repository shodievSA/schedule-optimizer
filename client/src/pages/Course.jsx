import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import styles from "./Course.module.css"

function Course() {
  const { courseId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const {
    instructor,
    days,
    times,
    course_description,
    course,
    credit_hours,
    title,
    section,
    term,
  } = location.state

  async function addNewCourse() {
    const newCourse = {
      course_id: courseId,
      instructor: instructor,
      days: days,
      times: times,
      title: title,
      section: section,
      term: term,
      course_description: course_description,
      course: course,
      credit_hours: credit_hours,
    }

    let res = await fetch("http://localhost:3000/api/v1/new-course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    })

    if (res.ok) {
      navigate("/dashboard", { replace: true })
    }
  }

  return (
    <div className={styles["page-container"]}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">{course}</h1>
        <h1 className="text-2xl font-semibold">{days}, {times}</h1>
      </div>
      <div className="flex gap-x-16 pt-14">
        <div className={styles["instructor-details"]}>
          <div className={styles["image-container"]}>
            <img
              src="/assets/woman-image-placeholder.jpg"
              alt="Instructor Picture"
              className={styles["instructor-image"]}
            />
          </div>
          <h1>{instructor}</h1>
        </div>
        <div className={styles["course-description"]}>
          <h1>About the course:</h1>
          <p>{course_description}</p>
        </div>
      </div>
      <button className={styles["join-course-button"]} onClick={addNewCourse}>
        Join Course
      </button>
    </div>
  )
}

export default Course
