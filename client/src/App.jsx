import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Registration from "./pages/Registration"
import Dashboard from "./pages/Dashboard"
import AppLayout from "./components/AppLayout"
import Courses from "./pages/Courses"
import Instructors from "./pages/Instructors"
import Course from "./pages/Course"
import UserCourse from "./pages/UserCourse"
import Assistant from "./pages/Assistant"
import StudentsFeedback from "./pages/StudentsFeedback"
import Instructor from "./pages/Instructor"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:courseId" element={<UserCourse />} />
          <Route
            path="/dashboard/:courseId/students-feedback"
            element={<StudentsFeedback />}
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<Course />} />
          <Route
            path="/courses/:courseId/students-feedback"
            element={<StudentsFeedback />}
          />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/:instructorId" element={<Instructor />} />
          <Route path="/assistant" element={<Assistant />} />
        </Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </Router>
  )
}

export default App
