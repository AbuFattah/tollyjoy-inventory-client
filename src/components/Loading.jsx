import React from "react";
import loadingIcon from "../assets/svg/loadingIcon.svg";
const Loading = () => {
  return (
    <div
      style={{
        zIndex: 1000,
      }}
      className="fixed top-0 left-0 w-full h-full bg-indigo-900 "
    >
      <img
        style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        className="absolute w-36 h-36"
        src={loadingIcon}
        alt=""
      />
    </div>
  );
};

export default Loading;
