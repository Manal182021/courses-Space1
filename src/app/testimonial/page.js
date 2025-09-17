import React from 'react'
import TestimonialSlide from '../component/TestimonialSlide'
import Todos from '../component/Todos'

const page = () => {
  return (
    <div>
      {/* start testimonial section */}
      {/* *********************************************************** */}
      <section className='testimonial bg-[#f2f5f5] h-[100vh] lg:px-[150px] p-[50px] md:flex  justify-between font-Cabin'>
        {/* start left testimonial */}
        {/* ****************************** */}
        <div className='testimonial_left md:w-[50%] w-[100%] '>
          <h2 className="text-[50px] font-[700] lg:w-[80%] w-[100%] ">Testimonial What our <span className="text-[#127c71] relative  after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[6px] after:border-b-[4px] after:border-[#ffaf35] after:rounded-full after:-rotate-4 ">Students </span>Say</h2>
          <TestimonialSlide />
        </div>
        {/* start right testimonial  */}
        {/* ****************************** */}
        <div>
          <img src={'/images/home-testimonial.png'}></img>
        </div>
<Todos/>
      </section>
      {/* end testimonial section */}
      {/* ************************************************************** */}
    </div>
  )
}

export default page