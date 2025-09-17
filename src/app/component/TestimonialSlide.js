"use client"

import { useState } from "react"
import { useEffect } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const slides = [
  {
    id: 1,
    title: 'Detailed learning materials',
    content:
      'Classes that provide very detailed material in term of making UI UX Design starting team making low and hight quality, system designs, using data layout and make prototypes and testing.',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'UI/UX Engineer',
      photo: '/images/avatars/1.jpg',
    },
  },
  {
    id: 2,
    title: 'Best Quality Online Course!',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user: {
      id: 1,
      name: 'Riski',
      professional: 'Software Engineer',
      photo: '/images/avatars/2.jpg',
    },
  },
  {
    id: 3,
    title: 'Very complete class',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user: {
      id: 1,
      name: 'Nguyễn Văn',
      professional: 'FullStack Designer',
      photo: '/images/avatars/3.jpg',
    },
  },
  {
    id: 4,
    title: 'Great Quality!',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user: {
      id: 1,
      name: 'Diana Jordan',
      professional: 'SEO Expert',
      photo: '/images/avatars/4.jpg',
    },
  },
  {
    id: 5,
    title: 'Detailed learning materials',
    content:
      'Classes that provide very detailed material in term of making UI UX Design starting team making low and hight quality, system designs, using data layout and make prototypes and testing.',
    user: {
      id: 1,
      name: 'Ashley Graham',
      professional: 'Back-End Developer',
      photo: '/images/avatars/5.jpg',
    },
   },
]

export default function TestimonialSlide() {
  const [index, setIndex] = useState(0);
     useEffect (() => {
        const Interval = setInterval(() => {
            nextSlide();
        },2000)
        return () => clearInterval(Interval);
     }, []);
    const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };
   const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const currentSlide = slides[index];
  return (
    <>
      <div className="slides p-[20px] transition-all duration-[3000] ease-in-out ">
        <h4 className="text-[22px] font-[700] leading-[1.4] mb-[16px]">{currentSlide.title}</h4>
        <p className="text-[#717171] text-[16px] leading-[1.5]  font-[400] mb-[20px]">{currentSlide.content}</p>
        <div className="slide flex justify-between w-[40%] items-center shadow-[0_4px_5px_rgba(0,0,0,0.2)] rounded-[5px] p-[10px] ">
          <img src={currentSlide.user.photo} className="h-[50px] w-[50px] rounded-[50%]"></img>
          <div>
            <h5 className="text-[15px] font-[600]">{currentSlide.user.name}</h5>
            <h6 className="text-[#717171] text-[14px] leading-[1.75] font-[400]">{currentSlide.user.professional}</h6>
          </div>
        </div>
          <div className="sliders_icon flex justify-center gap-4">
              <button onClick={prevSlide} className="rounded-full  hover:text-white hover:bg-[#127c71] bg-white text-[#127c71]">
                <FaArrowLeft /></button>
              <button onClick={nextSlide} className=" rounded-full  hover:text-white hover:bg-[#127c71] bg-white text-[#127c71]">
          <FaArrowRight /></button>
        </div>
          </div>

    </>
  )
}