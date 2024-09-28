import React from 'react'
import BannerImg from "../../assets/website/bake.jpg"
import banner1 from "../../assets/website/bg1.png"
import { FaHandHoldingHeart } from "react-icons/fa6";
import { SiCodefresh } from "react-icons/si";
import { MdAttachMoney } from "react-icons/md";


const img1= 
    {
        backgroundImage: `url(${banner1})`,
        backgroundColor: "#EBEBEB",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    };


const Banner = () => {
  return (
    <>
    <span id="banner"> </span>
    <div style={img1}>
      <div className="min-h-[550px] flex justify-center items-center py-10 sm:oy-0 ">
        <div className='container '>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* image */}
            <div>
                <img src={BannerImg} className='max-w-[430px] w-full mx-auto rounded-lg'/>
            </div>
            {/* texts */}
            <div className='flex flex-col justify-center gap-7 bg-primary/80 pl-10 pr-10 rounded-lg '>
                <h1 className='text-5xl sm:text-4xl font-medium font-cursive text-secondary'> Baked with Love!!! </h1>
                <p className='text-sm text-black tracking-wide leading-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sequi id excepturi necessitatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <div className='grid grid-cols-2 gap-6'>
                    <div className=' space-y-3'>
                        
                        <div className='flex items-center gap-3'>
                        <MdAttachMoney className='text-2xl h-12 w-12 shadow-sm p-2 rounded-full bg-secondary text-bg2' /> 
                        <span className='text-xl font-semibold'> Best Price Gurranty </span>
                        </div>
                        <div className='flex items-center gap-3 '>
                        <SiCodefresh className='text-2xl h-12 w-12 shadow-sm p-2 rounded-full bg-secondary text-bg2' /> 
                        <span className='text-xl font-semibold'> 100% Halal certified </span>
                        </div>
                        <div className='flex items-center gap-3'>
                        <FaHandHoldingHeart className='text-2xl h-12 w-12 shadow-sm p-2 rounded-full bg-secondary text-bg2' /> 
                        <span className='text-xl font-semibold'> Homemade Fresh Cakes </span>
                        </div>
                    </div>
                    <div className='border-l-2 pl-5 border-secondary'>
                        <h1 className=' text-2xl '> Have a sweet tooth? </h1>
                        <p> {" "} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, 
                            consequatur corrupti aspernatur voluptatibus minus tempora quaerat illum harum quia 
                            architecto modi vitae repellat a, at repudiandae sequi eius perspiciatis sit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Banner



                        