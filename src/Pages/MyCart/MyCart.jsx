import { useLoaderData } from "react-router-dom";
import SingleCart from "../../Components/SingleCart/SingleCart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const loadedData = useLoaderData();
  const [initialCarts, setinitialCarts] = useState(null);

  useEffect(() => {
    const filterData = loadedData.filter((data) => data.email === email);
    setinitialCarts(filterData);
  }, [loadedData, email]);

  const handleItemDelete = (id) => {
    const updatedCarts = initialCarts.filter((cart) => cart._id !== id);
    setinitialCarts(updatedCarts);
  };

  return (
    <div className="my-20 w-11/12 mx-auto min-h-screen">
      <h1 className="text-2xl font-bold text-center">Your Selected Product</h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-6 mx-auto">
        {initialCarts !== null ? (
          initialCarts.map((cart) => (
            <SingleCart
              cart={cart}
              key={cart._id}
              onDelete={() => handleItemDelete(cart._id)}
            />
          ))
        ) : (
          <p>
            <span className="loading loading-infinity loading-lg"></span>
          </p>
        )}
      </div>
    </div>
  );
};

export default MyCart;
