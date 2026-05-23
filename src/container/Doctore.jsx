import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Doctore() {

    const doctors = [
        {
            img: "../../../public/assets/images/te1.jpg",
            name: "Dr.Felica Queen",
            dept: "Cardiologist",
        },
        {
            img: "../../../public/assets/images/te2.jpg",
            name: "Dr.Alice Williams",
            dept: "Neurologist",
        },
        {
            img: "../../../public/assets/images/te3.jpg",
            name: "Dr.Paul Flavius",
            dept: "Physician Assistant",
        },
        {
            img: "../../../public/assets/images/te4.jpg",
            name: "Dr.Michael Bean",
            dept: "Physician Assistant",
        },
    ]

    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Doctors</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Doctors</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="team" className="!mt-[60px] md:!mt-[100px]">
                <div className="containercust">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[32px]  text-center">
                        <span className="main md:block md:!w-[500px] lg:!w-[500px] xl:!w-[700px] md:mx-auto">Our Outstanding Team Is Active To Help You!</span>
                        <span className="bg left-[50%] translate-x-[-50%]">DOCTORS</span>
                    </h2>

                    <hr className="w-[50px] mx-auto mt-4 h-[3.5px] rounded-[5px] border-0 bg-[#88C250]" />


                    <p className="md:w-[730px] subtitle mx-auto text-center">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>

                    <div className="grid grid-cols-12 gap-y-6 gap-x-6 mt-10">
                        {
                            doctors?.map((v) => (
                                <div className="col-span-12 min-[576px]:col-span-6 min-[992px]:col-span-3">
                                    <div className="doc-card group">
                                        <div className="relative  overflow-hidden">
                                            <img src={v.img} alt="doctore" className="w-[100%] h-full xl:h-[390px] object-cover object-top" />

                                            <div className="absolute bottom-0 left-0 w-full bg-[#006838] py-4 flex justify-center gap-5 text-white opacity-0 translate-y-full
                                            transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                                                <a href="#"><FaFacebookF /></a>
                                                <a href="#"><FaTwitter /></a>
                                                <a href="#"><FaInstagram /></a>
                                                <a href="#"><FaYoutube /></a>
                                            </div>
                                        </div>

                                        <div className="content text-center border-1 border-t-0 py-6 border-gray-200">
                                            <h5 className="text-[14px] text-[#88C250] font-medium font-serif">{v.dept}</h5>
                                            <h3 className="text-[16px] text-[#006838] font-bold font-serif"><a href="#">{v.name}</a></h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Doctore;