import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "./Spinner"

function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  const isLoading = false
  const isAuthenticated = true

  useEffect(() => {
    if (isLoading && !isAuthenticated) {
      navigate("/login")
    }
  }, [isLoading, isAuthenticated, navigate])

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-slate-100">
        <Spinner />
      </div>
    )

  if (isAuthenticated) return children
}

export default ProtectedRoute
