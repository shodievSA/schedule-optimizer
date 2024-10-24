import { Outlet } from "react-router-dom"
import Container from "./Container"
import Sidebar from "./Sidebar"

function AppLayout() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="ml-[15rem] w-[calc(100%-15rem)] px-20 py-12 h-full">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  )
}

export default AppLayout
