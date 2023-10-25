
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar bg-warning">
            <Link className="navbar-brand mx-3" to="/">CRUD operations</Link>
            <div className="nav">
                <Link className="nav-link" to="/create-student">Create Student</Link>
                <Link className="nav-link" to="/student-list">Student List</Link>
            </div>
        </nav>
    )
}