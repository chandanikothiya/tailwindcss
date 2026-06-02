import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Department() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Department</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Department</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="department">
                <div className="containercust">
                    <div className="grid grid-cols-12 gap-x-7">
                        <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-x-6 gap-y-8">
                            <div className="col-span-6">
                                <div className="dimg">
                                    <img src="../../../public/assets/images/c1.jpg" alt="" />
                                </div>
                                <h4>Cardiology</h4>
                            </div>

                            <div className="col-span-6">
                                <div className="dimg">
                                    <img src="../../../public/assets/images/d1.jpg" alt="" />
                                </div>
                                <h4>Diabetes</h4>
                            </div>

                            <div className="col-span-6">
                                <div className="dimg">
                                    <img src="../../../public/assets/images/p1.jpg" alt="" />
                                </div>
                                <h4>Pediatric</h4>
                            </div>

                            <div className="col-span-6">
                                <div className="dimg">
                                    <img src="../../../public/assets/images/n1.jpg" alt="" />
                                </div>
                                <h4>Neurosurgery</h4>
                            </div>

                            <div className="col-span-6">
                                <div className="dimg">
                                    <img src="../../../public/assets/images/d2.jpg" alt="" />
                                </div>
                                <h4>Stomatology</h4>
                            </div>

                            <div className="col-span-6">
                                <div className="dimg">
                                    <img src="../../../public/assets/images/d3.jpg" alt="" />
                                </div>
                                <h4>Radiology</h4>
                            </div>

                            <div className="col-span-6">
                                <div className="dimg">
                                    <img src="../../../public/assets/images/d4.jpg" alt="" />
                                </div>
                                <h4>Neurology</h4>
                            </div>

                            <div className="col-span-6">
                                <div className="dimg">
                                    <img src="../../../public/assets/images/d5.jpg" alt="" />
                                </div>
                                <h4>Ophthalmology</h4>
                            </div>


                        </div>

                        <div className="col-span-12 min-[992px]:col-span-4">
                            <div className="ml-6">
                                <div className="siderbar">
                                    <div className="search siderbar-card">

                                        <h3 className="text-[20px] font-medium">Opening Hours</h3>
                                        <ul className="grid grid-cols-12 text-[14px] gap-y-2 font-medium mt-5 gap-x-6 text-[#888888] font-poppins">
                                            <li className="col-span-6 md:col-span-8 lg:col-span-6 "><a href="#">Mon - Tue</a></li>
                                            <li className="col-span-6  md:col-span-4 lg:col-span-6"><a href="#">08:30 - 18:30</a></li>
                                            <li className="col-span-6 md:col-span-8 lg:col-span-6"><a href="#"> Wed- Thu</a></li>
                                            <li className="col-span-6 md:col-span-4 lg:col-span-6"><a href="#">08:30 - 18:30</a></li>
                                            <li className="col-span-6 md:col-span-8 lg:col-span-6"><a href="#"> Friday</a></li>
                                            <li className="col-span-6 md:col-span-4 lg:col-span-6"><a href="#">08:30 - 18:30</a></li>
                                            <li className="col-span-6 md:col-span-8 lg:col-span-6"><a href="#">Saturday</a></li>
                                            <li className="col-span-6 md:col-span-4 lg:col-span-6"><a href="#">08:30 - 18:30</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="siderbar mt-[30px]">
                                    <div className="search siderbar-card">
                                        <h3>Department Address</h3>

                                        <div className="search-input flex  mt-[30px] gap-x-5">
                                            <IoLocationOutline className="text-4xl text-[#006838]" />
                                            <p className="text-[15px] text-[#888888] font-poppins">2130 Fulton Street San Diego CA 94117-1080 USA</p>
                                        </div>

                                        <div className="search-input flex  mt-[30px] gap-x-5 items-start">
                                            <FiPhone className="text-[25px] text-[#006838]" />
                                            <div>
                                                <p className="text-[15px] text-[#888888] font-poppins">Coll Us Now!</p>
                                                <a href="#" className="font-poppins text-[15px] font-medium hover:text-[#006838]">+898 68679 575</a>
                                            </div>
                                        </div>

                                        <div className="search-input flex  mt-[30px] gap-x-5 items-start">
                                            <MdOutlineMail className="text-[25px] text-[#006838]" />
                                            <div>
                                                <p className="text-[15px] text-[#888888] font-poppins">Do you have a Question?</p>
                                                <a href="#" className="font-poppins text-[15px] font-medium hover:text-[#006838]">info@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="siderbar mt-[30px]">
                                    <div className="search siderbar-card">
                                        <h3>Service Category</h3>

                                        <ul className="mt-[30px]">
                                            <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                                <a href="#" className="flex items-center justify-between">
                                                    All Services
                                                    <BsArrowRight />
                                                </a>
                                            </li>

                                            <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                                <a href="#" className="flex items-center justify-between">
                                                    Cardiyiology
                                                    <BsArrowRight />
                                                </a>
                                            </li>

                                            <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                                <a href="#" className="flex items-center justify-between">
                                                    Urology
                                                    <BsArrowRight />
                                                </a>
                                            </li>

                                            <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                                <a href="#" className="flex items-center justify-between">
                                                    Neurology
                                                    <BsArrowRight />
                                                </a>
                                            </li>

                                            <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                                <a href="#" className="flex items-center justify-between">
                                                    Dentist
                                                    <BsArrowRight />
                                                </a>
                                            </li>

                                            <li className="py-3 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                                <a href="#" className="flex items-center justify-between">
                                                    Orthopedic
                                                    <BsArrowRight />
                                                </a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Department;