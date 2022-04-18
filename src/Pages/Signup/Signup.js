import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }

  const handleSignup = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <Form onSubmit={handleSignup} className="signup-form">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter your name"
          required
        ></input>

        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter your email"
          required
        ></input>

        <label for="exampleInputEmail1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          required
        ></input>
        <button className="btn-control" type="submit">
          SIGNUP
        </button>
      </Form>
      <div className="signup-google">
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>{" "}
        </p>

        <button className="btn-google" type="submit">
          Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
