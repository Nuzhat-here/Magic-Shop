import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const FooterLinks=[
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Menu",
    link: "/#menu",
  },
  {
    title: "About US",
    link: "/#banner",
  },
  {
    title: "Reviews",
    link: "/#feedback",
  },
]


const Footer = () => {
  return (
    <div className='bg-secondary  max-h-[420px] text-bg2'>
      <div className="container grid md:grid-cols-3 pb-20 pt-5">
        <div className='py-8 px-4'>
          <a href="#" className='font-medium tracking-widest text-2xl sm:text-3xl font-cursive'> Magic Shop </a>
          <p className='pt-4'>
          Bringing sweetness to every celebration, one delicious cake at a time.
          </p>
          <p className='pt-4'>
           © Nishat Nujhat
          </p>
        </div>
        <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
          <div className='py-8 px-4'>
            <h1 className='text-xl font-bold sm:text-left mb-3 '> Quick Links
            </h1>
            <ul className='space-y-3'>
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className='inline-block hover:scale-105 duration-200'>
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='py-8 px-4 col-span-2 sm:col-auto'>
            <h1 className='text-xl font-bold sm:text-left mb-3'>
              Address
            </h1>
            <div>
              <p className='mb-3'> Dhaka, Bangladesh </p>
              <div className='flex items-center gap-3 mt-6'>
              <a href="#">
                    <FaGithub className="text-3xl hover:text-white duration-300" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-white duration-200" />
                  </a>
              </div>
            </div>
          </div>
          <div className='py-7 px-4'>
            <h1 className='text-xl font-bold mb-3'> Location Map </h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.770464306694!2d90.36453466537004!3d23.802854858151893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1727492423265!5m2!1sen!2sbd" width="400" height="300" style={{ border: 0 }}  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
