import { Link } from "react-router-dom";

const ProductDetailsCard = ({ product }) => {
  const { _id, name, brand, photo, price, type, rating } = product;

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

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={photo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="">Type: {type}</h2>
          <h2 className="">Brand: {brand}</h2>
          <p>Price: {price}$</p>
          <div className="rating">{renderRatingStars()}</div>
          <div className="flex justify-between items-center mt-2">
            <div className="">
              <Link to={`/details/${_id}`}>
                <button className="btn text-white bg-green-500 hover:text-black">
                  Details
                </button>
              </Link>
            </div>
            <div className="">
              <Link to={`/update/${_id}`}>
                <button className="btn text-white bg-red-500 hover:text-black">
                  Update
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
