import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="overflow-x-auto">
      <table className="table border rounded-xl border-slate-200">
        {/* head */}
        <thead className="text-lg text-center text-white bg-gray-400">
          <tr>
            <th>Course</th>
            <th>Section</th>
            <th>Title</th>
            <th>Instructor</th>
            <th>Hours</th>
            <th>Grade</th>
            <th>Campus</th>
            <th>Term</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td className="text-center">COSC 1550</td>
            <td className="text-center">1T</td>
            <td className="text-center">Computer Programming I</td>
            <td className="text-center">Yogesh Kakde</td>
            <td className="text-center">3.00</td>
            <td className="text-center">IP</td>
            <td className="text-center">TASH</td>
            <td className="text-center">FA</td>
            <th>
              <button
                className="btn btn-bg-ghost btn-xs"
                onClick={() => navigate(`/courses/${"1"}`)}
              >
                details
              </button>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <td className="text-center">MATH 1430</td>
            <td className="text-center">9S</td>
            <td className="text-center">College Algebra</td>
            <td className="text-center">Urinboeva</td>
            <td className="text-center">3.00</td>
            <td className="text-center">IP</td>
            <td className="text-center">TASH</td>
            <td className="text-center">FA</td>
            <th>
              <button
                className="btn btn-bg-ghost btn-xs"
                onClick={() => navigate(`/courses/${"2"}`)}
              >
                details
              </button>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <td className="text-center">GLBC 1200</td>
            <td className="text-center">7U</td>
            <td className="text-center">Global Cornerstone Seminar</td>
            <td className="text-center">Kachin Vladimir</td>
            <td className="text-center">3.00</td>
            <td className="text-center">IP</td>
            <td className="text-center">TASH</td>
            <td className="text-center">FA</td>
            <th>
              <button
                className="btn btn-bg-ghost btn-xs"
                onClick={() => navigate(`/courses/${"3"}`)}
              >
                details
              </button>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <td className="text-center">PHIL 2110</td>
            <td className="text-center">8U</td>
            <td className="text-center">Introduction to Ethics</td>
            <td className="text-center">Ashirova Janna</td>
            <td className="text-center">3.00</td>
            <td className="text-center">IP</td>
            <td className="text-center">TASH</td>
            <td className="text-center">FA</td>
            <th>
              <button
                className="btn btn-bg-ghost btn-xs"
                onClick={() => navigate(`/courses/${"4"}`)}
              >
                details
              </button>
            </th>
          </tr>
          {/* row 5 */}
          <tr>
            <td className="text-center">EDEX 1500</td>
            <td className="text-center">8U</td>
            <td className="text-center">Webster 101</td>
            <td className="text-center">Adkhamova Khilola</td>
            <td className="text-center">1.00</td>
            <td className="text-center">A</td>
            <td className="text-center">TASH</td>
            <td className="text-center">F1</td>
            <th>
              <button
                className="btn btn-bg-ghost btn-xs"
                onClick={() => navigate(`/courses/${"5"}`)}
              >
                details
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
