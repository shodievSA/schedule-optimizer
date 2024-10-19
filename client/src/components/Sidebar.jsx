import { NavLink } from "react-router-dom"
import {
  HiOutlineAcademicCap,
  HiOutlineBookmark,
  HiOutlineHome,
} from "react-icons/hi"
import styles from "./Sidebar.module.css"

function Sidebar() {
  return (
    <div className="flex flex-col gap-8 px-3 py-4 border-r border-gray-200">
      <img src="../../public/logo.png" alt="Webster Logo" />
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink to="/dashboard" className={styles["sidebar__nav--link"]}>
              <HiOutlineHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={styles["sidebar__nav--link"]}>
              <HiOutlineBookmark />
              <span>Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors" className={styles["sidebar__nav--link"]}>
              <HiOutlineAcademicCap />
              <span>Instructors</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
