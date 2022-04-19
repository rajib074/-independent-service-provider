import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Google from "../Google/Google";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, ] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateSignup = (event) => {
    navigate("/signup");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          ref={emailRef}
          placeholder="Enter your email"
          required
        ></input>

        <label htmlFor="exampleInputEmail1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          ref={passwordRef}
          placeholder="Enter password"
          required
        ></input>
        <button className="btn-control" type="submit">
          LOGIN
        </button>
      </Form>
      <div className="login-google">
        <p>
          New to Genius Car?{" "}
          <Link
            to="/signup"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateSignup}
          >
            Please Signup
          </Link>{" "}
        </p>

        <Google></Google>
      </div>
    </div>
  );
};

export default Login;
