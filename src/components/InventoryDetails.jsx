import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";

const InventoryDetails = () => {
  const [details, setDetails] = useState({});
  const restockRef = useRef();
  const [showRestock, setShowRestock] = useState(false);
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

  const handleRestock = (e) => {
    e.preventDefault();
    // if (quantity === 0) {
    //   toast.error("Product out of stock");
    //   return;
    // }
    try {
      fetch(`http://localhost:5000/restock/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantity: parseInt(restockRef.current.value),
        }),
      });
      setDetails((prevState) => {
        return {
          ...prevState,
          quantity: +prevState.quantity + +restockRef.current.value,
        };
      });
      toast.success("Stock updated");
    } catch (err) {
      toast.error("stock update failed");
    }
  };

  return (
    <>
      <Header type="static" className={"text-black shadow-lg"} />
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
              {/* go back link */}
              <Link to="/" className="text-blue font-semibold block">
                Go Home
              </Link>
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
              <div className="card-actions justify-end items-center">
                {showRestock && (
                  <>
                    <form
                      onSubmit={handleRestock}
                      className="flex flex-1 gap-3"
                    >
                      <input
                        ref={restockRef}
                        type="number"
                        className=" border-2 p-2 flex-1"
                        placeholder="100"
                        required
                      />
                      <button type="submit" className="btn bg-blue">
                        Restock
                      </button>
                    </form>
                    <button
                      className="btn btn-outline"
                      onClick={() => {
                        setShowRestock((prevState) => !prevState);
                      }}
                    >
                      Cancel
                    </button>
                  </>
                )}

                {!showRestock && (
                  <>
                    <button
                      className="btn bg-blue"
                      onClick={() => {
                        setShowRestock((prevState) => !prevState);
                      }}
                    >
                      Restock
                    </button>

                    <button
                      onClick={() => {
                        handleDelivered();
                      }}
                      className="btn bg-blue"
                    >
                      Delivered
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryDetails;
