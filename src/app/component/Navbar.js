"use client";

import React from 'react'
import { useState } from "react";
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div >
        <nav className="navbar   flex justify-between items-center  py-[24px] lg:px-[150px] px-[50px]  shadow-[0_2px_2px_0_rgb(0_0_0_/_5%)]">
          {/* start logo */}
          <div className="logo text-[22px] font-[700] leading-[1.4] font-Cabin">
            <Link href="/">Course<span className=" text-[#127C71] ">Space</span></Link>
            </div>
            {/* Desktop Menu  */}
            {/* ********************************************** */}
         <div className="nav_menu lg:flex hidden justify-between">
          {/* start pages */}
          <ul className="nav-links hidden lg:flex gap-[24px] text-[#9e9e9e] cursor-pointer text-[22px] ">
            <li className="text-[18px]  hover:text-[#127c71] relative before:absolute before:content[''] before:h-[2px] before:bg-[#ffaf35] before:left-1/2 before:bottom-0   before:w-0 before:transition-all before:duration-300 before:-translate-x-1/2 before:origin-center hover:before:w-full"><Link href="/">Home</Link></li>
            <li className="text-[18px] hover:text-[#127c71] relative before:absolute before:content[''] before:h-[2px] before:bg-[#ffaf35] before:left-1/2 before:bottom-0   before:w-0 before:transition-all before:duration-300 before:-translate-x-1/2 before:origin-center hover:before:w-full"><Link href="/courses">Courses</Link></li>
            <li className="text-[18px] hover:text-[#127c71] relative before:absolute before:content[''] before:h-[2px] before:bg-[#ffaf35] before:left-1/2 before:bottom-0   before:w-0 before:transition-all before:duration-300 before:-translate-x-1/2 before:origin-center hover:before:w-full"><Link href="/testimonial">Testimonial</Link></li>
            <li className="text-[18px] hover:text-[#127c71] relative before:absolute before:content[''] before:h-[2px] before:bg-[#ffaf35] before:left-1/2 before:bottom-0   before:w-0 before:transition-all before:duration-300 before:-translate-x-1/2 before:origin-center hover:before:w-full"><Link href="/mentor">Mentor</Link></li>
          </ul>
          {/* start buttons */}
          <div className="auth ml-[200px] ">
           <button className="mr-[24px] cursor-pointer text-[14px] text-[#127C71] font-[500] tracking-[1px] rounded-[12px] border-[2px] border-[#127C71] px-[12px] py-[6px]"><Link href="/signIn">Sign In</Link></button>
            <button className=" cursor-pointer text-[14px] text-white bg-[#127C71] font-[500] tracking-[1px] rounded-[12px] border-[2px]  px-[12px] py-[6px] "><Link href="/signUp">Sign Up</Link></button>
              </div>
            </div>
         {/* Mobile Icon (only mobile) */}
        <div
          className="block lg:hidden text-2xl text-gray-700 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes  className=' absolute top-[20px] right-[20px] text-[#9e9e9e] z-[100] text-[30px] '/> : <FaBars />}
        </div>

              {/* Mobile Menu */}
        {menuOpen && (
          <div className="nav_menu lg:hidden flex flex-col items-center justify-center fixed top-0 left-0 py-[48px] text-center m-auto w-[100%] h-[100vh] bg-white ">
          {/* start pages */}
          <ul className="nav-links lg:hidden flex  flex-col gap-[24px] text-[#9e9e9e] cursor-pointer text-[22px] bg-white z-10 ">
            <li className="hover:text-[#127c71] relative before:absolute before:content[''] before:h-[2px] before:bg-[#ffaf35] before:left-1/2 before:bottom-0   before:w-0 before:transition-all before:duration-300 before:-translate-x-1/2 before:origin-center hover:before:w-full"><Link href="/">Home</Link></li>
            <li className="hover:text-[#127c71] relative before:absolute before:content[''] before:h-[2px] before:bg-[#ffaf35] before:left-1/2 before:bottom-0   before:w-0 before:transition-all before:duration-300 before:-translate-x-1/2 before:origin-center hover:before:w-full"><Link href="/courses">Courses</Link></li>
            <li className="hover:text-[#127c71] relative before:absolute before:content[''] before:h-[2px] before:bg-[#ffaf35] before:left-1/2 before:bottom-0   before:w-0 before:transition-all before:duration-300 before:-translate-x-1/2 before:origin-center hover:before:w-full"><Link href="/testimonial">Testimonial</Link></li>
            <li className="hover:text-[#127c71] relative before:absolute before:content[''] before:h-[2px] before:bg-[#ffaf35] before:left-1/2 before:bottom-0   before:w-0 before:transition-all before:duration-300 before:-translate-x-1/2 before:origin-center hover:before:w-full"><Link href="/mentor">Mentor</Link></li>
          </ul>
          {/* start buttons */}
          <div className="auth flex flex-col lg:ml-[200px] gap-[24px] lg:mt-[24px] mt-[100px]">
           <button className="mr-[24px] cursor-pointer text-[14px] text-[#127C71] font-[500] tracking-[1px] rounded-[12px] border-[2px] border-[#127C71] px-[12px] py-[6px]">Sign In</button>
            <button className=" cursor-pointer text-[14px] text-white bg-[#127C71] font-[500] tracking-[1px] rounded-[12px] border-[2px]  px-[12px] py-[6px] ">Sign Up</button>
              </div>
            </div>
        )}
          </nav>
        {/* end nav bar */}
        </div>
  )
}

export default Navbar