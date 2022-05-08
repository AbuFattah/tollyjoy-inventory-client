import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/images/error.jpg";
import Header from "../components/Header";
const NotFound = () => {
  return (
    <>
      <Header type="static" className={"text-black shadow-lg"} />
      <div
        style={{
          minHeight: "calc(100vh - 96px - 224px)",
        }}
        className="my-container"
      >
        <div className="flex gap-5">
          <img
            width="200px"
            src={errorImg}
            alt="error image"
            className="hidden md:block flex-1 rounded-md"
          />
          <div className="space-y-3 flex-1 flex flex-col justify-center">
            <h1 className="text-8xl font-nunito font-semibold">404</h1>
            <p className="text-3xl">UH OH! You're lost.</p>
            <p>
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.
            </p>
            <Link to="/" className="btn btn-primary w-[100px]">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
