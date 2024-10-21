import { useEffect, useState } from "react"

function Dashboard() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    async function getStudents() {
      try {
        const res = await fetch("http://localhost:3000/api/v1/user-courses")
        const data = await res.json()

        console.log(data)

        setCourses(data.data["student_courses"])
      } catch (err) {
        console.error(err)
      }
    }

    getStudents()
  }, [])

  return (
    <div className="overflow-x-auto">
      <table className="table border rounded-xl border-slate-200">
        {/* head */}
        <thead className="text-lg text-center text-white bg-gray-400">
          <tr>
            <th>Course</th>
            <th>Section</th>
            <th>Title</th>
            <th>Instructor</th>
            <th>Hours</th>
            <th>Term</th>
          </tr>
        </thead>

        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => {
              return (
                <tr key={course.course_id}>
                  <td>{course.course}</td>
                  <td>{course.section}</td>
                  <td>{course.title}</td>
                  <td>{course.instructor}</td>
                  <td>{course.credit_hours}</td>
                  <td>{course.term}</td>
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
