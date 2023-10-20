import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Banner = () => {
  return (
    <div className="mx-auto ">
      <div className="relative">
        <img
          src={
            "https://i.ibb.co/QcfQwgw/christopher-gower-a-Xa21cf7r-Y-unsplash.jpg"
          }
          className="h-[300px] md:h-[400px] lg:h-[650px] w-full transition-opacity opacity-50"
        />
      </div>
      <div
        className="w-2/3 mx-auto absolute top-60 md:top-60 lg:top-72 -mt-10 md:-mt-20 ml-12 md:ml-24 lg:-mt-10 lg:ml-44"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="text-2xl md:text-3xl my-5 lg:text-5xl text-center text-green-500 font-bold">
          Elevate Your Shopping <br /> Experience
        </h1>
        <h3 className="text-center font-medium text-base md:text-xl">
          Discover a world of exquisite brands to make your shopping <br />
          truly unforgettable. we bring your dreams to life.
        </h3>
      </div>
    </div>
  );
};

export default Banner;
AOS.init();
