import { toast } from "react-toastify";
import { MdEmail as EmailIcon } from "react-icons/md";

import loadingIcon from "../assets/svg/loadingIcon.svg";
import Header from "../components/Header";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

// COMPONENT
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  // FORMIK
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async ({ email }) => {
      await sendPasswordResetEmail(email);
      toast.success("Reset Link sent");
      navigate(-1);
    },
  });

  return (
    <section className="welcome-area">
      <Header />
      <div className="my-container  h-full flex items-center justify-center pt-40 md:pt-0">
        <div
          className="my-container  flex flex-col md:flex-row justify-center items-center gap-20 md:gap-40 "
          style={{
            position: "relative",
            zIndex: 200,
          }}
        >
          {/* FORM START */}
          <div>
            <form
              onSubmit={formik.handleSubmit}
              style={{
                position: "relative",
                zIndex: 200,
              }}
              className="max-w-[600px] bg-white p-5 text-black rounded-lg"
            >
              <h1 className="text-3xl text-center font-semibold ">
                Reset Password
              </h1>
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

              <button
                disabled={sending}
                className="btn w-full bg-blue"
                type="submit"
              >
                {sending ? (
                  <img src={loadingIcon} alt="loading" />
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
            <Link
              to="/"
              className=" block font-semibold cursor-pointer text-center my-5 text-white text-lg"
            >
              Cancel
            </Link>
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

export default ForgotPassword;
