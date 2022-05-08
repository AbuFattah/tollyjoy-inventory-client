import React from "react";
import Header from "../components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
const AddNewItem = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      supplier: "",
      price: "",
      quantity: "",
      imageUrl: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Item Name required"),
      supplier: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Supplier required"),
      price: Yup.number()
        .min(1, "Price cannot be zero or less")
        .required("Price required"),
      quantity: Yup.number()
        .min(1, "Quantity cannot be less than 1")
        .required("Quantity required"),
      imageUrl: Yup.string().matches(/https:\/\/.+\.com/, "Invalid URL"),
    }),

    onSubmit: (values) => {},
  });
  const { name, supplier, quantity, price, imageUrl } = formik.values;
  return (
    <>
      <Header type="static" className={"text-black shadow-lg"} />
      <div className="my-container">
        <p className="text-center mt-5 text-lg font-semibold uppercase">
          Add New Item
        </p>
        <div className="line w-[50px] h-[3px] bg-blue mx-auto my-2 mb-5"></div>

        <form
          onSubmit={formik.handleSubmit}
          className="shadow max-w-[400px] mx-auto p-5"
        >
          <div>
            <label
              className="required block text-lg my-2"
              htmlFor="name"
              id="name"
            >
              Item Name:
            </label>
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={name}
              className=" border p-2 px-3 w-full"
              type="text"
              name="name"
              id="name"
              placeholder="EQ baby diaper"
            />
          </div>
          <div>
            <label
              className="required block text-lg my-2"
              htmlFor="supplier"
              id="supplier"
            >
              Supplier:
            </label>
            {formik.touched.supplier && formik.errors.supplier ? (
              <div className="text-red-500">{formik.errors.supplier}</div>
            ) : null}
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={supplier}
              className="text-lg border p-1 px-3 w-full"
              type="text"
              name="supplier"
              id="supplier"
              placeholder="EQ"
            />
          </div>
          <div>
            <label
              className="required block text-lg my-2"
              htmlFor="price"
              id="price"
            >
              Price:
            </label>
            {formik.touched.price && formik.errors.price ? (
              <div className="text-red-500">{formik.errors.price}</div>
            ) : null}
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={price}
              className="text-lg border p-1 px-3 w-full"
              min={0}
              type="number"
              name="price"
              id="price"
              placeholder="200"
            />
          </div>
          <div>
            <label
              className="required block text-lg my-2"
              htmlFor="quantity"
              id="quantity"
            >
              Quantity:
            </label>
            {formik.touched.quantity && formik.errors.quantity ? (
              <div className="text-red-500">{formik.errors.quantity}</div>
            ) : null}
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={quantity}
              className="text-lg border p-1 px-3 w-full"
              min={1}
              type="number"
              name="quantity"
              id="quantity"
              placeholder="20"
            />
          </div>
          <div>
            <label
              className="block text-lg my-2"
              htmlFor="imageUrl"
              id="imageUrl"
            >
              Image URL:
            </label>
            {formik.touched.imageUrl && formik.errors.imageUrl ? (
              <div className="text-red-500">{formik.errors.imageUrl}</div>
            ) : null}
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={imageUrl}
              className="text-lg border p-1 px-3 w-full"
              min={1}
              type="text"
              name="imageUrl"
              id="imageUrl"
              placeholder="https://item-image.com"
            />
          </div>
          <button type="submit" className="btn  mt-4 w-full">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNewItem;
