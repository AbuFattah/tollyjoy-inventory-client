import { Link } from "react-router-dom";
import { ImPlay2 as PlayIcon } from "react-icons/im";
import { RiMenu2Fill as MenuIcon } from "react-icons/ri";

const Banner = () => {
  return (
    <section className="banner ">
      <header className="shadow-sm font-nunito py-3 absolute  top-0 left-0 w-full">
        <div className="my-container flex justify-between items-center text-white font-semibold">
          <p className="logo text-4xl ">
            <span className="text-red-300">Tollyjoy</span> Inventory
          </p>
          <nav style={{ zIndex: 120 }}>
            <ul className="absolute left-0 top-[96px]  w-full md:flex md:static gap-4 text-xl">
              <Link to="/">
                <li className="text-center">Home</li>
              </Link>
              <li className="text-center">About</li>
              <li className="text-center">Items</li>
              <li className="text-center">Login</li>
            </ul>
          </nav>
          <MenuIcon className=" md:hidden text-2xl cursor-pointer" />
        </div>
      </header>

      <div className="my-container h-full flex items-center text-white gap-40">
        <div className="max-w-[600px] " style={{ zIndex: 100 }}>
          <h1 className="text-7xl font-semibold text-white  mb-10">
            Manage inventory with ease!
          </h1>
          <p className="text-lg">
            With our state of the art inventory management system for baby
            products, you don't have worry about your stock anymore.
          </p>
          <button className="btn bg-transparent border border-white mt-5">
            Get Started
          </button>
        </div>
        <div className="play-button  cursor-pointer" style={{ zIndex: 100 }}>
          <PlayIcon className="text-7xl play-btn" />
        </div>
      </div>
      <div className="shape-bottom absolute left-0 -bottom-1 w-full">
        <svg
          viewBox="0 0 1446 523"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1445 293.584C986.041 436.622 458.358 525.465 387.5 521.896C207.772 521.896 86.5296 140.293 1 2V521.896H1445"
            stroke="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
