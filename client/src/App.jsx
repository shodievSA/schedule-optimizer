import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // export
import Registration from './pages/Registration'; // export default

function HomePage() {
    return (
        <h1>This is Home Page</h1>
    )
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/registration' element={<Registration />} />
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default App
