import React from "react";
import { IoIosArrowForward, IoIosCheckbox, IoIosCheckmark } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { PiMagnifyingGlassBold, PiQuotes } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmark, IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { CiSquareCheck } from "react-icons/ci";

function ServiceDetail() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Service Details</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Service Details</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="service-details">
                <div className="containercust">
                    <div className="grid grid-cols-12  gap-y-7 min-[992px]:gap-x-6">
                        <div className="col-span-12 min-[992px]:col-span-4">
                            <div className="siderbar">
                                <div className="search siderbar-card">
                                    <h3>Search Here</h3>

                                    <form className="search-input flex border-1 border-gray-200 py-[6px] pl-4 pr-[6px] justify-between mt-[30px]">
                                        <input type="text" name="search" id="search" placeholder="Search Here..." className="w-[80%]" />
                                        <PiMagnifyingGlassBold className="text-[40px] bg-[#006838] text-white p-3" />
                                    </form>
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
                        </div>

                        <div className="col-span-12 min-[992px]:col-span-8">
                            <div className="detail-content min-[992px]:ml-[30px]">
                                <div className="detail-img h-[175px] min-[576px]:h-[262px] min-[768px]:h-[402px] min-[992px]:h-[482px]">
                                    <img src="../../../public/assets/images/neurology.jpg" alt="" className="h-full w-full object-cover" />
                                </div>

                                <div className="detail-text">
                                    <h3 className="text-[28px] font-merriweather pb-[30px] border-b-1 border-b-gray-300 my-[30px]">Introduction to Neurology</h3>

                                    <p className="text-[#888888] font-poppins text-[14px] leading-6">
                                        Languages realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.
                                    </p>

                                    <p className="text-[#838181] font-poppins text-[14px] mt-[20px] leading-6">
                                        Languages realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.
                                        If several languages coalesce, the grammar of the resulting. would be desirable.
                                    </p>

                                    <h4 className="text-[20px] font-merriweather font-medium py-[25px]">Why Choose This Service</h4>

                                    <p className="text-[#838181] font-poppins text-[14px] leading-6">
                                        Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium dolore Totam rem aperiam with a long list of products and never ending customer support.
                                    </p>

                                    <ul className="flex flex-col gap-y-3 py-8">
                                        <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                            <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                            Cerebrovascular disease, such as stroke
                                        </li>

                                        <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                            <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                            Demyelinating diseases of the central nervous system, such as multiple sclerosis
                                        </li>

                                        <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                            <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                            Headache disorders
                                        </li>

                                        <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                            <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                            Infections of the brain and peripheral nervous system
                                        </li>

                                        <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                            <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                            Movement disorders, such as Parkinson's disease
                                        </li>
                                    </ul>

                                    <blockquote className="bg-[url('/assets/images/pattern2.png')] bg-cover p-10">
                                        <PiQuotes className="text-4xl text-white" />

                                        <h4 className="text-[14px] font-merriweather text-white leading-6 my-[20px]">"Perspiciatis undeomnis iste natus error sit voluptatem accusantium dolore Totam rem aperiam with a long
                                            list of products and never ending customer support."</h4>

                                        <span className="text-white text-[13px] font-poppins">-Dr.Alice Williams</span>
                                    </blockquote>

                                    <h4 className="text-[20px] font-merriweather  mt-[30px]">Education to Become a Neurologist in the United States</h4>

                                    <p className="text-[#838181] font-poppins text-[14px] leading-6 mt-[20px]">
                                        Many neurologists also have additional training or interest in one area of neurology, such as stroke, epilepsy, neuromuscular, sleep medicine,
                                        pain management, or movement disorders.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServiceDetail;

