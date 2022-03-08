import React from "react";
import "../styling/Nav.css";

function Nav({ currentPage, handlePageChange }) {
  const style = {
    link: {
      color: "white"
      // font-weight: "bolder",
    }
  }
  return (
    <>
      <div className="col-12 m-1">
        <div className="row justify-content-between">
          <h2 className="col-3 p-3 mx-3" id="header-name">Leslie Patino</h2>
          <ul className="nav col-8 p-2 mx-3">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={currentPage === "About" ? "nav-link active" : "nav-link"}
                style={style.link}
              >
                About Me
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
                style={style.link}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
                style={style.link}
              >
                Contact Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
                style={style.link}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;