import { useEffect, useState } from "react"
import styles from "./Instructors.module.css"
import { useNavigate } from "react-router-dom"
import SkeletonTable from "../components/SkeletonTable"

function Instructors() {
  const [instructors, setInstructors] = useState([])
  const [searchResults, setSearchResults] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchInstructors() {
      try {
        const res = await fetch("http://localhost:3000/api/v1/instructors")
        const data = await res.json()

        setInstructors(data.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchInstructors()
  }, [])

  function handleInstructorSearch(e) {
    const query = e.target.value.toLowerCase()
    if (query.length === 0) {
      setSearchResults(instructors)
    } else {
      setSearchResults(() =>
        instructors.filter((instructor) =>
          instructor.instructor_name.toLowerCase().includes(query)
        )
      )
    }
  }

  function handleRedirection(
    instructorId,
    instructor_name,
    instructor_email,
    instructor_courses
  ) {
    navigate(`/instructors/${instructorId}`, {
      state: {
        instructorId,
        instructor_name,
        instructor_email,
        instructor_courses,
      },
    })
  }

  return (
    <div className={styles["page-container"]}>
      <div className="flex items-center justify-between">
        <h1>Instructors</h1>
        <label className="flex items-center w-5/12 gap-2 input input-bordered input-lg">
          <input
            type="text"
            className="grow"
            placeholder="Search instructors by their name"
            onChange={handleInstructorSearch}
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
        {instructors.length > 0 ? (
          <table className={styles["instructors-table"]}>
            <thead className={styles["table-header"]}>
              <tr>
                <th>Full name</th>
                <th>Office hours</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className={styles["table-body"]}>
              {
                searchResults !== null ? (
                  searchResults.map((instructor) => {
                    return (
                      <tr
                        key={instructor["instructor_id"]}
                        onClick={() =>
                          handleRedirection(
                            instructor.instructor_id,
                            instructor.instructor_name,
                            instructor.instructor_email,
                            instructor.instructor_courses
                          )
                        }
                      >
                        <td className="text-center">{instructor["instructor_name"]}</td>
                        <td>
                          {Object.entries(instructor.office_hours)
                            .filter(([key]) => key !== "room")
                            .map(([key, value]) => (
                              <div key={key}>
                                <p>- {value.join(", ")}: {key}</p>
                              </div>
                            ))}
                          <p>
                            <br />
                            - Room: {instructor.office_hours.room}
                          </p>
                        </td>
                        <td className="text-center">
                          <a 
                            href={`https://outlook.office365.com/mail/deeplink/compose?to=${instructor["instructor_email"]}`}
                            className="link link-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            >
                              {instructor["instructor_email"]}
                            </a>
                        </td>
                      </tr>
                    )
                  })
                ) : ( 
                  instructors.map((instructor) => {
                    return (
                      <tr
                        key={instructor["instructor_id"]}
                        onClick={() =>
                          handleRedirection(
                            instructor.instructor_id,
                            instructor.instructor_name,
                            instructor.instructor_email,
                            instructor.instructor_courses
                          )
                        }
                      >
                        <td className="text-center">
                          {instructor["instructor_name"]}
                        </td>
                        <td>
                          {Object.entries(instructor.office_hours)
                            .filter(([key]) => key !== "room")
                            .map(([key, value]) => (
                              <div key={key}>
                                <p>- {value.join(", ")}: {key}</p>
                              </div>
                            ))}
                          <p>
                            <br />
                            - Room: {instructor.office_hours.room}
                          </p>
                        </td>
                        <td className="text-center">
                          <a 
                          href={`https://outlook.office365.com/mail/deeplink/compose?to=${instructor["instructor_email"]}`}
                          className="link link-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          >
                            {instructor["instructor_email"]}
                          </a>
                        </td>
                      </tr>
                    )
                  })
                )
              }
            </tbody>
          </table>
        ) : (
          <SkeletonTable />
        )}
      </div>
    </div>
  )
}

export default Instructors
