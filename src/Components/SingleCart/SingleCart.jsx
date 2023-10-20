import Swal from "sweetalert2";

const SingleCart = ({ cart, onDelete }) => {
  const { _id, name, brand, photo, price, type, rating } = cart;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(`http://localhost:5000/cart/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            if (result.isConfirmed) {
              onDelete();
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
            }
          }
        });
    });
  };

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
            <button
              onClick={() => handleDelete(cart._id)}
              className="btn text-white bg-red-500 hover:text-black"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
