import React from "react";

const InventoryItem = ({
  details: { price, quantity, description, supplier, imageUrl, name },
}) => {
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt="product image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <strong className="card-title text-blue">Tk {price}</strong>

        <p className="font-semibold text-sm">
          <span className="text-gray-500 ">Quantity:</span> {quantity}
        </p>
        <p className="font-semibold text-sm">
          <span className="text-gray-500 ">Supplier:</span> {supplier}
        </p>
        <div className="">
          <button className="btn bg-black w-full">Manage Stock</button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
