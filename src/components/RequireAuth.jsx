import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase.config";
import SignIn from "../pages/SignIn";

const RequireAuth = ({ children }) => {
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <p>...loading</p>;
  }
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
