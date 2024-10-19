import { Outlet } from "react-router-dom"
import Container from "./Container"
import Sidebar from "./Sidebar"

function AppLayout() {
  return (
    <div className="grid grid-cols-[15rem_1fr] h-screen">
      <Sidebar />
      <main className="p-10">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  )
}

export default AppLayout