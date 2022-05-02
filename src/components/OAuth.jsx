import { toast } from "react-toastify";

import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import loadingIcon from "../assets/svg/loadingIcon.svg";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";

const OAuth = ({ text }) => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };

  if (user) {
    navigate("/");
  }
  if (error) {
    toast.error(error.message);
  }
  return (
    <button
      onClick={handleSignInWithGoogle}
      className="btn w-full flex justify-evenly"
    >
      {loading ? (
        <img src={loadingIcon} alt="loading" />
      ) : (
        <>
          <GoogleIcon className="text-2xl" />
          <p>{text}</p>
        </>
      )}
    </button>
  );
};

export default OAuth;
