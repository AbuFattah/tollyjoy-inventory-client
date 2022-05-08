import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../assets/Modal";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import InventoryItem from "../components/InventoryItem";
import Loading from "../components/Loading";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/featuredProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Banner />;
      <section>
        <div className="my-container ">
          <h1 className="text-5xl text-black my-6 font-semibold text-center ">
            Inventory Items
          </h1>
          <div className="line w-[50px] h-[5px] bg-blue mx-auto my-4 mb-10"></div>

          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {products.map((product) => (
              <InventoryItem key={Math.random().toString()} details={product} />
            ))}
          </div>

          <Link
            to="manage-inventories"
            className="text-xl font-semibold block mx-auto bg-blue text-white rounded-md p-3 w-[300px] text-center my-10"
          >
            Manage Inventories
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
