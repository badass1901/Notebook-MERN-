import { message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    message.error("User logged out");
    navigate("/login");
  };
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Navbar band --> */}

          <Link className="h" to="/">
            <font size="10" className="p">
              <font className="text-primary">S</font>
              ecret
              <font className="text-primary"> D</font>
              airy
            </font>
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
                <div></div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <div></div>
              </li>
            </ul>

            <ul className="navbar-nav d-flex flex-row justify-content-center">
              <li className="nav-item mx-2 me-lg-0 btn-border">
                {!localStorage.getItem("token") ? (
                  <li className="nav-item mx-2 me-lg-0 btn-border-1">
                    <Link className="px-3 login-btn" role="button" to="/login">
                      Login
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item mx-2 me-lg-0 btn-border-2">
                    <button onClick={handleLogout} className="px-3 logout-btn">
                      Logout
                    </button>
                  </li>
                )}
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
