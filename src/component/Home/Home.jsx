import React from "react";
import Hero from "../../assets/website/cake5.png";
import { SiCodefresh } from "react-icons/si";
import { GiWrappedSweet } from "react-icons/gi";
import { TbHandClick } from "react-icons/tb";

const Home = () => {
  return (
    <>
      <div className=" min-h-[550px] sm:min-h-[600px] bg-bg2 flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black"
              >
                Serving the delicious{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  class="font-cursive text-secondary"
                >
                  Cakes
                </span>{" "}
                in the city
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-secondary hover:scale-105 duration-200 text-white flex items-center gap-3 py-2 px-7 rounded-full">
                  ORDER NOW! <TbHandClick />
                </button>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <img
                data-aos-once="true"
                src={Hero}
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "
              />
              <div
                data-aos="fade-left"
                className="bg-secondary px-7 py-3 gap-2 flex items-center rounded-xl absolute top-10 left-10"
              > HOMEMADE!<SiCodefresh className="text-white cursor-pointer" />
                
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-secondary px-7 py-3 gap-3 flex items-center rounded-xl absolute bottom-10 right-10"
              > Sweet Treat? <GiWrappedSweet className="text-white cursor-pointer"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
