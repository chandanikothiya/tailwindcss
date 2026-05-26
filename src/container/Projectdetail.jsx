import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaFacebookSquare, FaLinkedin, FaPinterest, FaRegEdit, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoIosArrowForward, IoIosCheckbox } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdFileCopy, MdOutlineMail } from "react-icons/md";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { RiUser6Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { NavLink } from "react-router-dom";

function Projectdetail() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Project Details</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Project Details</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="project-detail">
                <div className="containercust">
                    <div className="grid grid-cols-12 md:ap-x-7">
                        <div className="col-span-12 min-[992px]:col-span-8">
                            <div className="img-box h-fit md:h-[611px] w-[296px] min-[576px]:w-full">
                                <img src="../../../public/assets/images/d22.jpg" alt="" className="h-full w-full object-contain object-top" />
                            </div>

                            <div className="detail-text">
                                <h3 className="text-[28px] font-merriweather pb-[30px] border-b-1 border-b-gray-300 my-[30px]">About this Test</h3>

                                <p className="text-[#888888] font-poppins text-[14px] leading-6">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                                    This book is a treatise on the theory of ethics,
                                </p>

                                <h4 className="text-[20px] font-merriweather font-medium py-[25px]">Significance and Impact</h4>

                                <p className="text-[#838181] font-poppins text-[14px] leading-6">
                                    Languages realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.
                                    If several languages coalesce, the grammar of the resulting. would be desirable.
                                </p>

                                <div className="grid grid-cols-12 md:gap-x-6 gap-y-4 my-8">
                                    <div className="col-span-12 md:col-span-6">
                                        <img src="../../../public/assets/images/di1.jpg" alt="" className="h-full w-[296px] min-[576px]:w-full object-contain object-top" />
                                    </div>

                                    <div className="col-span-12 md:col-span-6">
                                        <img src="../../../public/assets/images/c1.jpg" alt="" className="h-full w-[296px] min-[576px]:w-full object-contain object-top" />
                                    </div>
                                </div>

                                <h4 className="text-[20px] font-merriweather  mt-[30px]">Result For The Blood Test</h4>

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
                            </div>
                        </div>
                        <div className="col-span-12 min-[992px]:col-span-4">
                            <div className="siderbar">
                                <div className="search siderbar-card">
                                    <h3>About Researcher</h3>

                                    <div className="doc-img h-full lg:h-[246px] xl:h-[384px] my-[30px] w-full">
                                        <img src="../../../public/assets/images/te2.jpg" alt="" className="h-full w-full" />
                                    </div>

                                    <h6 className="text-[16px] font-merriweather font-[500] text-center">Dr.Alice Williams</h6>

                                    <p className="text-[#838181] font-poppins text-[14px] leading-6 text-center my-[15px]">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                                    </p>

                                    <div className="dsocial text-[#888888] flex text-[15px] gap-x-3 items-center justify-center">
                                        <a href="#"><FaFacebookF /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><BiLogoInstagramAlt className="text-[18px]" /></a>
                                        <a href="#"><FaLinkedin /></a>
                                        <a href="#"> <FaYoutube /></a>
                                    </div>
                                </div>
                            </div>


                            <div className="siderbar mt-[30px]">
                                <div className="search siderbar-card">
                                    <h3>Service Category</h3>

                                    <ul className="mt-[30px]">
                                        <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838] flex items-center gap-x-3 text-[#838181]">
                                          <span className="text-[#006838]"><MdFileCopy /></span>
                                          Researcher Name : Dr.Alice Williams
                                        </li>

                                        <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838] flex items-center gap-x-3 text-[#838181]">
                                          <span className="text-[#006838]"><RiUser6Line /></span>
                                          Client : Mononucleosis Test
                                        </li>

                                         <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838] flex items-center gap-x-3 text-[#838181]">
                                          <span className="text-[#006838]"><FaRegEdit /></span>
                                          Category : Vulputate Cursus
                                        </li>

                                        <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838] flex items-center gap-x-3 text-[#838181]">
                                          <span className="text-[#006838]"><SlCalender /></span>
                                          Research Year : 2023
                                        </li>

                                        <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838] flex items-center gap-x-3 text-[#838181]">
                                          <span className="text-[#006838]"><GrLocation /></span>
                                           Location : Bulls Stadium, Califorina
                                        </li>

                                        <li className="py-3  duration-500 hover:pl-[10px] hover:text-[#006838] flex items-center gap-x-3 text-[#838181]">
                                          <span className="text-[#006838]"><FaRegCircleCheck /></span>
                                          Delivery Mode : Stipulated Price
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Projectdetail;