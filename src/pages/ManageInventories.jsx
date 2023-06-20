import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Loading from "../components/Loading";
import TableItem from "../components/TableItem";
const ManageInventories = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  const handleModalOpen = () => {
    console.log("inside modal open");
    setModalIsOpen(true);
  };
  const handleDeleteItem = async (id) => {
    try {
      await fetch(
        `https://tollyjoyinventory-devfattah0.b4a.run//products/${id}`,
        {
          method: "DELETE",
        }
      );
      setModalIsOpen(false);
      setProducts((prevState) =>
        prevState.filter((product) => product._id !== id)
      );
      toast.success("Removed item successfully");
    } catch (err) {
      toast.error("Removed item successfully");
    }
  };
  useEffect(() => {
    setLoading(true);
    fetch("https://tollyjoyinventory-devfattah0.b4a.run//products")
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
      <Header type="static" className={"text-black shadow-lg"} />
      <div
        style={{
          minHeight: "calc(100vh - 96px - 224px)",
        }}
        className="my-container"
      >
        <h1 className="text-lg uppercase font-semibold mt-2  text-center">
          Manage inventories
        </h1>
        <div className="line w-[50px] h-[3px] bg-blue mx-auto my-2"></div>
        <div className="text-right">
          <Link to={"/add-new-item"} className="btn btn-sm  my-4">
            Add New Item
          </Link>
        </div>
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
                <TableItem
                  onModalOpen={handleModalOpen}
                  onModalClose={handleModalClose}
                  onDeleteItem={handleDeleteItem}
                  modalIsOpen={modalIsOpen}
                  product={product}
                  key={product._id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageInventories;
