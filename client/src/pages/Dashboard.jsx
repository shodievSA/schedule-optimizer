import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function getStudents() {
      try {
        const res = await fetch("http://localhost:3000/api/v1/user-courses")
        const data = await res.json()

        console.log(data)

        console.log(data.data["student_courses"])

        setCourses(data.data["student_courses"])
      } catch (err) {
        console.error(err)
      }
    }

    getStudents()
  }, [])

  function handleRedirection(
    course,
    section,
    title,
    instructor,
    credit_hours,
    term,
    course_description,
    course_id,
    days,
    times
  ) {

    navigate(`/user-course/${course_id}`, {
        state: {
            course,
            section,
            title,
            instructor,
            credit_hours,
            term,
            course_description,
            days,
            times
        }
    })

  }

  return (
    <div className="overflow-x-auto">
      <table className="table border rounded-xl border-slate-200">
        <thead className="text-lg text-center text-white bg-primary">
          <tr className="text-center font-medium">
            <th className="p-5">Course</th>
            <th className="p-5">Section</th>
            <th className="p-5">Title</th>
            <th className="p-5">Instructor</th>
            <th className="p-5">Hours</th>
            <th className="p-5">Term</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => {
              return (
                <tr 
                key={course.course_id} 
                className="hover:bg-slate-200 cursor-pointer text-center text-base font-medium"
                onClick={() => handleRedirection(
                    course.course,
                    course.section,
                    course.title,
                    course.instructor,
                    course.credit_hours,
                    course.term,
                    course.course_description,
                    course.course_id,
                    course.days,
                    course.times
                )}
                >
                    <td className="py-8 px-8">{course.course}</td>
                    <td className="py-8 px-8">{course.section}</td>
                    <td className="py-8 px-8">{course.title}</td>
                    <td className="py-8 px-8">{course.instructor}</td>
                    <td className="py-8 px-8">{course.credit_hours}</td>
                    <td className="py-8 px-8">{course.term}</td>
                </tr>
              )
            })
          ) : (
            <div>No courses yet</div>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
