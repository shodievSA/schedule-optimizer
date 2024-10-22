import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom" 
import Registration from "./pages/Registration"
import Dashboard from "./pages/Dashboard"
import AppLayout from "./components/AppLayout"
import Courses from "./pages/Courses"
import Instructors from "./pages/Instructors"
import Course from "./pages/Course"
import UserCourse from "./pages/UserCourse"

function App() {
    return (
        <Router>
            <Routes>
              <Route element={<AppLayout />}>
                  <Route index element={<Navigate replace to="/dashboard" />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/:courseId" element={<Course />} />
                  <Route path="/user-course/:courseId" element={<UserCourse />} />
                  <Route path="/instructors" element={<Instructors />} />
              </Route>
              <Route path="/registration" element={<Registration />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
