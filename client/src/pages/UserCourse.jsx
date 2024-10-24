import { useRef, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom"
import styles from "./UserCourse.module.css"

export default function UserCourse() {

    const [withdrawConfirmed, setWithdrawConfirmed] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [emailPassword, setEmailPassword] = useState("");

    const { courseId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const modalRef = useRef(null);

    const {

        course,
        section,
        title,
        instructor,
        credit_hours,
        term,
        course_description,
        days,
        times

    } = location.state;

    async function withdrawCourse() {

        let res = await fetch("http://localhost:3000/api/v1/delete-user-course", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                courseId,
                userEmail,
                emailPassword
            })
        });

        if (res.ok) {

            navigate("/dashboard");

        }

    }

    return (
        <div className={styles["page-container"]}>
            <div>
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
                <div className={styles["course-description"]}>
                <h1>{course}</h1>
                <p>{course_description}</p>
                </div>
            </div>
            <div className={styles["course-schedule"]}>
                <h1>
                Days: <b>{days}</b>
                </h1>
                <h1>
                Times: <b>{times}</b>
                </h1>
            </div>
            <button 
            className={styles["withdraw-course-button"]}
            onClick={() => modalRef.current.showModal()}
            >
                Withdraw Course
            </button>
            <dialog className={styles['modal-window']} ref={modalRef}>
                <div className="modal-box p-10">
                    {
                        withdrawConfirmed ? (
                            <>
                                <form method="dialog">
                                    <button 
                                    className="btn btn-circle btn-ghost absolute right-4 top-4 text-xl"
                                    onClick={() => setWithdrawConfirmed(false)}
                                    >✕</button>
                                </form>
                                <h3 className="font-bold text-2xl">Please prove your identity</h3>
                                <div className={styles['user-credentials']}>
                                    <label className="input input-lg input-bordered flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-6 w-6 opacity-70">
                                            <path
                                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                            <path
                                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                        </svg>
                                        <input 
                                        type="text" 
                                        className="grow" 
                                        placeholder="Webster Email" 
                                        value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        />
                                    </label>
                                    <label className="input input-lg input-bordered flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-6 w-6 opacity-70">
                                            <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
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
                                    className="btn btn-lg btn-neutral w-full"
                                    onClick={withdrawCourse}
                                    >Confirm</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <form method="dialog">
                                    <button 
                                    className="btn btn-circle btn-ghost absolute right-4 top-4 text-xl"
                                    onClick={() => setWithdrawConfirmed(false)}
                                    >✕</button>
                                </form>
                                <h3 className="font-bold text-3xl">Important!</h3>
                                <p className="py-4 text-2xl">
                                    Are you sure you want to withdraw this course? Keep in mind
                                    that you <b>will not</b> be able to take this course once you
                                    withdraw it.
                                </p>
                                <div className="modal-action">
                                    <button 
                                    className="btn btn-lg btn-neutral w-full"
                                    onClick={() => setWithdrawConfirmed(true)}
                                    >Withdraw</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </dialog>
        </div>
    );

}
