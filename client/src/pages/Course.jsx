import { useState, useRef } from "react"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import styles from "./Course.module.css"

function Course() {
  const [withdrawConfirmed, setWithdrawConfirmed] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [emailPassword, setEmailPassword] = useState("")
  const modalRef = useRef(null)

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

  const formatted_course_description = course_description.replace(/\n\n/g, "<br><br>")
                                                         .replace(/\n/g, "<br>")

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

  function handleRedirection() {
    navigate(`/courses/${courseId}/students-feedback`, { state: { course } })
  }

  return (
    <div className={styles["page-container"]}>
      <div className="flex items-center justify-between gap-x-16">
        <div className="tooltip" data-tip="Courses">
          <IoIosArrowBack className="text-5xl" onClick={() => navigate(-1)} />
        </div>
        <div className="flex text-3xl font-semibold gap-x-12">
          <h1>{course}</h1>
          <h1>
            {days}, {times}
          </h1>
        </div>
        <button
          className="text-white shadow-md btn btn-lg btn-secondary"
          onClick={handleRedirection}
        >
          Student Feedback
        </button>
      </div>
      <div className="flex gap-x-16 py-14 grow">
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
        <div 
        className={styles["course-description"]}
        dangerouslySetInnerHTML={{
          __html: `<h1>About the course:</h1><p>${formatted_course_description}</p>`,
        }}
        >
        </div>
      </div>
      <button
        className={styles["join-course-button"]}
        onClick={() => modalRef.current.showModal()}
      >
        Join Course
      </button>
      <dialog className={styles["modal-window"]} ref={modalRef}>
        <div className="flex flex-col p-10 modal-box gap-y-4">
          {withdrawConfirmed ? (
            <>
              <form method="dialog">
                <button
                  className="absolute text-xl btn btn-circle btn-ghost right-4 top-4"
                  onClick={() => setWithdrawConfirmed(false)}
                >
                  ✕
                </button>
              </form>
              <h3 className="text-2xl font-bold text-center">
                Please prove your identity
              </h3>
              <div className={styles["user-credentials"]}>
                <label className="flex items-center gap-2 input input-lg input-bordered">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-6 h-6 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Webster Email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </label>
                <label className="flex items-center gap-2 input input-lg input-bordered">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-6 h-6 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    value={emailPassword}
                    placeholder="Email Password"
                    onChange={(e) => setEmailPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className="modal-action">
                <button
                  className="w-full text-white btn btn-lg btn-secondary"
                  onClick={addNewCourse}
                >
                  Confirm
                </button>
              </div>
            </>
          ) : (
            <>
              <form method="dialog">
                <button
                  className="absolute text-xl btn btn-circle btn-ghost right-4 top-4"
                  onClick={() => setWithdrawConfirmed(false)}
                >
                  ✕
                </button>
              </form>
              <h3 className="text-3xl font-bold text-center">Important!</h3>
              <p className="py-4 text-2xl text-center">
                Are you sure you want to join this course? Keep in mind that you{" "}
                <b>will not</b> be able to withdraw this course once you join
                it.
              </p>
              <div className="modal-action">
                <button
                  className="w-full text-white btn btn-lg btn-secondary"
                  onClick={() => setWithdrawConfirmed(true)}
                >
                  Join
                </button>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  )
}

export default Course
