import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCart from "../../Components/SingleCart/SingleCart";

const MyCart = () => {
  const carts = useLoaderData();

  console.log(carts);
  return (
    <div className="my-20 w-11/12 mx-auto">
      <h1 className="text-2xl font-bold text-center">Your Selected Product</h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-6 mx-auto">
        {carts?.map((cart) => (
          <SingleCart cart={cart} key={cart._id}></SingleCart>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
