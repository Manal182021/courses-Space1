import Image from "next/image";
import Link from "next/link";
import Button from "./component/Button";
import { format } from "path";
import Courses from "./component/Coursese";
import Information from "./component/Information";
import Mentores from "./component/Mentors";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <div>
      {/* start hero section */}
      {/* ****************************************************** */}
      <section className="hero lg:px-[150px] px-[50px] h-[100vh] m-auto text-center ">
        <div className="main lg:flex justify-between">

          {/* start main left section */}
          {/* ********************************* */}
        <div className="hero_left lg:w-[55%]">
          <h1 className="lg:text-[60px] font-[700] tracking-[1.5px] leading-[1.3] lg:pt-[50px] pt-[150px] sm:pt-[20px] justify-center text-[40px] ">
            <span className="relative text-[#127C71] font-bold  after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[6px] after:border-b-[4px] after:border-[#ffaf35] after:rounded-full after:-rotate-4 z-[-1]">Improve </span><mark className="bg-transparent">your </mark><span>Skill</span> with Different Way
          </h1>
          <p className="text-[16px] text-[#717171] lg:w-[80%] py-[30px] leading-[1.6] tracking-[1.3px]">
            Let's take an online course to improve your skills in a different way, you can set your own study time according to your learning speed. So you san study comfortable and absorb tge material easily.
            </p>

            {/* start btns left section */}
            {/* ***************************** */}
          <div className="btns">
              <button className=" cursor-pointer text-[14px] text-white bg-[#127C71] font-[500] tracking-[1px] rounded-[12px] border-[2px]  px-[12px] py-[6px]"><a>Get Started</a></button>
            <button  className="ml-[24px] cursor-pointer text-[14px] text-[#127C71] font-[500] tracking-[1px] rounded-[12px] border-[2px] border-[#127C71] px-[12px] py-[6px]"><a>Watch Video</a></button>
          </div>
          </div>
          
          {/* start main right section */}
          {/* ********************************************* */}
        <div className="hero_right lg:w-[40%]">
          <img src="/images/home-hero.jpg" className="max-w-full max-h-full lg:pt-[50px] pt-[20px] w-[100%]  sm:h-[300px] md:h-[300px] lg:h-[450px] md:block hidden"></img>
        </div>
        </div>
        
        {/* start main center section */}
        {/* ************************************************* */}
        <div className="hero_center">
          <ul className="flex justify-around   py-[32px] rounded-[16px] shadow-[0_15px_15px_0_rgb(0_0_0_/_5%)]  bg-white">
            <li className="text-center "> <h4 className=" text-[#ffaf35] font-[700] text-[34px] ">10k+</h4>
              <span className="text-[#717171] text-[17px]">student</span></li>
            <li className="text-center  "><h4 className=" text-[#ffaf35] font-[700] text-[34px] " >20+</h4>
              <span className="text-[#717171] text-[17px]">Quality Course</span></li>
            <li className="text-center "><h4 className=" text-[#ffaf35] font-[700]   text-[34px]">10+</h4>
              <span className="text-[#717171] text-[17px]">Experience Mentors</span></li>
        </ul>
        </div>

      </section>
      {/* end hero section */}
      {/* ******************************************************************* */}
      <main>
      {/* start about courses section  */}
      <Courses/>
      {/* end about courses section  */}
      {/* start information sectio */}
      <Information />
      {/* end information section */}
      {/* //********************************************************************** */}
      {/* start mentor section */}
            <section id="Mentor" className='mentor md:px-[150px] h-[100vh] bg-[#f2f5f5]'>
              <h2 className='text-[50px] font-[700]  text-center md:pt-[10px] pt-[100px]'>Our Expert Mentors</h2>
              <Mentores />
                </section>
      {/*  end mentor section */}
      {/* ******************************************************** */}
        <Contact />
           </main>
    </div>
  );
}
