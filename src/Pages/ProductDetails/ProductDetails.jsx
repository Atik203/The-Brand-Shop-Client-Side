import { useLoaderData } from "react-router-dom";
import ProductDetailsCard from "../../Components/ProductDetailsCard/ProductDetailsCard";

const ProductDetails = () => {
  const products = useLoaderData() || [];

  return (
    <div className="w-11/12 mx-auto mt-1">
      <div className="carousel w-full h-[350px] lg:h-[700px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/h7KpHmQ/6981233.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/n1NWyvz/6981246.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/SN7c97k/7829930.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/dkbcxHq/future-technology-banner-template-23-2149193000.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-20 grid grid-cols-1 lg:grid-cols-4 items-center gap-12 lg:gap-6 mx-auto">
        {products.length > 0 ? (
          products?.map((product) => (
            <ProductDetailsCard
              product={product}
              key={product._id}
            ></ProductDetailsCard>
          ))
        ) : (
          <div className="text-center col-span-4 flex justify-center">
            <img src="https://evgracias.com/images/no-products.jpg" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
