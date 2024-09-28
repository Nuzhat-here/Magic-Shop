import React from 'react'
import img1 from '../../assets/website/cake1.png'
import img2 from '../../assets/website/cake2.png'
import img3 from '../../assets/website/cake4.png'

const MenuData = [
    {
    id: 1,
    img: img1,
    name: "Vanilla Cake",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    aosDelay: "100",

},
{
    id: 2,
    img: img2,
    name: "Chocolate Cake",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    aosDelay: "300",

},
{
    id: 3,
    img: img3,
    name: "Lemon Cake",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    aosDelay: "500",

}
]

const Menu = () => {
  return (
    <>
    <span id="menu"> </span>
    <div className='py-10'>
      <div className='container'>
        <div className='text-center mb-20'>
            <h1 className='text-4xl font-medium text-secondary'>Choose YOUR favourite category! </h1>
        </div>
        {/* menu section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 place-items-center'>
            {
                MenuData.map((data, index) => {
                    return (
                        <div
                        key = {index}
                        className='rounded-2xl bg-bg2 hover:bg-secondary/80 hover:text-white shadow-xl duration-200 max-w-[600px] group relative'>
                            <div className='h-[200px]'>
                                <img src={data.img}  className='max-w-[400px] block mx-auto transform -translate-y-14 group-hover:scale-110 duration-300 cursor-pointer' />
                            </div>
                            {/* texts of the menu cards */}
                            <div className='p-5 text-center'>
                                <h1 className='text-secondary text-2xl font-bold group-hover:text-bg2'>{data.name}</h1>
                                <p className='text-black group-hover:text-white duration-300'>{data.description}</p>
                            </div>
                        </div>
                    );
                }) 
            }
        <div className=''>

            
        </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Menu
