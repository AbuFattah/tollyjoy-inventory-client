import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import bibImg from "../assets/images/products/baby-bib.jpg";
import TableItem from "../components/TableItem";
const ManageInventories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <Header type="static" className={"text-black shadow-lg"} />
      <div className="my-container">
        <h1 className="text-lg my-2 mb-5">Manage inventories</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  <p>Item Name</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  Supplier
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <TableItem product={product} key={product._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageInventories;
