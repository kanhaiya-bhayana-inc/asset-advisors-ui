import React from "react";
import pic from "../Navbar/newIcon-removebg-preview (1).png";

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    const isLocalStorageNotEmpty = localStorage.getItem('tokena') != null&&localStorage.getItem('tokena').length!=0 ;
    console.log("auth not empty----> " + isLocalStorageNotEmpty)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid rr" style={{ display: "flex" }}>
          <Link className="navbar-brand" to="/">
            <img src={pic} className="img-fluid img1" alt="logo" />
          </Link>

          <button
            className="navbar-toggler dispHB"
            style={{ marginTop: "-35px" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i class="bi bi-list"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
                            </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={isLocalStorageNotEmpty ? "/aldsh" : "/login"}>
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
