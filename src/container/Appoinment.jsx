import React from "react";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { PiStethoscopeFill } from "react-icons/pi";
import { RiUser6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Appoinment() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Appointment</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Appointment</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="apptform">
                <div className="containercust">
                    <div className="grid grid-cols-12">
                        <div className="siderbar-card col-span-12 min-[992px]:col-span-8 min-[992px]:col-start-3">

                            <h3 className="!text-[22px]  md:!text-[26px]  font-merriweather font-[600] mb-[20px]">Book An Appointment</h3>

                            <p className="text-[16px] text-[#838181]">
                                Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our doctors will receive or return any urgent calls.
                            </p>

                            <form action="" className="grid grid-cols-12 gap-4 appoinmentform mt-10">
                                <div className="col-span-12 md:col-span-6 formrow">
                                    <input type="text" name="name" id="name" placeholder="Your Name..." />
                                    <RiUser6Line />
                                </div>

                                <div className="col-span-12 md:col-span-6 formrow">
                                    <input type="text" name="email" id="email" placeholder="Your Email" />
                                    <MdOutlineEmail />
                                </div>

                                <div className="col-span-12 md:col-span-6 formrow">
                                    <input type="text" name="phone" id="phone" placeholder="Phone Number" />
                                    <MdOutlinePhone />
                                </div>

                                <div className="col-span-12 md:col-span-6 formrow">
                                    <select className="w-full text-gray-400">
                                        <option value='department' selected >Department</option>
                                        <option value='genral'>General Surgery</option>
                                        <option value='Gastroenterology'>Gastroenterology</option>
                                        <option value='Nutrition'>Nutrition & Dietetics</option>
                                        <option value='Cardiology'>Cardiology</option>
                                        <option value='Neurology'>Neurology</option>
                                        <option value='Pedia    tric'>Pediatric</option>
                                    </select>
                                    <BsFileEarmarkRuled />
                                </div>

                                <div className="col-span-12 md:col-span-6 formrow">
                                    <input type="text" name="doctore" id="doctore" placeholder="Doctore " />
                                    <PiStethoscopeFill />
                                </div>

                                <div className="col-span-12 md:col-span-6 formrow">
                                    <input type="date" name="phone" id="phone" placeholder="Phone Number" className="!w-full !text-gray-400" />
                                </div>

                                <div className="col-span-12 formrow">
                                    <textarea id="message" name="message" placeholder="Your Message" rows="6" cols="50" className="!w-full">
                                    </textarea>
                                </div>

                                <div className="col-span-12 min-[576px]:col-span-6 md:col-span-4 xl:col-span-3">
                                    <button className="btn sm:py-3 min-[992px]:py-5 w-full !text-[16px]">
                                        Get Appoinment
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Appoinment;