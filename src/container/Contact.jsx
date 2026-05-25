import React from "react";
import { BiStopwatch } from "react-icons/bi";
import { FaFacebookF, FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosArrowForward, IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Contact() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Contact Us</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="containercust">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[32px]  text-center">
                        <span className="main md:block md:!w-[500px] lg:!w-[500px] xl:!w-[700px] md:mx-auto">We’re connected all time to help our patients</span>
                        <span className="bg left-[50%] translate-x-[-50%]">CONTACT</span>
                    </h2>

                    <hr className="w-[50px] mx-auto mt-4 h-[3.5px] rounded-[5px] border-0 bg-[#88C250]" />


                    <p className="md:w-[730px] subtitle mx-auto text-center">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>

                    <div className="grid grid-cols-12 mt-15 gap-6 !items-stretch">
                        <div className="col-span-12 min-[992px]:col-span-8">
                            <div className="siderbar-card">
                                <h2 className="text-[22px] font-merriweather font-[600]">
                                    Feel free to contact us for any query.
                                </h2>

                                <form className="contact-form grid grid-cols-12 gap-4 mt-8">
                                    <div className="col-span-12 md:col-span-6">
                                        <input type="text" name="name" id="name" placeholder="Your Name..." />
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <input type="text" name="subject" id="subject" placeholder="Your Subject" />
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <input type="text" name="email" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <input type="text" name="phone" id="phone" placeholder="Your Phone" />
                                    </div>
                                    <div className="col-span-12">
                                        <textarea id="message" name="message" placeholder="Your Message" rows="6" cols="50">
                                        </textarea>
                                    </div>
                                    <div className="col-span-12 min-[576px]:col-span-6 md:col-span-4 xl:col-span-3">
                                        <button className="btn sm:py-3 min-[992px]:py-5 w-full !text-[16px]">
                                            Submit Message
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="col-span-12 min-[992px]:col-span-4">
                            <div className="siderbar-card">
                                <h2 className="text-[20px] font-merriweather font-[600]">
                                    Contact Information
                                </h2>

                                <div className="contact-info">
                                    <div className="info-icone">
                                        <IoLocationOutline />
                                    </div>
                                    <div className="text-info">
                                        <h3>Medical Address</h3>
                                        <p>23 New Design Str, Lorem Upsum 10 Hudson Yards, USA</p>
                                    </div>
                                </div>

                                <div className="contact-info">
                                    <div className="info-icone">
                                        <BiStopwatch />
                                    </div>
                                    <div className="text-info">
                                        <h3>Opening hours </h3>
                                        <p>Mon - Tue 08:30 - 18:30</p>
                                        <p className="mt-[3px]"> Wed- Thu 07:00 - 14:30</p>
                                    </div>
                                </div>

                                <div className="contact-info">
                                    <div className="info-icone">
                                        <MdEmail />
                                    </div>
                                    <div className="text-info">
                                        <h3>Email Support</h3>
                                        <p><a href="#">contact@medigrids.com</a></p>
                                        <p><a href="#" className="mt-[3px]">support@medigrids.com</a></p>
                                    </div>
                                </div>

                                <div className="contact-info">
                                    <div className="info-icone">
                                        <IoIosPhonePortrait />
                                    </div>
                                    <div className="text-info">
                                        <h3>Social contact</h3>
                                         <div className="dsocial text-[#888888] flex text-[15px] gap-x-3 items-center">
                                            <a href="#"><FaFacebookSquare /></a>
                                            <a href="#"><FaTwitter /></a>
                                            <a href="#"><FaLinkedin /></a>
                                            <a href="#"><FaPinterest /></a>
                                            <a href="#"> <FaYoutube /></a>
                                        </div>
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

export default Contact;