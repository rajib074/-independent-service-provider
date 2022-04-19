import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";
import "./Google.css"

const Google = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading) {
    return <Loading></Loading>;

  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <button className="google_btn" onClick={() => signInWithGoogle()}>GOOGLE</button>
    </div>
  );
};

export default Google;
