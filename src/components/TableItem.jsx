import React, { useState } from "react";
import { toast } from "react-toastify";
import Modal from "../assets/Modal";

const TableItem = ({
  product,
  onModalClose,
  onModalOpen,
  onDeleteItem,
  modalIsOpen,
}) => {
  return (
    <tr key={product._id} className="border-b  odd:bg-white even:bg-gray-50  ">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap flex items-center gap-2"
      >
        <img src={product.imageUrl} width="42px" alt="" />
        <p>{product.name}</p>
      </td>
      <td className="px-6 py-4">{product.supplier}</td>
      <td className="px-6 py-4">{product.quantity}</td>
      <td className="px-6 py-4">{product.price}</td>
      <td className="px-6 py-4 ">
        <button
          onClick={() => onModalOpen()}
          className="btn btn-sm btn-error font-medium text-blue-600  hover:underline"
        >
          delete
        </button>
        <Modal open={modalIsOpen}>
          <p className="text-gray-500">Are You Sure?</p>
          <p className="font-semibold">You want to delete {product.name}?</p>

          <div className="text-right space-x-2">
            <button
              onClick={() => onDeleteItem(product._id)}
              className="btn btn-error btn-sm"
            >
              Yes
            </button>
            <button onClick={onModalClose} className="btn btn-primary btn-sm">
              No
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default TableItem;
