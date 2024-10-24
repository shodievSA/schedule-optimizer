import { useNavigate, useLocation } from "react-router-dom";
import StudentFeedbackComment from "../components/StudentFeedbackComment"
import { IoIosArrowBack } from "react-icons/io";

export default function StudentsFeedback() {

    const navigate = useNavigate();
    const location = useLocation();

    const { course } = location.state;

    return (
        <div className="flex flex-col gap-y-12 pb-12">
            <div className="flex gap-x-16 items-center">
                <div className="tooltip" data-tip={course}>
                    <IoIosArrowBack 
                    className="text-5xl" 
                    onClick={() => navigate(-1)}
                    />
                </div>
                <h1 className="text-3xl font-semibold">Students Feedback</h1>
            </div>
            <div className="flex flex-col gap-y-10">
                {
                    Array.from({ length: 10 }).map((_, index) => (
                        <StudentFeedbackComment key={index} />
                    ))
                }
            </div>
        </div>
    )
}
