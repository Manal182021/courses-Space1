const dynamic = "force-static";
import ARtTrackIcon from "@mui/icons-material/ArtTrack";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
export default async function AppSSG() {
    return (
        <>
            {/* start information section */}
            {/* ********************************************************** */}
            <section id="Testimonial" className="info h-[100vh] md:px-[150px] px-[50px] lg:flex justify-between md:py-[100px] font-Cabin">
                <div className="info_left md:w-[35%] w-[100%] relative lg:block hidden">
                    <div className="info_img ">
                          <img src={'/images/home-feature.png'}></img>
                    </div>

                    {/* info top  */}
                    {/* ************************ */}
                    <div className="top bg-white shadow-[0_4px_5px_rgba(0,0,0,0.2)] p-[10px] absolute top-[-25px] right-[-18px] rounded-[5px]">
                        <h5 className="text-[17px] leading-[1.4] font-[600]">Lorem ipsum dolor</h5>
                        <ul className="text-[14px] text-[#717171] font-[400] leading-[1.75] ">
                            <li className="py-[10px] relative after:absolute after:content''] after:h-[4px] after:rounded-[5px] after:w-[90%] after:bg-[#eeeeee] after:bottom-0 after:left-0    before:absolute before:content''] before:h-[4px] before:rounded-[5px] before:w-[60%] before:z-10 before:bg-[#f35ffa] before:bottom-0 before:left-0">UI/UI Design</li>
                            <li className="py-[10px] relative after:absolute after:content''] after:h-[4px] after:rounded-[5px] after:w-[90%] after:bg-[#eeeeee] after:bottom-0 after:left-0    before:absolute before:content''] before:h-[4px] before:rounded-[5px] before:w-[30%] before:z-10 before:bg-[#26e8bd] before:bottom-0 before:left-0">Mobile Development</li>
                            <li className="py-[10px] relative after:absolute after:content''] after:h-[4px] after:rounded-[5px] after:w-[90%] after:bg-[#eeeeee] after:bottom-0 after:left-0    before:absolute before:content''] before:h-[4px] before:rounded-[5px] before:w-[45%] before:z-10 before:bg-[#0063ff] before:bottom-0 before:left-0">Web Development</li>
                        </ul>
                    </div>

                    {/* info bottom */}
                    {/* *************************** */}
                    <div className="bottom  bg-white shadow-[0_4px_5px_rgba(0,0,0,0.2)] p-[10px] absolute bottom-[20px] left-[-18px] rounded-[5px]">
                        <h5 className="text-[17px] leading-[1.4] font-[600]">Lorem ipsum </h5>
                        <h6 className="text-[14px] text-[#717171] font-[400] leading-[1.75] py-[10px]">Lorem ipsum </h6>
                        <h3 className="text-[#32dc88] text-[22px] flex justify-center items-center">  75%</h3>
                    </div>
                </div>

                {/* info right */}
                {/* ******************************** */}
                <div className="info_right lg:w-[60%] w-[100%]">
                    <h2 className="text-[50px] font-[700] lg:w-[80%] w-[100%] ">Make your <span className="text-[#127c71] relative  after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[6px] after:border-b-[4px] after:border-[#ffaf35] after:rounded-full after:-rotate-4 ">Learning </span>Enjoyable</h2>
                    <p className="text-[#717171] text-[16px] leading-[1.5] my-[16px]">Set the way of learning according to your wishes with some of the benefits that you get us, so you on enjoy the lessons that we provide.</p>

                    {/* start cards informs */}
                    {/* ***************************** */}
                    <div className="informs grid  md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div className="inform flex gap-[10px]  bg-white shadow-[0_4px_5px_rgba(0,0,0,0.2)] rounded-[5px] p-[20px] hover:translate-y-[10px]  hover:cursor-pointer transition-transform duration-700 ease-in-out">
                            <div className="icon flex justify-center items-center bg-[#127c71] rounded-[50%] h-[60px] w-[60px] mr-[10px] text-white"><ARtTrackIcon /></div>
                            <div className="ifom">
                                <h4 className="text-[#ffaf35] text-[16px] mb-[8px] leading-[1.4] font-[600]">Easy Accessable</h4>
                                <p className="text-[#717171] text-[14px] leading-[1.3]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>
                        <div className="inform flex gap-[10px]  bg-white shadow-[0_4px_5px_rgba(0,0,0,0.2)] rounded-[5px] p-[20px] hover:translate-y-[10px] hover:cursor-pointer transition-transform duration-700 ease-in-out">
                            <div className="icon flex justify-center items-center bg-[#127c71] rounded-[50%] h-[60px] w-[60px] mr-[10px] text-white"><AttachMoneyIcon />  </div>
                            <div className="ifom">
                                <h4 className="text-[#ffaf35] text-[16px] mb-[8px] leading-[1.4] font-[600]">More Affordable Cost</h4>
                                <p className="text-[#717171] text-[14px] leading-[1.3]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>
                        <div className="inform flex gap-[10px]  bg-white shadow-[0_4px_5px_rgba(0,0,0,0.2)] rounded-[5px] p-[20px] hover:translate-y-[10px]  hover:cursor-pointer transition-transform duration-700 ease-in-out">
                            <div className="icon flex justify-center items-center bg-[#127c71] rounded-[50%] h-[60px] w-[60px] mr-[10px] text-white"> <LocalLibraryIcon /> </div>
                            <div className="ifom">
                                <h4 className="text-[#ffaf35] text-[16px] mb-[8px] leading-[1.4] font-[600]">Flexible Study Time</h4>
                                <p className="text-[#717171] text-[14px] leading-[1.3]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>
                        <div className="inform flex gap-[10px]  bg-white shadow-[0_4px_5px_rgba(0,0,0,0.2)] rounded-[5px] p-[20px]  hover:translate-y-[10px]  hover:cursor-pointer transition-transform duration-700 ease-in-out">
                            <div className="icon flex justify-center items-center bg-[#127c71] rounded-[50%] h-[60px] w-[60px] mr-[10px] text-white">  <ContactSupportIcon /> </div>
                            <div className="ifom">
                                <h4 className="text-[#ffaf35] text-[16px] mb-[8px] leading-[1.4] font-[600]">Consultation With Mentor</h4>
                                <p className="text-[#717171] text-[14px] leading-[1.3]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* end 
             */}
        </>   
    )
    
}