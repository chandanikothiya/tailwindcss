import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

function TermsCondition() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Terms and Conditions</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="termconditions">
                <div className="containercust text-[#555555] font-Libre  font-[400] ">
                    <p className="text-[15px] leading-7">
                        Before you register and conduct or download <strong className="text-black">Hospa</strong> downloadable product(s) for your motives, please ensure you have read,
                        acknowledged, and accepted all the terms. By using <strong className="text-black">Hospa</strong> and/or other items, we believe you have agreed to the following terms and conditions.
                    </p>

                    <div className="my-8">
                        <h3 className="text-[20px] text-black font-[700px]">Refunds</h3>

                        <p className="text-[15px] leading-7 my-5">
                            We have a patron amicable <span className="font-merriweather">15</span> days <a href="#" className="text-[#9588e8] underline">refund policy</a>. However, you can’t interrogate for a refund claiming a feature that your bought theme or plugin does not comprehend.
                        </p>

                        <ul>
                            <li className="mb-1">
                                <strong className="text-black font-merriweather text-[18px]" >1.</strong>
                                Complimentary ground shipping within <span className="font-merriweather">1</span> to <span className="font-merriweather">7</span> business days
                            </li>
                            <li className="mb-1">
                                <strong className="text-black font-merriweather text-[18px]" >2.</strong>
                                In-store collection available within  <span className="font-merriweather">1</span> to <span className="font-merriweather">7</span> business days
                            </li>
                            <li className="mb-1">
                                <strong className="text-black font-merriweather text-[18px]" >3.</strong>
                                Next-day and Express delivery options also available
                            </li>
                            <li className="mb-1">
                                <strong className="text-black font-merriweather text-[18px]" >4.</strong>
                                Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items
                            </li>
                            <li className="mb-1">
                                <strong className="text-black font-merriweather text-[18px]" >5.</strong>
                                See the delivery FAQs for details on shipping methods, costs and delivery times
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default TermsCondition;