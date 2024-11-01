import { useLocation, useNavigate } from "react-router-dom"
import SkeletonTable from "../components/SkeletonTable"
import styles from "./Instructor.module.css"
import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"

function Instructor() {
  const location = useLocation()
  const navigate = useNavigate()
  const {
    instructorId,
    instructor_name,
    instructor_email,
    instructor_courses,
  } = location.state
  const [searchResults, setSearchResults] = useState(instructor_courses)

  console.log(instructor_courses)

  function handleCourseSearch(e) {
    if (e.target.value.length == 0) {
      setSearchResults(null)
    } else {
      const query = e.target.value.toLowerCase()

      setSearchResults(() =>
        instructor_courses.filter((course) =>
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
      <div className="flex items-center justify-center gap-x-16 relative">
        <div className="tooltip absolute left-0" data-tip="Courses">
          <IoIosArrowBack className="text-5xl" onClick={() => navigate(-1)} />
        </div>
        <div className="flex text-3xl font-semibold gap-x-12">
          {`${instructor_name}'s`} Courses
        </div>
      </div>
      <div className="overflow-auto">
        {instructor_courses.length > 0 ? (
          <table className={styles["instructor-courses-table"]}>
            <thead className={styles["table-header"]}>
              <tr>
                <th>Course</th>
                <th>Title</th>
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
                        <td>{course["course"]}</td>
                        <td>{course["title"]}</td>
                        <td>{course["days"]}</td>
                        <td>{course["times"]}</td>
                        <td>{course["credit_hours"]}</td>
                      </tr>
                    )
                  })
                : instructor_courses.map((course) => {
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
                        <td>{course["course"]}</td>
                        <td>{course["title"]}</td>
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

export default Instructor
