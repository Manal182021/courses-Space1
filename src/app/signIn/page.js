const dynamic ="force-dynamic "
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="contact-form-section pt-[100px] h-[70vh] flex justify-center ">
      <form className="contact-form md:w-[30%]  bg-[#127c71] border-[2px] border-[#ffffff1a] rounded-[20px] backdrop-blur-[20px] p-[40px] mb-[30px] ">
        <div className="form-group">
          <label  className="block mb-[10px] text-[#ffffffcc]" htmlFor="email">Email Address</label>
          <input className="w-[100%] p-[15px] bg-white border-[1px] border-[#127c71] rounded-[20px] text-[#717171] text-[16px] transition-[.3s all ease-in] mb-[10px] outline-0" type="email" id="email" name="email" required placeholder="Enter Your Email"/>
        </div>

        <div className="form-group">
          <label  className="block mb-[10px] text-[#ffffffcc]" htmlFor="password">PassWord</label>
          <input className="w-[100%] p-[15px]  bg-white border-[1px] border-[#127c71] rounded-[20px] text-[#717171] text-[16px] transition-[.3s all ease-in] mb-[30px] outline-0 " type="password" id="password" name="pass" required placeholder="Enter Strong Password"/>
        </div>

        <button type="submit" className="submit-btn bg-linear-to-r from-[#667eea] to-[#ffaf35] text-white border-0 px-[40px] py-[15px] text-[18px] rounded-[30px] cursor-pointer w-[100%]">
          <Link href={'/'}> Sign In</Link>
        </button>
      </form>
    </section>
  );
};

export default Page;
