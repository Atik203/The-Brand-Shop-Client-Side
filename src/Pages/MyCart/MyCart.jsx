import { useLoaderData } from "react-router-dom";
import SingleCart from "../../Components/SingleCart/SingleCart";
import { useState } from "react";
const MyCart = () => {
  const initialCarts = useLoaderData();
  const [carts, setCarts] = useState(initialCarts);

  const handleItemDelete = (id) => {
    const updatedCarts = carts.filter((cart) => cart._id !== id);
    setCarts(updatedCarts);
  };

  return (
    <div className="my-20 w-11/12 mx-auto">
      <h1 className="text-2xl font-bold text-center">Your Selected Product</h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-6 mx-auto">
        {carts?.map((cart) => (
          <SingleCart
            cart={cart}
            key={cart._id}
            onDelete={() => handleItemDelete(cart._id)}
          ></SingleCart>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
