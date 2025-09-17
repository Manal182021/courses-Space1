import React from 'react'
import Mentores from '../component/Mentors'

const page = () => {
  return (
      <>
      <section className='mentor md:px-[150px] h-[100vh] bg-[#f2f5f5]'>
        <h2 className='text-[50px] font-[700]    text-center pt-[10px]'>Our Expert Mentors</h2>
        <Mentores className="" />
              
      </section>
  
        
    </>
  )
}

export default page