import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import InventoryItem from "../components/InventoryItem";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
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
        </div>
      </section>
    </>
  );
};

export default Home;
