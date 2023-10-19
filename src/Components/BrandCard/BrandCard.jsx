import { Link } from "react-router-dom";

const BrandCard = ({ abrand }) => {
  const handleBrand = (brand) => {
    console.log(brand);
  };

  const { brand, img } = abrand;
  return (
    <Link onClick={() => handleBrand(brand)} to={`/product-details/${brand}`}>
      <div className="shadow-md rounded-md p-2 lg:p-4 hover:text-green-500 cursor-pointer hover:bg-gray-300">
        <img src={img} alt="" className="w-24 lg:w-28 h-20 lg:h-24" />
        <h1 className="text-base lg:text-2xl font-bold mt-2 text-center">
          {brand}
        </h1>
      </div>
    </Link>
  );
};

export default BrandCard;
