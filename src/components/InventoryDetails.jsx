import React from "react";

const InventoryDetails = () => {
  return (
    <div>
      <div className="my-container">
        <div
          style={{
            display: "flex",
          }}
          className="flex  shadow-xl max-w-[1000px] mx-auto rounded-lg"
        >
          <figure
            style={{
              flexBasis: "400px",
              flex: "1",
            }}
          >
            <img src="https://i.ibb.co/Mfr9qtk/baby-bib.jpg" alt="Movie" />
          </figure>
          <div style={{ flex: "1" }} className="p-10 space-y-6">
            <p className="text-gray-600 text-sm font-bold">
              supplier: <span className="mb-4">Tollyjoy</span>
            </p>
            <h2 className="card-title text-3xl">Tollyjoy Baby Bib</h2>
            <p className="text-gray-600 text-lg font-bold">
              Price: <span className="">Tk 200</span>
            </p>
            <p className="text-gray-600 text-lg font-bold">
              Stock: <span className="">500</span>
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-blue">Delivered</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
