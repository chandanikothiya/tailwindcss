import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Bloggrid() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Blog Grid Sidebar</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Blog Grid Sidebar</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="blog">
                <div className="containercust">
                    <div className="grid grid-cols-12 gap-y-15 min-[992px]:gap-y-0 min-[992px]:gap-x-8 ">
                        <div className="col-span-12 min-[992px]:col-span-8  grid grid-cols-12 gap-4 gap-y-7">
                            <div className="col-span-12 grid grid-cols-12 group shadow-sm">
                                <div className="col-span-12 min-[768px]:col-span-5 overflow-hidden">
                                    <img src="../../../public/assets/images/blog1.jpg" alt="" className="w-[100%] h-[100%] object-cover object-center duration-500 group-hover:scale-110" />
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-7 py-8 px-7 border-1 md:border-l-0 border-[#e2dede]">
                                    <h2 className="text-[18px] font-merriweather font-[600] hover:text-[#006838]"><a href="#">These blood markers may higher risk of disease</a></h2>

                                    <p className="font-poppins text-[14px] text-[#888888] mt-5 leading-6">The price is something not necessarily defined as financial. It could be time, effort and sacrifice.
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, don't look believable.</p>

                                    <div className="user-info text-[#888888] flex gap-3 items-center mt-8">
                                        <img src="../../../public/assets/images/comment1.jpg" alt="" className="w-[30px] h-[30px] rounded-full" />

                                        <h5 className="cursor-default hover:text-[#006838]">Alice Williams</h5>
                                        <p className="cursor-default hover:text-[#006838]"> 08 Mar 2023</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-span-12 grid grid-cols-12 group shadow-sm">
                                <div className="col-span-12 min-[768px]:col-span-5 overflow-hidden">
                                    <img src="../../../public/assets/images/blog2.jpg" alt="" className="w-[100%] h-[100%] object-cover object-center duration-500 group-hover:scale-110" />
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-7 py-8 px-7 border-1 md:border-l-0 border-[#e2dede]">
                                    <h2 className="text-[18px] font-merriweather font-[600] hover:text-[#006838]"><a href="#">Brushing your teeth may keep your heart healthy</a></h2>

                                    <p className="font-poppins text-[14px] text-[#888888] mt-5 leading-6">The price is something not necessarily defined as financial. It could be time, effort and sacrifice.
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, don't look believable.</p>

                                    <div className="user-info text-[#888888] flex gap-3 items-center mt-8">
                                        <img src="../../../public/assets/images/comment2.jpg" alt="" className="w-[30px] h-[30px] rounded-full" />

                                        <h5 className="cursor-default hover:text-[#006838]">Alrado Deyam</h5>
                                        <p className="cursor-default hover:text-[#006838]"> 10 April 2023</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-span-12 grid grid-cols-12 group shadow-sm">
                                <div className="col-span-12 min-[768px]:col-span-5 overflow-hidden">
                                    <img src="../../../public/assets/images/di2.jpg" alt="" className="w-[100%] h-[100%] object-cover object-center duration-500 group-hover:scale-110" />
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-7 py-8 px-7 border-1 md:border-l-0 border-[#e2dede]">
                                    <h2 className="text-[18px] font-merriweather font-[600] hover:text-[#006838]"><a href="#">The Loveliness Of The Youth</a></h2>

                                    <p className="font-poppins text-[14px] text-[#888888] mt-5 leading-6">The price is something not necessarily defined as financial. It could be time, effort and sacrifice.
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, don't look believable.</p>

                                    <div className="user-info text-[#888888] flex gap-3 items-center mt-8">
                                        <img src="../../../public/assets/images/comment1.jpg" alt="" className="w-[30px] h-[30px] rounded-full" />

                                        <h5 className="cursor-default hover:text-[#006838]">Alice Williams</h5>
                                        <p className="cursor-default hover:text-[#006838]"> 08 Mar 2023</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-span-12 grid grid-cols-12 group shadow-sm">
                                <div className="col-span-12 min-[768px]:col-span-5 overflow-hidden">
                                    <img src="../../../public/assets/images/di1.jpg" alt="" className="w-[100%] h-[100%] object-cover object-center duration-500 group-hover:scale-110" />
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-7 py-8 px-7 border-1 md:border-l-0 border-[#e2dede]">
                                    <h2 className="text-[18px] font-merriweather font-[600] hover:text-[#006838]"><a href="#">More than 80 clinical trials launch to test of the coronavirus .</a></h2>

                                    <p className="font-poppins text-[14px] text-[#888888] mt-5 leading-6">The price is something not necessarily defined as financial. It could be time, effort and sacrifice.
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, don't look believable.</p>

                                    <div className="user-info text-[#888888] flex gap-3 items-center mt-8">
                                        <img src="../../../public/assets/images/comment2.jpg" alt="" className="w-[30px] h-[30px] rounded-full" />

                                        <h5 className="cursor-default hover:text-[#006838]">Alrado Deyam</h5>
                                        <p className="cursor-default hover:text-[#006838]"> 10 April 2023</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-span-12 grid grid-cols-12 group shadow-sm">
                                <div className="col-span-12 min-[768px]:col-span-5 overflow-hidden">
                                    <img src="../../../public/assets/images/blog1.jpg" alt="" className="w-[100%] h-[100%] object-cover object-center duration-500 group-hover:scale-110" />
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-7 py-8 px-7 border-1 md:border-l-0 border-[#e2dede]">
                                    <h2 className="text-[18px] font-merriweather font-[600] hover:text-[#006838]"><a href="#">These blood markers may higher risk of disease</a></h2>

                                    <p className="font-poppins text-[14px] text-[#888888] mt-5 leading-6">The price is something not necessarily defined as financial. It could be time, effort and sacrifice.
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, don't look believable.</p>

                                    <div className="user-info text-[#888888] flex gap-3 items-center mt-8">
                                        <img src="../../../public/assets/images/comment1.jpg" alt="" className="w-[30px] h-[30px] rounded-full" />

                                        <h5 className="cursor-default hover:text-[#006838]">Alice Williams</h5>
                                        <p className="cursor-default hover:text-[#006838]"> 08 Mar 2023</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-span-12 grid grid-cols-12 group shadow-sm">
                                <div className="col-span-12 min-[768px]:col-span-5 overflow-hidden">
                                    <img src="../../../public/assets/images/blog2.jpg" alt="" className="w-[100%] h-[100%] object-cover object-center duration-500 group-hover:scale-110" />
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-7 py-8 px-7 border-1 md:border-l-0 border-[#e2dede]">
                                    <h2 className="text-[18px] font-merriweather font-[600] hover:text-[#006838]"><a href="#">Brushing your teeth may keep your heart healthy</a></h2>

                                    <p className="font-poppins text-[14px] text-[#888888] mt-5 leading-6">The price is something not necessarily defined as financial. It could be time, effort and sacrifice.
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, don't look believable.</p>

                                    <div className="user-info text-[#888888] flex gap-3 items-center mt-8">
                                        <img src="../../../public/assets/images/comment2.jpg" alt="" className="w-[30px] h-[30px] rounded-full" />

                                        <h5 className="cursor-default hover:text-[#006838]">Alrado Deyam</h5>
                                        <p className="cursor-default hover:text-[#006838]"> 10 April 2023</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-span-12 grid grid-cols-12 group shadow-sm">
                                <div className="col-span-12 min-[768px]:col-span-5 overflow-hidden">
                                    <img src="../../../public/assets/images/di2.jpg" alt="" className="w-[100%] h-[100%] object-cover object-center duration-500 group-hover:scale-110" />
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-7 py-8 px-7 border-1 md:border-l-0 border-[#e2dede]">
                                    <h2 className="text-[18px] font-merriweather font-[600] hover:text-[#006838]"><a href="#">The Loveliness Of The Youth</a></h2>

                                    <p className="font-poppins text-[14px] text-[#888888] mt-5 leading-6">The price is something not necessarily defined as financial. It could be time, effort and sacrifice.
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, don't look believable.</p>

                                    <div className="user-info text-[#888888] flex gap-3 items-center mt-8">
                                        <img src="../../../public/assets/images/comment1.jpg" alt="" className="w-[30px] h-[30px] rounded-full" />

                                        <h5 className="cursor-default hover:text-[#006838]">Alice Williams</h5>
                                        <p className="cursor-default hover:text-[#006838]"> 08 Mar 2023</p>
                                    </div>

                                </div>
                            </div>

                            <ul className="pagination col-span-12">
                                <li>Prev</li>
                                <li className="pactive">2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>Next</li>
                            </ul>
                        </div>
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
                                    <h3>Category</h3>

                                    <ul className="mt-[30px] text-[#838181]">
                                        <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                            <a href="#" className="flex items-center justify-between">
                                                Finance
                                            </a>
                                        </li>

                                        <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                            <a href="#" className="flex items-center justify-between">
                                                Marketing
                                            </a>
                                        </li>

                                        <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                            <a href="#" className="flex items-center justify-between">
                                                Operations
                                            </a>
                                        </li>

                                        <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                            <a href="#" className="flex items-center justify-between">
                                                Strategy
                                            </a>
                                        </li>

                                        <li className="py-3 border-b-1 border-gray-200 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                            <a href="#" className="flex items-center justify-between">
                                                People
                                            </a>
                                        </li>

                                        <li className="py-3 duration-500 hover:pl-[10px] hover:text-[#006838]">
                                            <a href="#" className="flex items-center justify-between">
                                                Jobs
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="siderbar mt-[30px]">
                                <div className="search siderbar-card">
                                    <h3>Popular Tags</h3>

                                    <div className="tags w-fit flex gap-3 flex-wrap mt-9">
                                        <a href="#">Operations</a>
                                        <a href="#">People</a>
                                        <a href="#">HR</a>
                                        <a href="#">Finance</a>
                                        <a href="#">Interview</a>
                                        <a href="#">Jobs</a>
                                        <a href="#">Business</a>
                                        <a href="#">Salary</a>
                                        <a href="#">Disease</a>
                                        <a href="#">Consult</a>
                                        <a href="#">Employee</a>
                                    </div>
                                </div>
                            </div>

                            <div className="siderbar mt-[30px]">
                                <div className="search siderbar-card">
                                    <h3>Make An Appointment</h3>

                                    <form className="mt-9">
                                        <div className="formrow">
                                            <input type="text" name="name" id="name" placeholder="Your Name..." />
                                        </div>

                                        <div className="formrow mt-3">
                                            <input type="text" name="email" id="email" placeholder="Your Email" />
                                        </div>

                                        <div className="formrow mt-3">
                                            <textarea id="message" name="message" placeholder="Your Message" rows="3" cols="50" className="!w-full">
                                            </textarea>
                                        </div>

                                        <button className="btn sm:py-3 min-[992px]:py-5  !px-10 !text-[16px]">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="siderbar mt-[30px]">
                                <div className="search siderbar-card">
                                    <h3>Need Help?</h3>
                                    <h3 className="!text-[24px] text-[#006838] font-merriweather mt-7">Online Help!</h3>
                                    <h5 className="text-[16px] font-merriweather font-[500] mt-1">+(123) 456-78-90</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Bloggrid;