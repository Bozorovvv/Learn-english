import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ userName }) {
  const [activeLink, setActiveLink] = useState("learning");
  return (
    <div
      className="container-fluid shadow p-3 mb-5 bg-white rounded"
      style={{ height: "10vh" }}
    >
      <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/welcome"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <i className="bi bi-box mx-2"></i>
          <h5>Learnglish</h5>
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link
              to={userName ? "/learning" : "/"}
              onClick={() => setActiveLink("learning")}
              className={`nav-link px-2 link-${
                activeLink === "learning" ? "info" : "dark"
              }`}
            >
              Learning
            </Link>
          </li>
          <li>
            <Link
              to={userName ? "/dictionary" : "/"}
              onClick={() => setActiveLink("dictionary")}
              className={`nav-link px-2 link-${
                activeLink === "dictionary" ? "info" : "dark"
              }`}
            >
              Dictionary
            </Link>
          </li>
          <li>
            <Link
              to={userName ? "/statistics" : "/"}
              onClick={() => setActiveLink("statistics")}
              className={`nav-link px-2 link-${
                activeLink === "statistics" ? "info" : "dark"
              }`}
            >
              Statistics
            </Link>
          </li>
          <li>
            <Link
              to={userName ? "/settings" : "/"}
              onClick={() => setActiveLink("settings")}
              className={`nav-link px-2 link-${
                activeLink === "settings" ? "info" : "dark"
              }`}
            >
              Settings
            </Link>
          </li>
        </ul>

        {!userName && (
          <React.Fragment>
            <div className="col-md-3 text-end">
              <Link
                to="/login"
                type="button"
                className="btn btn-outline-info me-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                type="button"
                className="btn btn-outline-info"
              >
                Register
              </Link>
            </div>
          </React.Fragment>
        )}
        {userName && (
          <React.Fragment>
            <div className="col-md-3 text-end">
              <h5 className="text-secondary m-2 d-inline">{userName}</h5>
              <Link
                to="/logout"
                type="button"
                className="btn btn-outline-info text-secondary"
              >
                Logout
              </Link>
            </div>
          </React.Fragment>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
