import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom" // export
import Registration from "./pages/Registration" // export default
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from "./pages/Dashboard"
import AppLayout from "./components/AppLayout"
import Courses from "./pages/Courses"
import Instructors from "./pages/Instructors"
import Course from "./pages/Course"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<Course />} />
          <Route path="/instructors" element={<Instructors />} />
        </Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </Router>
  )
}

export default App
