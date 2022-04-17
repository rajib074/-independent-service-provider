import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Signup.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.init";

const provider = new GoogleAuthProvider();

const Signup = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

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

      <button className="btn-google" type="submit">
        Google
      </button>
    </div>
  );
};

export default Signup;
