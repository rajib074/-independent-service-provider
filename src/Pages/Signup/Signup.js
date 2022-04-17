import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <Form className="signup-form">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="email"
          className="form-control"
          id=""
          placeholder="Enter your name"
          required=""
        ></input>

        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id=""
          placeholder="Enter your email"
          required=""
        ></input>

        <label for="exampleInputEmail1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id=""
          placeholder="Enter password"
          required=""
        ></input>
        <button className="btn-control" type="submit">
          SIGNUP
        </button>
      </Form>
    </div>
  );
};

export default Signup;
