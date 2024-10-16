import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // export
import Registration from './pages/Registration'; // export default

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/registration' element={<Registration />}></Route>
            </Routes>
        </Router>
    )
}

export default App
