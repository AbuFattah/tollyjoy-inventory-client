import { ToastContainer, toast } from "react-toastify";
import { MdEmail as EmailIcon } from "react-icons/md";
import { FaUser as UserIcon } from "react-icons/fa";
import { AiFillLock as LockIcon } from "react-icons/ai";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import loadingIcon from "../assets/svg/loadingIcon.svg";
import Header from "../components/Header";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import OAuth from "../components/OAuth";

// COMPONENT
const SignIn = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let path = location.state?.from || "/";
  console.log(path);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // FORMIK
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Must be atleast 6 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: ({ email, password }) => {
      signInWithEmailAndPassword(email, password);
      // toast.success("Login Successful");
      // await createUserWithEmailAndPassword(values.email, values.password);
      // await updateProfile({ displayName: formik.values.name });
    },
  });

  if (user) {
    toast.success("Login Successful");
    navigate(path, { replace: true });
  }

  return (
    <section className="welcome-area">
      <Header type="absolute" />
      <div className="my-container  h-full flex items-center justify-center pt-40 md:pt-0">
        <div className="my-container  flex flex-col md:flex-row  items-center gap-20 md:gap-40 ">
          <div
            className="max-w-[600px] w-full text-white"
            style={{ zIndex: 100 }}
          >
            <h1 className="text-5xl md:text-7xl font-semibold  text-white  mb-10">
              Welcome Back!
            </h1>
            <p className="text-lg">
              With our state of the art inventory management system for baby
              products, you don't have worry about your stock anymore.
            </p>
          </div>
          {/* FORM START */}
          <div className="flex-1">
            <form
              onSubmit={formik.handleSubmit}
              style={{
                position: "relative",
                zIndex: 200,
              }}
              className="max-w-[600px] bg-white p-5 text-black rounded-lg"
            >
              <h1 className="text-4xl text-center font-semibold ">Sign In</h1>
              {error && (
                <p className="text-error text-center my-4">
                  {"Something went wrong"}
                </p>
              )}
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}

              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
              <button
                disabled={loading}
                className="btn w-full bg-blue"
                type="submit"
              >
                {loading ? <img src={loadingIcon} alt="loading" /> : "Sign In"}
              </button>
              <Link
                to="/forgot-password"
                className="block text-center text-blue mt-4"
              >
                Forgot Password?
              </Link>
              {/* Line */}
              <div className="line w-full h-[1px] my-5 bg-gray-300"></div>
              <OAuth text="Sign In with Google" />
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
            fillOpacity="1"
            d="M0,96L60,128C120,160,240,224,360,224C480,224,600,160,720,144C840,128,960,160,1080,192C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default SignIn;
