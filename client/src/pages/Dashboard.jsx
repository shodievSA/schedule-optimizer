import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TypeAnimation } from "react-type-animation";
import SkeletonTable from "../components/SkeletonTable";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [studentName, setStudentName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getStudents() {
      try {
        const res = await fetch("http://localhost:3000/api/v1/user-courses")
        const data = await res.json();

        setCourses(data.data["student_courses"]);
        setStudentName(data.data['student_name'])
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
    <div className="overflow-x-auto flex flex-col gap-y-12 pb-12">
      <h1 className="text-3xl font-semibold whitespace-pre">
          {
              studentName !== "" ? (
                <TypeAnimation
                  sequence={[`Good morning, ${studentName}`]}
                  speed={30}
                  cursor={false}
                />
              ) : (
                  " "
              )
          }
      </h1>
      {
          courses.length > 0 ? (
            <table className="table border rounded-xl border-slate-200">
              <thead className="text-lg text-center text-white bg-neutral">
                <tr className="text-center font-medium">
                  <th className="p-6">Course No.</th>
                  <th className="p-6">Course</th>
                  <th className="p-6">Section</th>
                  <th className="p-6">Title</th>
                  <th className="p-6">Instructor</th>
                  <th className="p-6">Hours</th>
                  <th className="p-6">Term</th>
                </tr>
              </thead>
              <tbody>
                  {
                      courses.map((course, index) => {
                        return (
                            <tr 
                            key={course.course_id} 
                            className="hover:bg-base-300 cursor-pointer text-center text-base font-medium"
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
                                <td className="py-8 px-8">{index + 1}</td>
                                <td className="py-8 px-8">{course.course}</td>
                                <td className="py-8 px-8">{course.section}</td>
                                <td className="py-8 px-8">{course.title}</td>
                                <td className="py-8 px-8">{course.instructor}</td>
                                <td className="py-8 px-8">{course.credit_hours}</td>
                                <td className="py-8 px-8">{course.term}</td>
                            </tr>
                        )
                      })
                  }
              </tbody>
            </table>
          ) : (
            <SkeletonTable />
          )
      }
    </div>
  )
}

export default Dashboard
