import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Fill as MenuIcon } from "react-icons/ri";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
const Header = ({ classes }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <header
      className={`${classes} absolute  top-0 left-0 w-full shadow-sm font-nunito py-3`}
    >
      <div className="my-container flex justify-between items-center text-white font-semibold">
        <p className="logo text-4xl ">
          <span className="text-red-300">Tollyjoy</span> Inventory
        </p>
        <nav style={{ zIndex: 120 }}>
          <ul
            className={`absolute ${
              show ? "left-0" : "left-[-100%]"
            } top-[96px] bg-gradient w-full md:flex md:static gap-4 text-xl sm:space-y-4 md:space-y-0 duration-300 ease-in-out items-center`}
          >
            <Link to="/">
              <li className="text-center">Home</li>
            </Link>
            <li className="text-center">About</li>
            <li className="text-center">Items</li>
            <Link to="/login">
              <li className="text-center">Login</li>
            </Link>
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
