"use client";

import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

{/* mento data */ }
    {/***************************************** */}

const mentors = [
    {
        id: 1,
        photo: '/images/mentors/christian-buehner-DItYlc26zVI-unsplash.jpg',
        name: 'Jhon Dwirian',
        category: 'UI/UX Design',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        company: {
            name: 'Grab',
            logo: '/images/companies/grab.png',
        },
    },
    {
        id: 2,
        photo: '/images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg',
        name: 'Leon S Kennedy',
        category: 'Machine Learning',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        company: {
            name: 'Google',
            logo: '/images/companies/google.png',
        },
    },
    {
        id: 3,
        photo: '/images/mentors/noah-buscher-8A7fD6Y5VF8-unsplash.jpg',
        name: 'Nguyễn Thuy',
        category: 'Android Development',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        company: {
            name: 'Airbnb',
            logo: '/images/companies/airbnb.png',
        },
    },
    {
        id: 4,
        photo: '/images/mentors/philip-martin-5aGUyCW_PJw-unsplash.jpg',
        name: 'Rizki Known',
        category: 'Fullstack Development',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        company: {
            name: 'Microsoft',
            logo: '/images/companies/microsoft.png',
        },
    },
];

export default function Mentores() {
    const [index, setIndex] = useState(1);
     const [transition, setTransition] = useState(true);
    const [prepage, setPrepage] = useState(1);

  const extendedMentors = [
    mentors[mentors.length - 1],
    ...mentors,
    mentors[0],
  ];
    {/* detect screen sizet */ }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setPrepage(3);  // lg
            } else if (window.innerWidth >= 768) {
                setPrepage(2); // md
            } else {
                setPrepage(1); // sm
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, []);
    {/* motion of mentors slides */ }
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000)
        return () => clearInterval(interval);
    }, []);
const nextSlide = () => {
  setIndex((prev) => {
    if (prev + 1 >= mentors.length - prepage + 1) {
      return 0; 
    }
    return prev + 1;
  });
};

const prevSlide = () => {
  setIndex((prev) => {
    if (prev - 1 < 0) {
      return mentors.length - prepage; 
    }
    return prev - 1;
  });
};
    return (
        <>
            <div className="mentors overflow-hidden w-full flex gap-[10px] transition-transform duration-700 ease-in-out rounded-[30px] p-[20px] " style={{ transform: `translateX(-${index* (100 / prepage)}%)` }}>
                {mentors.map((mentor, id) => (<div key={id} className="w-full md:w-1/2 lg:w-1/3 my-[20px] flex-shrink-0 p-[20px] bg-white shadow-[0_4px_5px_rgba(0,0,0,0.2)] rounded-[30px p-[20px] rounded-[30px]">
                    <img src={mentor.photo} className="rounded-[30px] mb-[20px]"></img>
                    <h4 className="text-[22px] font-[700] leading-[1.4]">{mentor.name}</h4>
                    <h6 className="text-[#717171] text-[16px] leading-[1.5] font-[400] mb-[10px]">{mentor.category}</h6>
                    <p  className="text-[#717171] text-[14px] leading-[1.75] font-[400] mb-[10px]">{mentor.description}</p>
                </div>
                  
                ))}
                    <div className="mentor mt-[20px] flex justify-center gap-4">
                <button onClick={prevSlide} className="p-2 rounded-full  text-white bg-[#127c71] hover:bg-white hover:text-[#127c71]">
                  <FaArrowLeft />
                </button>
                <button onClick={nextSlide} className="p-2 rounded-full  text-white bg-[#127c71] hover:bg-white hover:text-[#127c71]">
                  <FaArrowRight />
                </button>
              </div>
        </div>
                    <div className="mentor mt-[20px] flex justify-center gap-4">
                <button onClick={prevSlide} className="p-2 rounded-full  text-white bg-[#127c71] hover:bg-white hover:text-[#127c71]">
                  <FaArrowLeft />
                </button>
                <button onClick={nextSlide} className="p-2 rounded-full  text-white bg-[#127c71] hover:bg-white hover:text-[#127c71]">
                  <FaArrowRight />
                </button>
              </div>
        </>
    )
}