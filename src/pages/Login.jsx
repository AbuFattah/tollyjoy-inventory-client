import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { MdEmail as EmailIcon } from "react-icons/md";
import { FaUser as UserIcon } from "react-icons/fa";
import { AiFillLock as LockIcon } from "react-icons/ai";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

const Login = () => {
  return (
    <section className="welcome-area">
      <Header />
      <div className="my-container h-full">
        <div className="my-container h-full flex items-center gap-40">
          <div className="max-w-[600px] text-white" style={{ zIndex: 100 }}>
            <h1 className="text-7xl font-semibold text-white  mb-10">
              Welcome Back!
            </h1>
            <p className="text-lg">
              With our state of the art inventory management system for baby
              products, you don't have worry about your stock anymore.
            </p>
          </div>
          {/* FORM START */}
          <div>
            <form
              style={{
                position: "relative",
                zIndex: 200,
              }}
              className=" flex-1 max-w-[600px] bg-white p-5 text-black rounded-lg"
            >
              <h1 className="text-4xl text-center font-semibold ">Sign In</h1>
              <div className="form-group flex h-[50px] my-5  rounded-sm ">
                <div className="input-icon bg-gray-300 flex items-center justify-center px-3 border border-gray-400 ">
                  <EmailIcon className="p-0 text-2xl text-gray-700 " />
                </div>
                <input
                  required
                  placeholder="Email"
                  className="px-4 focus:outline-none w-[250px]  shadow flex-auto"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="form-group flex h-[50px] my-5  rounded-sm ">
                <div className="input-icon bg-gray-300 flex items-center justify-center px-3 border border-gray-400 ">
                  <LockIcon className="p-0 text-2xl text-gray-700 " />
                </div>
                <input
                  required
                  placeholder="Password"
                  className="px-4 focus:outline-none w-[250px] shadow flex-auto"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <input
                className="btn w-full bg-blue"
                type="submit"
                value="Sign In"
              />
              {/* Line */}
              <div className="line w-full h-[1px] my-5 bg-gray-300"></div>
              <button className="btn w-full flex justify-evenly">
                <GoogleIcon className="text-2xl" />
                <p>Continue With Google</p>
              </button>
              <p className="my-4 text-center">
                Don't have an account?{" "}
                <Link className="text-blue mt-4" to="/signup">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="shape-bottom absolute left-0 -bottom-1 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L60,128C120,160,240,224,360,224C480,224,600,160,720,144C840,128,960,160,1080,192C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Login;
