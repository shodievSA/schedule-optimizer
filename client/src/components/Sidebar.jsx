import { useRef } from "react"
import { NavLink } from "react-router-dom"
import {
  HiOutlineAcademicCap,
  HiOutlineBookmark,
  HiOutlineHome,
} from "react-icons/hi"
import { IoExitOutline } from "react-icons/io5"
import { RiRobot2Line } from "react-icons/ri"
import styles from "./Sidebar.module.css"

function Sidebar() {

  const dialogWindowRef = useRef(null);

  return (
    <div className={styles['sidebar']}>
      <img src="/assets/logo.png" alt="Webster Logo" />
      <nav className="grow">
        <ul className="flex flex-col h-full gap-6">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `${styles["sidebar__nav--link"]} ${styles["active"]}`
                  : styles["sidebar__nav--link"]
              }
            >
              <HiOutlineHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? `${styles["sidebar__nav--link"]} ${styles["active"]}`
                  : styles["sidebar__nav--link"]
              }
            >
              <HiOutlineBookmark />
              <span>Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) =>
                isActive
                  ? `${styles["sidebar__nav--link"]} ${styles["active"]}`
                  : styles["sidebar__nav--link"]
              }
            >
              <HiOutlineAcademicCap />
              <span>Instructors</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/assistant"
              className={({ isActive }) =>
                isActive
                  ? `${styles["sidebar__nav--link"]} ${styles["active"]}`
                  : styles["sidebar__nav--link"]
              }
            >
              <RiRobot2Line />
              <span>Assistant</span>
            </NavLink>
          </li>
          <li className="pb-6 mt-auto">
            <button 
            className={styles['logout-button']}
            onClick={() => dialogWindowRef.current.showModal()}
            >
                <IoExitOutline />
                <span>Log out</span>
            </button>
          </li>
        </ul>
      </nav>
      <dialog 
      className="modal backdrop-blur-2xl" 
      ref={dialogWindowRef}
      style={{ overflowY: "hidden !important" }}
      >
        <div className="modal-box p-10 flex flex-col gap-y-4">
          <form method="dialog">
              <button 
              className="btn btn-circle btn-ghost absolute right-4 top-4 text-xl"
              >✕</button>
          </form>
          <h1 className="font-bold text-3xl text-center">Important!</h1>
          <p className="py-4 text-2xl text-center">
              Are you sure you want to logout from your account?
          </p>
          <button 
          className="btn btn-lg btn-secondary w-full text-white"
          >Confirm</button>
        </div>
      </dialog>
    </div>
  )
}

export default Sidebar
