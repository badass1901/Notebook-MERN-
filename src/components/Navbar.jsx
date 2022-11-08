import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Navbar band --> */}

          <Link className="navbar-brand" to="/">
            Brand
          </Link>

          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto align-items-center mb-2 mb-lg-0">
              {/* 
        <!-- Link --> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav d-flex flex-row justify-content-center">
              <li className="nav-item mx-2 me-lg-0">
                <Link className="px-3 btn btn-danger" role="button" to="/login">
                  Login here
                </Link>
              </li>
              {/* <li className="nav-item mx-2 me-lg-0">
                <Link
                  className="px-3 btn btn-success"
                  role="button"
                  to="/signup"
                >
                  SignUp Here
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
};

export default Navbar;
