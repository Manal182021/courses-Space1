"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

{/* courses data */ }
    {/***************************************** */}

const slides = [
  { image: "/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg", title: "The Complete Guide Docker and Kubernetes", member: "(12)", price: "$30" },
  { image: "/images/courses/alvaro-reyes-qWwpHwip31M-unsplash.jpg", title: "Modern React with MUI & Redux", member: "(12)", price: "$35" },
  { image: "/images/courses/annie-spratt-QckxruozjRg-unsplash.jpg", title: "Ethical Hacking Bootcamp Zero to Mastery", member:" (14)", price: "$35" },
  { image: "/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg", title: "Adobe Lightroom For Beginners: Complete Photo Editing", member: "(6)", price: "$25" },
  { image: "/images/courses/grovemade-RvPDe41lYBA-unsplash.jpg", title: "Android Development from Zeo to Hero", member: "(8)", price: "$25" },
  { image: "/images/courses/sai-kiran-anagani-5Ntkpxqt54Y-unsplash.jpg", title: "UI/UX Complete Guide", member: "(12)", price: "$20" },
  { image: "/images/courses/stillness-inmotion-Jh6aQX-25Uo-unsplash.jpg", title: "Maxtraing Data Modeling Fundamentals", member: "(12)", price: "$30" },
  { image: "/images/courses/true-agency-o4UhdLv5jbQ-unsplash.jpg", title: "The Complete Guide Docker and Kubernetes", member: "(12)", price: "$30" },
];

  {/*  */}
export default function Courses() {
  const [index, setIndex] = useState(0);
  const [prepage, setPrepage] = useState(1);

    {/* detect screen sizet */}
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setPrepage(3);  // lg
      }else if (window.innerWidth >= 768) {
        setPrepage(2); // md
      } else {
        setPrepage(1); // sm
      }
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  {/* motion of courses slides */ }
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

const nextSlide = () => {
  setIndex((prev) => {
    if (prev + 1 >= slides.length - prepage + 1) {
      return 0; 
    }
    return prev + 1;
  });
};

const prevSlide = () => {
  setIndex((prev) => {
    if (prev - 1 < 0) {
      return slides.length - prepage; 
    }
    return prev - 1;
  });
};


  return (
    /* section of courses  */
    /*************************************/ 
    <section className="about h-[100vh] lg:px-[150px] py-[50px] px-[50px] overflow-hidden bg-[#f2f5f5]">
      {/* top section about */}
       {/* ******************************** */}
      <div className="about_top sm:flex sm:flex-row flex-col justify-between  ">

        {/* left section about */}
         {/* *************************************/}
        <div className="about_left md:w-[30%] w-[100%]">
              <h2 className="text-[48px]  font-[700] font-Cabin md:w-[30%] w-[100%]">Most Popular Courses</h2>
        </div>

        {/* right section about slider */}
         {/* ***************************************** */}
        <div className="about_right overflow-hidden md:w-[70%] w-[100%] ">
          <div className="sliders w-full flex gap-[10px] transition-transform duration-700 ease-in-out " style={{ transform: `translateX(-${index* (100 / prepage)}%)` }}>
            {slides.map((slide, i) => (<div key={i} className=" slide w-full md:w-1/2 lg:w-1/3 my-[20px] flex-shrink-0 p-[20px] bg-white shadow-[0_4px_5px_rgba(0,0,0,0.2)] rounded-[30px]" >
              <img src={slide.image} alt={slide.title} className="w-full h-[200px] object-cover rounded-[10px] pb-[20px] " />
              <h3 className="font-[600] text-[20px pb-[20px]]">{slide.title}</h3>
              <div className="rate flex items-center gap-1 mt-2 text-[24px]">
                  <FaStar className="text-[#ffaf35] " />
                  <FaStar className="text-[#ffaf35]" />
                  <FaStar className="text-[#ffaf35]" />
                  <FaStar className="text-[#ffaf35]" />
                <FaStar  className="text-[#00000042]"/>
                
                    <span className="ml-2 text-[20px]">{slide.member}</span>
              </div>
              <div className="price flex gap-2 items-center mt-2 font-[600] pt-[20px] text-[15px]">
                  <h5 className="text-[#127C71] ">{slide.price}</h5>
                <span>/course</span>
                <button className="text-[#00000042] rounded-[50%] h-[30px] w-[30px] hover:bg-[#127c71] flex justify-center items-center hover:text-white"><FaArrowRight/> </button>
              </div>
            </div>

            ))}

          </div>

        </div>

      </div>
      {/* bottom section about */}
       {/* ************************************* */}
      <div className="about_bottom"> 
      <div className="sliders_icon mt-6 flex justify-center gap-4">
        <button onClick={prevSlide} className="p-2 rounded-full  text-white bg-[#127c71] hover:bg-white hover:text-[#127c71]">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="p-2 rounded-full  text-white bg-[#127c71] hover:bg-white hover:text-[#127c71]">
          <FaArrowRight />
        </button>
      </div>
      </div>

    </section>




    )
   
}
