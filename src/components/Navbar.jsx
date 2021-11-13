import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/welcome"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <i className="bi bi-box"></i> &nbsp;Box
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/learning" className="nav-link px-2 link-primary">
              Learning
            </Link>
          </li>
          <li>
            <Link to="/dictionary" className="nav-link px-2 link-dark">
              Dictionary
            </Link>
          </li>
          <li>
            <Link to="/statistics" className="nav-link px-2 link-dark">
              Statistics
            </Link>
          </li>
          <li>
            <Link to="/settings" className="nav-link px-2 link-dark">
              Settings
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <Link to='/login' type="button" className="btn btn-outline-primary me-2">
            Login
          </Link>
          <Link to='/register' type="button" className="btn btn-primary">
            Register
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
