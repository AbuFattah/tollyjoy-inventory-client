import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const InventoryDetails = () => {
  const [details, setDetails] = useState({});
  const { productId } = useParams();
  console.log(productId);
  const { description, imageUrl, price, quantity, supplier, name } = details;
  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${productId}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const handleDelivered = () => {
    if (quantity === 0) {
      toast.error("Product out of stock");
      return;
    }
    try {
      fetch(`http://localhost:5000/inventory/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });
      setDetails((prevState) => {
        return {
          ...prevState,
          quantity: prevState.quantity - 1,
        };
      });
      toast.success("Product delivered");
    } catch (err) {
      toast.error("Product delivery failed");
    }
  };

  return (
    <div>
      <div className="my-container">
        <div className="flex flex-col md:flex-row  shadow-xl max-w-[1000px] mx-auto rounded-lg">
          <figure
            style={{
              flexBasis: "400px",
              flex: "1",
            }}
          >
            <img src={imageUrl} alt="Movie" />
          </figure>
          <div style={{ flex: "1" }} className="p-10 space-y-6">
            {quantity === 0 ? (
              <p className="text-white text-sm font-bold badge badge-primary ">
                Out of stock
              </p>
            ) : (
              <p className="text-white text-sm font-bold badge badge-primary ">
                Available
              </p>
            )}
            <h2 className="card-title text-3xl">{name}</h2>
            <p>{description}</p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="shadow p-2 px-6">
                <p className="text-gray-500 text-center">Supplier:</p>
                <p className="font-bold text-center text-lg">{supplier}</p>
              </div>
              <div className="shadow p-2 px-6">
                <p className="text-gray-500 text-center">Quantity:</p>
                <p className="font-bold text-center text-lg">{quantity}</p>
              </div>
              <div className="shadow p-2 px-6">
                <p className="text-gray-500 text-center">Price:</p>
                <p className="font-bold text-center text-lg">{price} Tk</p>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  handleDelivered();
                }}
                className="btn bg-blue"
              >
                Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
