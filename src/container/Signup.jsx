import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowForward, IoLogoLinkedin } from "react-icons/io";
import { RiGoogleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Signup() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Registration</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Registration</li>
                        </ul>

                    </div>
                </div>
            </section>

            <section id="registration-form">
                <div className="containercust">
                    <div className="grid grid-cols-12 ">
                        <form action="" className="col-span-12 min-[768px]:col-span-10 min-[992px]:col-span-8  lg:col-span-7 min-[768px]:col-start-2 min-[992px]:col-start-3 lg:col-start-4 
                         border-t-4 border-t-[#006838] p-[30px] md:p-[50px] shadow-lg  ">
                            <h4 className="text-[22px] md:text-[24px] font-merriweather font-[500] text-center">Registration</h4>

                            <div className="form-social grid grid-cols-12 md:gap-x-6 gap-y-3 md:gap-y-5 my-7 md:my-10">
                                <div className="col-span-12 md:col-span-6">
                                    <a href="#" className="hover:bg-[#3b5999] hover:text-white group">
                                        <AiFillFacebook className="text-[#3b5999] text-[20px] group-hover:text-white" />
                                        Import From Facebook
                                    </a>
                                </div>

                                <div className="col-span-12 md:col-span-6">
                                    <a href="#" className="hover:bg-[#dd4b39] hover:text-white group" >
                                        <RiGoogleLine className="text-[#dd4b39] text-[20px] group-hover:text-white" />
                                        Import From Facebook
                                    </a>
                                </div>

                                <div className="col-span-12 md:col-span-6">
                                    <a href="#" className="hover:bg-[#e4405f] hover:text-white group">
                                        <FaInstagram className="text-[#e4405f] text-[20px] group-hover:text-white" />
                                        Import From Facebook
                                    </a>
                                </div>

                                <div className="col-span-12 md:col-span-6">
                                    <a href="#" className="hover:bg-[#0077b5] hover:text-white group" >
                                        <IoLogoLinkedin className="text-[#0077b5] text-[20px] group-hover:text-white" />
                                        Import From Facebook
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 my-[25px] md:my-[35px]">
                                <div className="flex-1 h-[1px] bg-gray-300"></div>
                                <span className="text-gray-500 text-[15px]">
                                    Or
                                </span>
                                <div className="flex-1 h-[1px] bg-gray-300"></div>
                            </div>

                            <input type="text" name="name" id="name" placeholder="Name" />

                            <input type="text" name="email" id="email" placeholder="Email" />

                            <input type="text" name="password" id="password" placeholder="Password" />

                            <input type="text" name="cpassword" id="cpassword" placeholder="Confirm Password" />

                            <div className="checkbox flex items-center gap-x-3">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    className="checkbox-input !w-fit !mb-0 scale-120"
                                />
                                <label className="text-[#838181]">Agree to our <a href="#" className="text-[#88C250] hover:underline">Terms and Conditions</a></label>
                            </div>

                            <button className="btn sm:py-3 min-[992px]:!py-[14px] !w-full !mt-10">
                                Registration
                            </button>

                            <p className="font-poppins text-[14px] text-gray-500 text-center mt-4">
                                Already have an account? <NavLink to={'/login'} className="text-[#006838] hover:underline">Login Now</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Signup;