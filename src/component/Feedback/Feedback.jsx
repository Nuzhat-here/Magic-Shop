import React from 'react'
import Slider from 'react-slick'

const TestimonialData = [

    {
      id: 1,
      name: "Kim Namjoon",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      name: "Kim Seokjin",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      name: "Min Yoongi",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      name: "Jung Hoseok",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img: "https://picsum.photos/200/300?random=4",
    },
    {
        id: 5,
        name: "Park Jimin",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        img: "https://picsum.photos/200/300?random=5",
      },
      {
        id: 6,
        name: "Kim Taehyung",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        img: "https://picsum.photos/200/300?random=6",
      },
      {
        id: 7,
        name: "Jeon Jungkook",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        img: "https://picsum.photos/200/300?random=7",
      },

  ];

const Feedback = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };

  return (
    <div className='py-14 mb-10'>
      <div className="container">
      <div className='text-center mb-10'>
            <h1 className='text-4xl font-medium text-secondary'> Customer's Feedbacks </h1>
        </div>
        <div>
            <Slider {... settings}>
                {
                    TestimonialData.map((data, index) =>{
                        return <div className='my-6' key={data.id}>
                            <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-secondary/10 relative'>
                                <div className='mb-4'>
                                    <img src={data.img} className='rounded-full w-20 h-20' />
                                </div>
                                <div className='flex flex-col items-center gap-4'>
                                    <div className='space-y-3'>
                                        <p className=' text-xl text-black'>{data.text}</p>
                                        <h1 className='text-secondary font-semibold text-xl font-cursive'>{data.name}</h1>
                                    </div>
                                </div>
                                <p className='text-secondary/20 text-9xl font-serif absolute top-0 right-0'> ,, </p>
                            </div>
                        </div>;
                    })}
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Feedback
