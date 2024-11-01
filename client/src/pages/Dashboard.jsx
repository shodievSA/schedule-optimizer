import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"
import SkeletonTable from "../components/SkeletonTable"
import ThemeContext from "../context/ThemeContext"
import styles from "./Dashboard.module.css"

function Dashboard() {

  const { theme, changeTheme } = useContext(ThemeContext);
  const [courses, setCourses] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [isScheduleEmpty, setIsScheduleEmpty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

      async function getStudents() {

          try {
              const res = await fetch("http://localhost:3000/api/v1/user-courses");
              const data = await res.json();

              if (data.data['student_courses'].length > 0) {
                  setCourses(data.data["student_courses"]);
                  setIsScheduleEmpty(false);
              } else {
                  setIsScheduleEmpty(true);
              }

              setStudentName(data.data["student_name"]);
          } catch (err) {
            console.error(err);
          }

      }

    getStudents();

  }, []);

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
    navigate(`/dashboard/${course_id}`, {
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
      },
    })
  }

  return (
    <div className="flex flex-col gap-y-12 h-full">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold whitespace-pre">
              {studentName !== "" ? (
                <TypeAnimation
                  sequence={[`Welcome, ${studentName}!`]}
                  speed={30}
                  cursor={false}
                />
              ) : (
                " "
              )}
            </h1>
            <div>
              <div className="dropdown pl-4">
                  <div tabIndex={0} role="button" className="btn btn-lg m-1">
                      Theme
                      <svg
                      width="12px"
                      height="12px"
                      className="inline-block h-2 w-2 fill-current opacity-60"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 2048 2048">
                      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                      </svg>
                  </div>
                  <ul 
                  tabIndex={0} 
                  className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-5 shadow-2xl absolute right-0 gap-y-2 flex flex-col"
                  >
                      <li>
                          <input
                          type="radio"
                          name="theme-dropdown"
                          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                          aria-label="Light"
                          value="light" 
                          checked={(theme === 'light' || theme === null) ? true : false}
                          onChange={() => changeTheme('light')}
                          />
                      </li>
                      <li>
                          <input
                          type="radio"
                          name="theme-dropdown"
                          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                          aria-label="Dark"
                          value="dark" 
                          checked={(theme === 'dark' || theme === null) ? true : false}
                          onChange={() => changeTheme('dark')}
                          />
                      </li>
                      <li>
                          <input
                          type="radio"
                          name="theme-dropdown"
                          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                          aria-label="Retro"
                          value="retro" 
                          checked={theme === 'retro' ? true : false}
                          onChange={() => changeTheme('retro')}
                          />
                      </li>
                      <li>
                          <input
                          type="radio"
                          name="theme-dropdown"
                          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                          aria-label="Valentine"
                          value="valentine" 
                          checked={theme === 'valentine' ? true : false}
                          onChange={() => changeTheme('valentine')}
                          />
                      </li>
                      <li>
                          <input
                          type="radio"
                          name="theme-dropdown"
                          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                          aria-label="Halloween"
                          value="halloween" 
                          checked={(theme === 'halloween' || theme === null) ? true : false}
                          onChange={() => changeTheme('halloween')}
                          />
                      </li>
                      <li>
                          <input
                          type="radio"
                          name="theme-dropdown"
                          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                          aria-label="Luxury"
                          value="luxury" 
                          checked={(theme === 'luxury' || theme === null) ? true : false}
                          onChange={() => changeTheme('luxury')}
                          />
                      </li>
                      <li>
                          <input
                          type="radio"
                          name="theme-dropdown"
                          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                          aria-label="Business"
                          value="business" 
                          checked={(theme === 'business' || theme === null) ? true : false}
                          onChange={() => changeTheme('business')}
                          />
                      </li>
                  </ul>
              </div>
            </div>
        </div>
        {
          courses.length > 0 ? (
            <table className={styles['user-courses-table']}>
              <thead className={styles['table-header']}>
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
              <tbody className={styles['table-body']}>
                {courses.map((course, index) => {
                  return (
                    <tr
                      key={course.course_id}
                      className="hover:bg-base-300 cursor-pointer text-center text-base font-medium"
                      onClick={() =>
                        handleRedirection(
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
                        )
                      }
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
                })}
              </tbody>
            </table>
          ) : (   
            isScheduleEmpty == true ? (
                <div className="flex grow items-center justify-center">
                    <h1 className="text-4xl font-medium">
                        Your schedule is currently empty :(
                    </h1>
                </div>
            ) : (
              <SkeletonTable />
            )
          )}
    </div>
  )
}

export default Dashboard;
