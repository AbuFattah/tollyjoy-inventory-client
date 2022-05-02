import React from "react";

const InventoryItem = ({
  details: { price, quantity, description, supplier, image, name },
}) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="product image" />
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
        <div className="card-actions justify-end">
          <button className="btn bg-blue">Manage Stock</button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
