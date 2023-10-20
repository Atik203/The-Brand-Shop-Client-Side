import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";
const Details = () => {
  const product = useLoaderData();
  const { _id, name, brand, photo, price, type, rating, details } = product;

  const { user } = useContext(AuthContext);
  const email = user.email;

  const handleCart = () => {
    const newProduct = {
      email,
      name,
      brand,
      photo,
      price,
      type,
      rating,
      details,
    };

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Added in the cart Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => console.log(error));
  };

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <input
          key={i}
          type="radio"
          name={`rating-${product._id}`}
          className={`mask mask-star-2 ${
            i <= rating ? "bg-orange-400" : "bg-orange-200"
          }`}
        />
      );
    }
    return stars;
  };
  const formattedDetails = details.replace(/\n/g, "<br>");

  return (
    <div className="w-11/12 mx-auto mt-20 mb-20">
      <div className="w-2/6 mx-auto">
        <img src={photo} alt={name} className="w-full" />
      </div>
      <h1 className="text-xl lg:text-2xl mt-4 font-bold lg:w-10/12 mx-auto px-4">
        Product Name: {name}
      </h1>
      <h1 className="text-lg font-medium lg:w-10/12 mx-auto px-4">
        Product Type: {type}
      </h1>
      <h1 className="text-lg font-medium lg:w-10/12 mx-auto px-4">
        Product Brand: {brand}
      </h1>
      <h1 className="text-base font-medium lg:w-10/12 mx-auto px-4">
        Product Price: {price}$
      </h1>
      <p
        className="text-justify p-4 lg:w-10/12 mx-auto"
        dangerouslySetInnerHTML={{ __html: formattedDetails }}
      ></p>
      <div className="rating px-4 lg:w-10/12  lg:ml-28">
        {renderRatingStars()}
      </div>
      <div className="px-4 lg:w-10/12 mx-auto">
        <button
          onClick={handleCart}
          className="btn bg-green-500 text-white hover:text-black mt-2"
        >
          Add To Cart
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Details;
