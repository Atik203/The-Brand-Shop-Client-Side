import React from "react";

const AddProduct = () => {
  const handleProduct = (e) => {
    e.preventDefault();
    const form = e.target;
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="mt-10 text-2xl font-bold text-center">Add New Product</h1>
      <form onSubmit={handleProduct} className="bg-gray-300 p-4">
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Product Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
        </div>{" "}
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Product Brand Name</span>
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Brand Name"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Product Type</span>
            </label>
            <input
              type="text"
              name="type"
              placeholder="Product Type"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
        </div>{" "}
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Product Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Photo url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Product photo url"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
        </div>
        <div className="form-control w-full max-w-5xl mx-auto">
          <label className="label">
            <span className="label-text font-medium">Product Description</span>
          </label>
          <textarea
            name="details"
            placeholder="Product description"
            className="textarea textarea-bordered w-full max-w-5xl h-32"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-5xl mx-auto mt-6">
          <button className="btn bg-green-500 text-white hover:text-black">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
