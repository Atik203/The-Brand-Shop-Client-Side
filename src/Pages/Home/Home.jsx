import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import BrandCard from "../../Components/BrandCard/BrandCard";

const Home = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/brandData.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <h1 className="text-xl lg:text-3xl font-bold mt-20 text-center">
        Our Most Popular Brands
      </h1>
      <p className="text-lg text-center text-gray-600 mt-4 mx-auto max-w-xl">
        Explore a curated selection of the latest and greatest products from our
        most beloved brands. From cutting-edge technology to stylish fashion,
        discover the best that these brands have to offer.
      </p>
      <div className="mt-10 mb-20 grid grid-cols-3 lg:flex justify-center gap-4 lg:gap-10 items-center w-11/12 mx-auto">
        {brands.map((abrand) => (
          <BrandCard abrand={abrand} key={abrand.id}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
