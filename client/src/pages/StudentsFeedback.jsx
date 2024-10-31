import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import StudentFeedbackComment from "../components/StudentFeedbackComment"
import { IoIosArrowBack } from "react-icons/io";
import styles from "./StudentsFeedback.module.css"

export default function StudentsFeedback() {

    const [feedback, setFeedback] = useState("");
    const [serverMessage, setServerMessage] = useState(null);
    const [isFeedbackBeingSubmitted, setIsFeedbackBeingSubmitted] = useState(false);
    const [studentFeedbacks, setStudentFeedbacks] = useState([]);
    const [rating, setRating] = useState(2);

    const navigate = useNavigate();
    const location = useLocation();
    const { courseId } = useParams();

    const { course } = location.state;

    const feedbackModalRef = useRef(null);

    async function submitStudentFeedback() {

        setIsFeedbackBeingSubmitted(true);

        let res = await fetch(`http://localhost:3000/api/v1/courses/${courseId}/student-feedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ feedback, rating })
        })

        let data = await res.json();

        setServerMessage(data.message);
        setIsFeedbackBeingSubmitted(false);

    }

    useEffect(() => {

        async function getStudentFeedbacks() {

            let res = await fetch(`http://localhost:3000/api/v1/course-feedback/${courseId}`);
            let data = await res.json();
    
            setStudentFeedbacks(data.data['student_feedbacks']);
    
        }

        getStudentFeedbacks();

    }, []);

    return (
        <div className="flex flex-col gap-y-12 h-full">
            <div className="flex justify-between items-center">
                <div className="flex gap-x-16 items-center">
                    <div className="tooltip" data-tip={course}>
                        <IoIosArrowBack
                        className="text-5xl"
                        onClick={() => navigate(-1)}
                        />
                    </div>
                    <h1 className="text-3xl font-semibold">Students Feedback</h1>
                </div>
                <div>
                    <button 
                    className="btn btn-lg btn-secondary text-white"
                    onClick={() => feedbackModalRef.current.showModal()}
                    >
                        Leave Feedback
                    </button>
                </div>
            </div>
            {
                studentFeedbacks.length > 0 ? (
                    <div className="flex flex-col gap-y-10 pb-12">
                        {
                            studentFeedbacks.map((student_feedback, index) => {
                                return (
                                    <StudentFeedbackComment 
                                    key={index} 
                                    text={student_feedback['student_feedback']} 
                                    rating={student_feedback['rating']}
                                    student_name={student_feedback['student_name']}
                                    student_status={student_feedback['student_status']}
                                    />
                                )
                            })
                        }
                    </div>
                ) : (
                    <div className="flex grow justify-center items-center">
                        <h1 className="text-4xl">
                            This course does not have any student feedback yet
                        </h1>
                    </div>
                )
            }
            <dialog 
            className={styles['modal-window']} 
            ref={feedbackModalRef}
            >
                {
                    serverMessage === null ? (
                        <div 
                        className="modal-box w-6/12 max-w-4xl h-full flex flex-col items-center gap-y-12 px-12 pb-10"
                        >
                            <form method="dialog">
                                <button 
                                className="btn btn-lg btn-circle btn-ghost absolute right-4 top-4"
                                onClick={() => {
                                        setFeedback("");
                                        setRating(2);
                                    }
                                }
                                >✕</button>
                            </form>
                            <h1 className="font-semibold text-center text-4xl">
                                Feedback Form
                            </h1>
                            <div className="flex flex-col grow w-full items-center gap-y-8">
                                <textarea
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="textarea textarea-lg textarea-bordered w-11/12 grow resize-none"
                                placeholder="Type your course feedback here">
                                </textarea>
                                <div className="rating rating-lg flex gap-x-2">
                                    <input
                                    type="radio"
                                    name="rating-8"
                                    className="mask mask-star-2 bg-orange-400"
                                    onChange={() => setRating(1)}
                                    />
                                    <input
                                    type="radio"
                                    name="rating-8"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked
                                    onChange={() => setRating(2)}
                                    />
                                    <input
                                    type="radio"
                                    name="rating-8"
                                    className="mask mask-star-2 bg-orange-400"
                                    onChange={() => setRating(3)}
                                    />
                                    <input
                                    type="radio"
                                    name="rating-8"
                                    className="mask mask-star-2 bg-orange-400"
                                    onChange={() => setRating(4)}
                                    />
                                    <input
                                    type="radio"
                                    name="rating-8"
                                    className="mask mask-star-2 bg-orange-400"
                                    onChange={() => setRating(5)}
                                    />
                                </div>
                                <button
                                className="btn btn-lg btn-wide btn-secondary text-white"
                                onClick={submitStudentFeedback}
                                >
                                    {
                                        isFeedbackBeingSubmitted
                                        ? <span className="loading loading-spinner loading-md"></span>
                                        : "Submit Feedback"
                                    }
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="modal-box h-2/5 flex flex-col justify-center px-10">
                            <form method="dialog">
                                <button 
                                className="btn btn-md btn-circle btn-ghost absolute right-4 top-4 btn-secondary text-white"
                                onClick={() => {
                                        setServerMessage(null);
                                        setFeedback("");
                                        setRating(2);
                                        window.location.reload();
                                    }
                                }
                                >✕</button>
                            </form>
                            <p className="text-2xl font-medium text-center">
                                { serverMessage }
                            </p>
                        </div>
                    )
                }
            </dialog>
        </div>
    )
}
