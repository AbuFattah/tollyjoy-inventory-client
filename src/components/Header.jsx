import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu2Fill as MenuIcon } from "react-icons/ri";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
const Header = ({ type, className }) => {
  const [user, loading, error] = useAuthState(auth);
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <header
      className={`${
        type === "absolute" ? "absolute  top-0 left-0 w-full" : ""
      }  shadow-sm font-nunito py-3 ${className ? className : "text-white"}`}
    >
      <div className="my-container flex justify-between items-center  font-semibold">
        <p className="logo text-4xl ">
          <span className="text-red-400">Tollyjoy</span> Inventory
        </p>
        <nav style={{ zIndex: 120 }}>
          <ul
            className={`absolute ${
              show ? "left-0" : "left-[-100%]"
            } top-[96px] bg-gradient w-full md:flex md:static gap-4 text-xl sm:space-y-4 md:space-y-0 duration-300 ease-in-out items-center`}
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
            >
              <li className="text-center">Home</li>
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
            >
              <li className="text-center">Blogs</li>
            </NavLink>
            <NavLink to="/inventory">
              <li className="text-center">Inventory</li>
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to="/manage-items"
                  className={({ isActive }) => (isActive ? "text-red-400" : "")}
                >
                  <li className="text-center">Manage Items</li>
                </NavLink>
                <NavLink
                  to="/my-items"
                  className={({ isActive }) => (isActive ? "text-red-400" : "")}
                >
                  <li className="text-center">My Items</li>
                </NavLink>
                <NavLink
                  to="/add-item"
                  className={({ isActive }) => (isActive ? "text-red-400" : "")}
                >
                  <li className="text-center">Add Item</li>
                </NavLink>
                <a href="" onClick={() => signOut(auth)}>
                  <li className="text-center">Sign Out</li>
                </a>
              </>
            ) : (
              <NavLink
                to="/signin"
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
              >
                <li className="text-center">Sign In</li>
              </NavLink>
            )}
            <CloseIcon
              onClick={toggleShow}
              className="cursor-pointer md:hidden absolute top-3 right-3 text-white"
            />
          </ul>
        </nav>
        <MenuIcon
          onClick={toggleShow}
          className=" md:hidden text-2xl cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
