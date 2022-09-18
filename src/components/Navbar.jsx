import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg bg-info navbar-dark ">
        {/* <!-- Container wrapper --> */}
        <div class="container-fluid">
          {/* <!-- Navbar brand --> */}
          <Link class="navbar-brand" to="/">
            Brand
          </Link>

          {/* <!-- Toggle button --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* 
        <!-- Link --> */}
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
            </ul>

            {/* <!-- Icons --> */}
            <ul class="navbar-nav d-flex flex-row me-1">
              <li class="nav-item me-3 me-lg-0">
                <Link class="nav-link" to="#">
                  <i class="fas fa-shopping-cart"></i>
                </Link>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <Link class="nav-link" to="#">
                  <i class="fab fa-twitter"></i>
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
