import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Pricing() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Pricing Table</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Pricing Table</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="supscription">
                <div className="containercust">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[32px]  text-center">
                        <span className="main">Pricing Plan</span>
                        <span className="bg left-[50%] translate-x-[-50%]">PRICING</span>
                    </h2>

                    <hr className="w-[50px] mx-auto mt-4 h-[3.5px] rounded-[5px] border-0 bg-[#88C250]" />


                    <p className="md:w-[730px] subtitle mx-auto text-center">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>

                    <div className="supscription-cards grid grid-cols-12 gap-6 lg:gap-10 mt-8 md:mt-15">

                        <div className="supscription-card col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 lg:col-span-4">
                            <h5>Basic</h5>
                            <h3>$45</h3>
                            <h6>/ Monthly</h6>

                            <div className="scard-text mt-6">
                                <ul>
                                    <li className="border-b-1 border-gray-200">Routine Checkup</li>
                                    <li className="border-b-1 border-gray-200">24Th Assisance</li>
                                    <li className="border-b-1 border-gray-200">100 Text & Treatments</li>
                                    <li>Regular Health Checkups</li>
                                </ul>
                            </div>

                            <button className="btn sm:py-3 min-[992px]:py-5 !px-8 !mt-8 !mb-0">Make Payment</button>
                        </div>

                        <div className="supscription-card col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 lg:col-span-4">
                            <h5>Advance</h5>
                            <h3>$204</h3>
                            <h6>/ Monthly</h6>

                            <div className="scard-text mt-6">
                                <ul>
                                    <li className="border-b-1 border-gray-200">Routine Checkup</li>
                                    <li className="border-b-1 border-gray-200">24Th Assisance</li>
                                    <li className="border-b-1 border-gray-200">100 Text & Treatments</li>
                                    <li>Regular Health Checkups</li>
                                </ul>
                            </div>

                            <button className="btn sm:py-3 min-[992px]:py-5 !px-8 !mt-8 !mb-0">Make Payment</button>
                        </div>

                        <div className="supscription-card col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 lg:col-span-4">
                            <h5>Premium</h5>
                            <h3>$355</h3>
                            <h6>/ Monthly</h6>

                            <div className="scard-text mt-6">
                                <ul>
                                    <li className="border-b-1 border-gray-200">Routine Checkup</li>
                                    <li className="border-b-1 border-gray-200">24Th Assisance</li>
                                    <li className="border-b-1 border-gray-200">100 Text & Treatments</li>
                                    <li>Regular Health Checkups</li>
                                </ul>
                            </div>

                            <button className="btn sm:py-3 min-[992px]:py-5 !px-8 !mt-8 !mb-0">Make Payment</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Pricing;