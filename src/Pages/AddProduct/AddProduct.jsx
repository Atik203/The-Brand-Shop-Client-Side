import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log(email);
  const handleProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const details = form.details.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const product = {
      name,
      brand,
      type,
      details,
      price,
      rating,
      photo,
    };

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Added Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="w-11/12 mx-auto mb-20">
      <h1 className="mt-10 text-2xl font-bold text-center mb-8">
        Add New Product
      </h1>
      <form onSubmit={handleProduct} className="bg-gray-300 p-4">
        <div className="flex flex-col lg:flex-row items-center justify-around mt-2">
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
              placeholder="Rating (1-5)"
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
        <div className="form-control w-full max-w-5xl mx-auto mt-6 mb-6">
          <button className="btn bg-green-500 text-white hover:text-black">
            Add Product
          </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddProduct;
