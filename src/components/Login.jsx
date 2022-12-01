import React, { useState } from "react";
import { message } from "antd";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // States
  const [loginRegisterActive, setLoginRegisterActive] = useState("login");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rEmail: "",
    rPassword: "",
    rRepeatPassword: "",
    rName: "",
  });
  let navigate = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleLoginRegisterClick = (parameter) => {
    setLoginRegisterActive(parameter);
  };

  const host = "http://localhost:5000";

  // Login Here
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    console.log(credentials.email, credentials.password);
    let err = json.error;
    if (json.success) {
      // save the auth token and redirect
      message.success("Logged In Successfully");
      localStorage.setItem("token", json.authToken);
      // console.log(localStorage.getItem("token"));
      navigate("/");
    } else {
      message.error(err);
    }
  };

  // Register HERE

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.rName,
        email: credentials.rEmail,
        password: credentials.rPassword,
      }),
    });

    const json = await response.json();
    console.log(json);
    console.log(credentials.rName, credentials.rEmail, credentials.rPassword);
    let err = json.error;
    if (json.success) {
      // save the auth token and redirect
      message.success("Account Created Succesfully and Logged in...");
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      message.error(err);
    }
  };
  return (
    <div>
      <div className="text-center mt-5  font-monospace ">
        <h1>Welcome to <font className='text-primary'>S</font>ecret <font className='text-primary'>D</font>airy</h1>
        <p className="mt-4">Login or Create a new account to continue</p>
      </div>

      <div className="container card w-75 mt-5">
        <div className="card-body">
          <MDBTabs pills justify className="mb-3">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleLoginRegisterClick("login")}
                active={loginRegisterActive === "login"}
              >
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleLoginRegisterClick("register")}
                active={loginRegisterActive === "register"}
              >
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={loginRegisterActive === "login"}>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  className="mb-4"
                  onChange={onChange}
                  value={credentials.email}
                  type="email"
                  name="email"
                  id="form7Example1"
                  label="Email address"
                />

                <MDBInput
                  className="mb-4"
                  onChange={onChange}
                  type="password"
                  value={credentials.password}
                  name="password"
                  id="form7Example2"
                  label="Password"
                />

                <MDBRow className="mb-4">
                  <MDBCol className="d-flex justify-content-center">
                    <MDBCheckbox
                      id="form7Example3"
                      label="Remember me"
                      defaultChecked
                    />
                  </MDBCol>
                  <MDBCol>
                    <a href="#!">Forgot password?</a>
                  </MDBCol>
                </MDBRow>

                <button
                  type="submit"
                  disabled={
                    (credentials.email === "") | (credentials.password === "")
                  }
                  className="mb-4 btn btn-primary btn-block"
                >
                  Sign in
                </button>
              </form>
            </MDBTabsPane>
            <MDBTabsPane show={loginRegisterActive === "register"}>
              <form onSubmit={handleRegister}>
                <MDBInput
                  className="mb-4"
                  id="form8Example1"
                  label="Full Name"
                  name="rName"
                  onChange={onChange}
                  value={credentials.rName}
                />

                <MDBInput
                  className="mb-4"
                  onChange={onChange}
                  value={credentials.rEmail}
                  type="email"
                  required
                  name="rEmail"
                  label="Email address"
                />
                <MDBInput
                  className="mb-4"
                  onChange={onChange}
                  type="password"
                  minLength={5}
                  value={credentials.rPassword}
                  name="rPassword"
                  label="Password"
                />
                <MDBInput
                  className="mb-4"
                  onChange={onChange}
                  type="password"
                  minLength={5}
                  value={credentials.rRepeatPassword}
                  name="rRepeatPassword"
                  label="Repeat password"
                />

                <MDBCheckbox
                  wrapperClass="d-flex justify-content-center mb-4"
                  id="form8Example6"
                  label="I have read and agree to the terms"
                  defaultChecked
                />

                <button
                  type="submit"
                  disabled={
                    (credentials.rPassword !== credentials.rRepeatPassword) |
                    (credentials.rEmail === "") |
                    (credentials.rName === "") |
                    (credentials.rPassword === "")
                  }
                  className=" btn btn-primary btn-block mb-4"
                >
                  Register
                </button>
              </form>
            </MDBTabsPane>
          </MDBTabsContent>
        </div>
      </div>
    </div>
  );
};

export default Login;
