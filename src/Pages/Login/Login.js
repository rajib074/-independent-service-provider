import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Form className="login-form">
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
          LOGIN
        </button>
      </Form>

      <button className="btn-google" type="submit">
          google
        </button>
    </div>
  );
};

export default Login;
