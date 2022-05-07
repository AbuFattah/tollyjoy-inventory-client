import React, { useState } from "react";

const TableItem = ({ product }) => {
  const [editState, setEditState] = useState(false);
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
        <button className="btn btn-sm btn-error font-medium text-blue-600  hover:underline">
          delete
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
