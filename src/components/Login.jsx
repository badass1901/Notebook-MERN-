import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { useState } from "react";

const Login = () => {
  const [loginRegisterActive, setLoginRegisterActive] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginRegisterClick = (parameter) => {
    setLoginRegisterActive(parameter);
  };
  const handleRegister = () => {};
  const handleSubmit = async (e) => {
    const host = "http://localhost:5000";
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email, password),
    });
    const json = await response.json();
    console.log(json);
    // console.log(email, password);
  };
  return (
    <div className="container card w-50 p-2 mt-4">
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
              <div className="text-center mb-3">
                <p>Continue with</p>

                <MDBBtn floating className="mx-1">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn floating className="mx-1">
                  <MDBIcon fab icon="google" />
                </MDBBtn>

                <MDBBtn floating className="mx-1">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn floating className="mx-1">
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </div>

              <p className="text-center">or:</p>

              <MDBInput
                className="mb-4"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                id="form7Example1"
                label="Email address"
              />
              <MDBInput
                className="mb-4"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
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

              <MDBBtn type="submit" className="mb-4" block>
                Sign in
              </MDBBtn>

              <div className="text-center">
                <p>
                  Not a member? <a href="#!">Register</a>
                </p>
              </div>
            </form>
          </MDBTabsPane>
          <MDBTabsPane show={loginRegisterActive === "register"}>
            <form onClick={handleRegister}>
              <div className="text-center mb-3">
                <p>Register with</p>

                <MDBBtn floating className="mx-1">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn floating className="mx-1">
                  <MDBIcon fab icon="google" />
                </MDBBtn>

                <MDBBtn floating className="mx-1">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn floating className="mx-1">
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </div>

              <p className="text-center">or:</p>

              <MDBInput className="mb-4" id="form8Example1" label="Name" />
              <MDBInput className="mb-4" id="form8Example2" label="Username" />
              <MDBInput
                className="mb-4"
                type="email"
                id="form8Example3"
                label="Email address"
              />
              <MDBInput
                className="mb-4"
                type="password"
                id="form8Example4"
                label="Password"
              />
              <MDBInput
                className="mb-4"
                type="password"
                id="form8Example5"
                label="Repeat password"
              />

              <MDBCheckbox
                wrapperClass="d-flex justify-content-center mb-4"
                id="form8Example6"
                label="I have read and agree to the terms"
                defaultChecked
              />

              <MDBBtn type="submit" className="mb-4" block>
                Register
              </MDBBtn>
            </form>
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
    </div>
  );
};

export default Login;
