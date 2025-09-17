"use client";

import React from 'react'

const Button = ({handleclick,textColor,bgColor,btnName}) => {
  return (
    <div> <button onClick={handleclick} className="mr-[24px] cursor-pointer text-[14px] ${textColor} ${bgColor} font-[500] tracking-[1px] rounded-[12px] border-[2px] border-[#127C71] px-[12px] py-[6px]"  >
         {btnName}
    </button></div>
  )
}

export default Button