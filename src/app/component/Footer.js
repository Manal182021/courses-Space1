import React from 'react'
import { Facebook, GitHub, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'

const Footer = () => {
  return (
      <>
          <footer className='px-[150px] lg:h-[50vh] h-[100vh] bg-[#127C71] relative bottom-0 left-0'>
              <div className='container grid lg:grid-cols-4 md:grid-col-2 grid-cols-1 gap-[30px] lg:pt-[100px] text-white'>
                  <ul >
                      <li><h4 className='text-[28px] mb-[20px] font-[700]'>Coursespace</h4></li>
                      <li><p className='mb-[10px] text-[16px]'>  Coursespace is an online learning platform that has been operating since 2018 until now.</p></li>
                      <li> <ul className='flex  justify-between'>
                                <li><a>  <Instagram />   </a></li>
                                <li><a> <Facebook /></a></li>
                                <li><a> <YouTube /></a></li>
                                <li><a> <LinkedIn /> </a></li>
                                <li><a><GitHub /></a></li>
                                <li><a>< Twitter /></a></li>
                            </ul>
                      </li>
                  </ul>
                  <ul>
                      <li className='text-[17px] mb-[10px] font-[700]'>Course</li>
                      <li className='text-[16px] mb-[8px] font-[400]'>UI/UX Design</li>
                      <li className='text-[16px] mb-[8px] font-[400]'>Mobile Development</li>
                      <li className='text-[16px] mb-[8px] font-[400]'>Machine Learning</li>
                      <li className='text-[16px] mb-[8px] font-[400]'>Web Development</li>
                  </ul>
                  <ul>
                      <li className='text-[17px] mb-[10px] font-[700]'>Menu</li>
                      <li className='text-[16px] mb-[8px] font-[400]'><a href='/'>Home</a></li>
                      <li className='text-[16px] mb-[8px] font-[400]'><a href='/courses'>Courses</a></li>
                      <li className='text-[16px] mb-[8px] font-[400]'><a href='/testimonial'>Testimonial</a></li>
                      <li className='text-[16px] mb-[8px] font-[400]'><a href='/mentor'>Mentor</a></li>
          
                  </ul>
                  <ul>
                      <li className='text-[17px] mb-[10px] font-[700]'>About</li>
                      <li className='text-[16px] mb-[8px] font-[400]'>UI/UX Design</li>
                      <li className='text-[16px] mb-[8px] font-[400]'>Contact Us</li>
                      <li className='text-[16px] mb-[8px] font-[400]'>Privacy & Policy</li>
                      <li className='text-[16px] mb-[8px] font-[400]'>Term & Condition</li>
                  </ul>
                  
              </div>
          </footer>
      </>
  )
}

export default Footer