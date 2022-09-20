import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Navbar brand --> */}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

            {/* <!-- Icons --> */}
            <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item me-3 me-lg-0">
                <Link className="nav-link" to="#">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <Link className="nav-link" to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
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
