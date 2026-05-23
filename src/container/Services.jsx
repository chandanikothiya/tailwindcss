import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { PiAmbulance } from "react-icons/pi";
import { RiStethoscopeFill } from "react-icons/ri";
import { GiMicroscope } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbHandThreeFingers } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

function Services() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Services</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Services</li>
                        </ul>

                    </div>
                </div>
            </section>

            <section id="service" className="!mt-[60px] md:!mt-[100px]">
                <div className="containercust">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[32px]  text-center">
                        <span className="main">Services Provided By MediGrids</span>
                        <span className="bg left-[50%] translate-x-[-50%]">Services</span>
                    </h2>

                    <hr className="w-[50px] mx-auto mt-4 h-[3.5px] rounded-[5px] border-0 bg-[#88C250]" />

                    <p className="md:w-[730px] subtitle mx-auto text-center">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>

                    <div className="grid grid-cols-12 mt-9 md:mt-15 gap-y-8 min-[768px]:gap-8 min-[992px]:gap-0">
                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                                    border-gray-200 p-8 md:p-10 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                                        group-hover:bg-white ">
                                <PiAmbulance className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Fast Ambulance</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                            group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[100px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                            group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:-right-10 2xl:right-0" />
                        </div>

                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                                    border-gray-200 p-8 md:p-10 min-[992px]:border-l-0 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                                        group-hover:bg-white ">
                                <RiStethoscopeFill className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Dental Specialist</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                            group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[100px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                            group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:right-0 2xl:right-0" />
                        </div>
                        

                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                                    border-gray-200 p-8 md:p-10 min-[992px]:border-l-0 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                                        group-hover:bg-white ">
                                <GiMicroscope className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Modern Laboratory</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                            group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[100px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                            group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:right-0 2xl:right-10" />
                        </div>


                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                                    border-gray-200 p-8 md:p-10 min-[992px]:border-t-0 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                                        group-hover:bg-white ">
                                <HiOutlineUserGroup className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Children Center</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                            group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[100px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                            group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:right-0 2xl:right-0" />
                        </div>


                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                                    border-gray-200 p-8 md:p-10 min-[992px]:border-l-0 min-[992px]:border-t-0 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                                        group-hover:bg-white ">
                                <FaRegHeart className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Heart Surgery</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                            group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[100px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                            group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:right-0 2xl:right-0" />
                        </div>


                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                                    border-gray-200 p-8 md:p-10 min-[992px]:border-l-0 min-[992px]:border-t-0 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                                        group-hover:bg-white ">
                                <TbHandThreeFingers className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Care Advice</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                            group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[100px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                            group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:right-0 2xl:right-0" />
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}

export default Services;