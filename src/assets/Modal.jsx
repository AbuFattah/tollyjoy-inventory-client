import React from "react";
import ReactDom from "react-dom";
const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div
      style={{
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
      className="fixed top-0 left-0 right-0 bottom-0  flex items-center justify-center"
    >
      <div className="w-9/12 max-w-[500px] p-3 rounded-md py-6 bg-white">
        {children}
        {/* <p className="text-xl">Are You Sure?</p>
        <div className="text-right space-x-2">
          <button className="btn btn-error btn-sm">Yes</button>
          <button onClick={onClose} className="btn btn-primary btn-sm">No</button>
        </div> */}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
