import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import SkeletonTable from "../components/SkeletonTable"
import styles from "./Courses.module.css"

function Courses() {
  const [courses, setCourses] = useState([])
  const [searchResults, setSearchResults] = useState(null)
  const navigate = useNavigate()

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

  async function handleCourseSearch(e) {
    if (e.target.value.length == 0) {
      setSearchResults(null)
    } else {
      const query = e.target.value.toLowerCase()

      setSearchResults(() =>
        courses.filter((course) =>
          course["title"].toLowerCase().includes(query)
        )
      )
    }
  }

  function handleRedirection(
    courseId,
    instructor,
    days,
    times,
    course_description,
    course,
    title,
    term,
    section,
    credit_hours
  ) {
    navigate(`/courses/${courseId}`, {
      state: {
        course,
        course_description,
        instructor,
        days,
        times,
        credit_hours,
        title,
        term,
        section,
      },
    })
  }

  return (
    <div className={styles["page-container"]}>
      <div className="flex items-center justify-between">
        <h1>Available Courses</h1>
        <label className="flex items-center w-5/12 gap-2 input input-bordered input-lg">
          <input
            type="text"
            className="grow"
            placeholder="Search courses here"
            onChange={handleCourseSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-6 h-6 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="overflow-auto">
        {courses.length > 0 ? (
          <table className={styles["university-courses-table"]}>
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
              {searchResults !== null
                ? searchResults.map((course) => {
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
                            course["course"],
                            course["title"],
                            course["term"],
                            course["section"],
                            course["credit_hours"]
                          )
                        }
                      >
                        <td>{course["title"]}</td>
                        <td>{course["instructor"]}</td>
                        <td>{course["days"]}</td>
                        <td>{course["times"]}</td>
                        <td>{course["credit_hours"]}</td>
                      </tr>
                    )
                  })
                : courses.map((course) => {
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
                            course["course"],
                            course["title"],
                            course["term"],
                            course["section"],
                            course["credit_hours"],
                            course["student_feedbacks"]
                          )
                        }
                      >
                        <td>{course["title"]}</td>
                        <td>{course["instructor"]}</td>
                        <td>{course["days"]}</td>
                        <td>{course["times"]}</td>
                        <td>{course["credit_hours"]}</td>
                      </tr>
                    )
                  })}
            </tbody>
          </table>
        ) : (
          <SkeletonTable />
        )}
      </div>
    </div>
  )
}

export default Courses
