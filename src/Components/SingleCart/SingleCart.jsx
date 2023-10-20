const SingleCart = ({ cart }) => {
  const { _id, name, brand, photo, price, type, rating } = cart;

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <input
          key={i}
          type="radio"
          name={`rating-${cart._id}`}
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
          <div className="text-center mt-2">
            <button className="btn text-white bg-red-500 hover:text-black">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
