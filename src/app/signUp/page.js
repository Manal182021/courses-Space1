const dynamic ="force-dynamic "
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="contact-form-section pt-[100px] h-[100vh] flex justify-center bg-[#]">
      <form className="contact-form md:w-[30%]  bg-[#127c71] border-[2px] border-[#ffffff1a] rounded-[20px] backdrop-blur-[20px] p-[40px] mb-[30px] ">
        <div className="form-group  ">
          <label className="block mb-[10px] text-[#ffffffcc]" htmlFor="name" >Your Name</label>
          <input className="w-[100%] p-[15px] bg-white border-[1px] border-[#127c71] rounded-[20px] text-[#717171] text-[16px] transition-[.3s all ease-in] " type="text" id="name" name="name" required placeholder="Enter Your Name " />
        </div>

        <div className="form-group">
          <label  className="block mb-[10px] text-[#ffffffcc]" htmlFor="email">Email Address</label>
          <input className="w-[100%] p-[15px] bg-white border-[1px] border-[#127c71] rounded-[20px] text-[#717171] text-[16px] transition-[.3s all ease-in] " type="email" id="email" name="email" required placeholder="Enter Your Email"/>
        </div>

        <div className="form-group">
          <label  className="block mb-[10px] text-[#ffffffcc]" htmlFor="password">PassWord</label>
          <input className="w-[100%] p-[15px]  bg-white border-[1px] border-[#127c71] rounded-[20px] text-[#717171] text-[16px] transition-[.3s all ease-in] " type="password" id="password" name="pass" required placeholder="Enter Strong Password"/>
        </div>

        <div className="form-group">
          <label  className="block mb-[10px] text-[#ffffffcc]" htmlFor="password">Confirm Password</label>
          <input className="w-[100%] p-[15px]  bg-white border-[1px] border-[#127c71] rounded-[20px] text-[#717171] text-[16px] transition-[.3s all ease-in] mb-[20px] "  type="password" id="password" name="cofirmpass" required></input>
        </div>

        <button type="submit" className="submit-btn bg-linear-to-r from-[#667eea] to-[#ffaf35] text-white border-0 px-[40px] py-[15px] text-[18px] rounded-[30px] cursor-pointer w-[100%]">
          <Link href={'/'}> Sign Up</Link>
        </button>
      </form>
    </section>
  );
};

export default Page;
