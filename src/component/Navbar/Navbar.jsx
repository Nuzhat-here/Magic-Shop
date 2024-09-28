import React from 'react'
import Logo from "../../assets/website/logo.png"
import { BsCake2 } from "react-icons/bs";


const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Menu",
    link: "/#menu",
  },
  {
    id: 3,
    name: "About",
    link: "/#banner",
  },
];
const Navbar = () => {
  return (
    <div className= "  bg-bg2/50 text-white ">
      <div className="container py-2 ">
        <div className="flex justify-between items-center gap-10">
          <div className="">

            {/* logo+title */}

            <a href="#" className='text-secondary text-2xl sm:text-3xl flex justify-center items-center gap-5 tracking-wider font-cursive'>  
              <img src={Logo} alt="Logo" className='w-20' />
              Magic Shop
            </a>
          </div>
          {/* links */}
          <div className='flex justify-between items-center gap-4'>
            <ul className="hidden sm:flex items-center gap-4">
              {Menus.map((data, index) =>(
                  <li key={index}>
                    <a href={data.link} className=" inline-block text-xl py-4 px-4 text-secondary hover:text-black duration-200">
                      {data.name}
                    </a>
                    </li>
                ))}
            </ul>
            <button className='bg-secondary px-7 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-5'> Order Now
            <BsCake2 className='text-xl cursor-pointer' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
