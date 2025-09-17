import React from 'react'

const Contact = () => {
  return (
      <>
          {/* start contact section */}
          <section className='contact font-cabin md:px-[150px] py-[100px] text-center h-[100vh]'>
              <div className='container rounded-[40px] bg-[#ffaf35] py-[100px] '>
                  <h2 className='text-[50px] font-[700]  text-center '>Subscribe to Our News Letter</h2>
                  <h4 className='text-[16px] font-[400] leading-[1.4] mb-[48px]'>Subscribe to our newsletter to get information about our courses.</h4>
                  
                  {/* start form  */}
              <form className='pb-[50px]'>
                      <input type='email' placeholder='Enter Your Email Address' required className='px-[16px] border-0 outline-0 rounded-[12px] h-[48px] bg-white items-center font-[400]'></input>
                      <button className='text-16px text-[#fbfbfb] bg-[#127C71] font-[500] ml-[40px] h-[48px] rounded-[12px] px-[16px]'>Subscribe</button>
              </form>    
              </div>
          </section>
          {/* end contact section */}
          
    </>
  )
}

export default Contact