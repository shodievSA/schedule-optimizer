import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AvailableCourseSkeleton from "../components/AvailableCourseSkeleton"
import styles from "./Courses.module.css"

function Courses() {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate()

  const skeletonCount = 20

  useEffect(() => {
    async function fetchCourses() {
      let res = await fetch(
        "http://localhost:3000/api/v1/available-university-courses"
      )
      let data = await res.json()

      setCourses(data.data)
    }

    fetchCourses()
  }, [])

  function handleRedirection(
    courseId,
    instructor,
    days,
    times,
    course_description,
    course_name,
    credit_hours
  ) {
    navigate(`/courses/${courseId}`, {
      state: {
        course_name: course_name,
        course_description: course_description,
        instructor: instructor,
        days: days,
        times: times,
        credit_hours: credit_hours,
      },
    })
  }

  return (
    <div className={styles["page-container"]}>
      <h1>Courses</h1>
      <div className="overflow-auto">
        <table className="table">
          <thead className={styles["table-header"]}>
            <tr>
              <th>Title</th>
              <th>Instructor</th>
              <th>Days</th>
              <th>Times</th>
              <th>Credit Hours</th>
            </tr>
          </thead>
          <tbody className={styles["table-body"]}>
            {courses.length > 0
              ? courses.map((course) => {
                  return (
                    <tr
                      key={course["course_id"]}
                      onClick={() =>
                        handleRedirection(
                          course["course_id"],
                          course["instructor"],
                          course["days"],
                          course["times"],
                          course["course_description"],
                          course["course_name"],
                          course["credit_hours"]
                        )
                      }
                    >
                      <td>{course["course_name"]}</td>
                      <td>{course["instructor"]}</td>
                      <td>{course["days"]}</td>
                      <td>{course["times"]}</td>
                      <td>{course["credit_hours"]}</td>
                    </tr>
                  )
                })
              : Array.from({ length: skeletonCount }).map((_, index) => (
                  <AvailableCourseSkeleton />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Courses
