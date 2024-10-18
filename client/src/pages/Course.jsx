import { useParams } from "react-router-dom"

function Course() {
  const { courseId } = useParams()

  return <div>Course {courseId}</div>
}

export default Course
