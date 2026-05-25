import React from "react";
import { BiStopwatch } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdRemove } from "react-icons/md";
import { NavLink } from "react-router-dom";

function DoctoreDetail() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Doctor Details</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Doctor Details</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="doctore-detail">
                <div className="containercust">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 md:col-span-4">
                            <div className="doctore-img w-full w-[400px] min-[768px]:h-[246px] min-[992px]:h-[338px] xl:h-[475px] mb-[25px]">
                                <img src="../../../public/assets/images/te2.jpg" alt="doctor" className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="doctore-bottom-left">
                                <div className="leftside-bar">
                                    <h4>Speciality</h4>
                                    <p className="!my-0">Respiratory medicine (lung)</p>
                                </div>

                                <div className="leftside-bar">
                                    <h4>Conditions</h4>
                                    <p className="!my-0">Cystic fibrosis (children)</p>
                                </div>

                                <div className="leftside-bar">
                                    <h4>Memberships</h4>
                                    <ul className="mt-[20px]">
                                        <li><a href="#">British Cardiovascular Society</a></li>
                                        <li><a href="#">European Society of Cardiology</a></li>
                                        <li><a href="#">Fellow Royal Society of Medicine</a></li>
                                    </ul>
                                </div>

                                <div className="leftside-bar schedule !border-b-0">
                                    <h4>Doctor Schedule</h4>
                                    <ul className="mt-[20px]">
                                        <li>
                                            <span className="day"><BiStopwatch className="text-[20px]" /> Mon - Tue </span>
                                            <span>08:30 - 18:30</span>
                                        </li>

                                        <li>
                                            <span className="day"><BiStopwatch className="text-[20px]" /> Wed- Thu </span>
                                            <span>08:30 - 18:30</span>
                                        </li>

                                        <li>
                                            <span className="day"><BiStopwatch className="text-[20px]" />Friday</span>
                                            <span>08:30 - 18:30</span>
                                        </li>

                                        <li>
                                            <span className="day"><BiStopwatch className="text-[20px]" />Saturday</span>
                                            <span>08:30 - 18:30</span>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <div className="detail-content min-[768px]:ml-6 min-[992px]:ml-10">
                                <h3 className="text-[23px] font-merriweather">
                                    Dr.Alice Williams
                                    <span className="block text-[14px] md:text-[15px] text-[#838181] mt-[5px]">Your Community Safety Net For Over 50 Years.</span>
                                </h3>

                                <ul className="detaildoctore my-[30px]">
                                    <li>
                                        <span>Profession:</span>
                                        Neurologist
                                    </li>

                                    <li>
                                        <span>Experience:</span>
                                        10 Years
                                    </li>

                                    <li>
                                        <span>Phone:</span>
                                        (+88) 123 456 789
                                    </li>

                                    <li>
                                        <span>Email:</span>
                                        contact@williams.com
                                    </li>

                                    <li>
                                        <span>Address:</span>
                                        594 E. Whitemarsh Street Mchenry, IL 60050
                                    </li>

                                    <li>
                                        <span>Follow On:</span>
                                        <div className="dsocial text-black flex text-[15px] gap-x-4 items-center">
                                            <a href="#"><FaFacebookF /></a>
                                            <a href="#"><FaTwitter /></a>
                                            <a href="#"><FaInstagram /></a>
                                            <a href="#"><FaPinterest /></a>
                                            <a href="#"> <FaYoutube /></a>
                                        </div>
                                    </li>

                                </ul>

                                <h4 className="!mb-0">Biography</h4>

                                <p className="!mt-[20px]">
                                    Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987.
                                    He then worked at various New York hospitals for the next five years, including Seattle, and Washington.
                                    He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.
                                </p>

                                <p>
                                    He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in
                                    the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal
                                    surgery. He continued in this post until his move to the Seattle in the early 1992.
                                </p>


                                <h4 className="!mb-0">Education</h4>
                                <ul className="doctore-education mt-[20px] mb-[30px]">
                                    <li>
                                        <span><i class="fa-solid fa-minus"></i></span>
                                        BSc degree in Neurosciences (1994) at University College London
                                    </li>

                                    <li>
                                        <span><i class="fa-solid fa-minus"></i></span>
                                        Royal College of Physicians; MRCP (UK) 2000
                                    </li>

                                    <li>
                                        <span><i class="fa-solid fa-minus"></i></span>
                                        PHD Imperial College London School of Medicine in 2004
                                    </li>

                                </ul>


                                <h4 className="!mb-0">Research interests</h4>
                                <p className="!mt-[20px]">
                                    Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987.
                                    He then worked at various New York hospitals for the next five years, including Seattle, Washington.
                                    He also held positions with the Medical Research Council, NY Heart Foundation
                                </p>


                                <h4 className="!mb-0">Awards & Honours</h4>
                                <ul className="doctore-education mt-[20px] mb-[30px]">
                                    <li>
                                        <span><i class="fa-solid fa-minus"></i></span>
                                        1988 British Thoracic Society Fisons Travel Fellowship
                                    </li>

                                    <li>
                                        <span><i class="fa-solid fa-minus"></i></span>
                                        1991 British Medical Association HC Roscoe Fellowship
                                    </li>

                                    <li>
                                        <span><i class="fa-solid fa-minus"></i></span>
                                        1997 Royal College of Physicians Graham Bull Prize in Clinical Science
                                    </li>

                                    <li>
                                        <span><i class="fa-solid fa-minus"></i></span>
                                        2005 CF Trust John Panchaud Medal
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DoctoreDetail;