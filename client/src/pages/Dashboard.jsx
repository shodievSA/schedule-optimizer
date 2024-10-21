import { useEffect, useState } from "react"

function Dashboard() {
  const [courses, setCourses] = useState()

  useEffect(() => {
    async function getStudents() {
      try {
        const res = await fetch("https://localhost:3000/api/v1/user-courses")
        const data = await res.json()

        setCourses(data)
        return data
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
            <th>Grade</th>
            <th>Campus</th>
            <th>Term</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {courses?.map((course) => {
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
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
