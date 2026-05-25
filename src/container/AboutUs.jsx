import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoIosArrowForward, IoMdCheckboxOutline } from "react-icons/io";
import { PiBuildingOffice, PiPlayBold, PiQuotes, PiStethoscopeFill } from "react-icons/pi";
import { TbFileCertificate } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

function AboutUs() {


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

    const testimonials = [
        {
            userimage: '../../../public/assets/images/t1.jpg',
            name: 'Jane Anderson',
            deg: 'Cancer client',
            msg: `It’s amazing how much easier it has been to meet new people and create instant connections.`
        },
        {
            userimage: '../../../public/assets/images/t2.jpg',
            name: 'Paul Flavius',
            deg: 'Heather',
            msg: `It’s amazing how much easier it has been to meet new people and create instant connections.`
        },
        {
            userimage: '../../../public/assets/images/t3.jpg',
            name: 'Harry Russel',
            deg: 'Surgery client',
            msg: `It’s amazing how much easier it has been to meet new people and create instant connections.`
        },
        {
            userimage: '../../../public/assets/images/t4.jpg',
            name: 'Alice Williams',
            deg: 'Mother',
            msg: `It’s amazing how much easier it has been to meet new people and create instant connections.`
        }
    ]

    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >About Us</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="about" className="bg-[#F9F9F9] py-10 lg:py-18 !my-0">
                <div className="containercust">
                    <div className="grid gap-y-7 grid-cols-12 items-center min-[992px]:gap-y-0">
                        <div className=" col-span-12 min-[992px]:col-span-6 relative">
                            <img src="../../../public/assets/images/aboutus.png" alt="aboutus" className="object-cover" />
                            <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&amp;fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                                className="bg-white w-[80px] h-[80px] rounded-full flex items-center justify-center !absolute !top-1/2 !left-1/2
                                         -translate-x-1/2 -translate-y-1/2 hover:bg-[#88C250] group animate-outlineSpread">
                                <PiPlayBold className="text-2xl text-[#88C250] group-hover:text-white" />
                            </a>
                        </div>

                        <div className="col-span-12 min-[992px]:col-span-6 min-[992px]:ml-15">
                            <h3 className="bg-[#88C250] py-1.5 px-5 text-white rounded-[5px] font-medium text-[14px] w-fit">About</h3>

                            <h2 className="title !text-[20px] leading-6 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[30px] ">Thousands Of Specialities For Any Type Diagnostic.</h2>

                            <p className=" subtitle !my-7">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et d
                                olore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.
                            </p>

                            <div className="grid grid-cols-12 space-y-2 my-0 lg:my-10">
                                <div className="col-span-12 min-[768px]:col-span-6 flex gap-x-3">
                                    <IoMdCheckboxOutline className="text-[#88C250] text-2xl" />
                                    <p className="text-gray-500">Conducts eye health checkups</p>
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-6 flex gap-x-3">
                                    <IoMdCheckboxOutline className="text-[#88C250] text-2xl" />
                                    <p className="text-gray-500">Special eye exam</p>
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-6 flex gap-x-3">
                                    <IoMdCheckboxOutline className="text-[#88C250] text-2xl" />
                                    <p className="text-gray-500">Best lasik treatment</p>
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-6 flex gap-x-3">
                                    <IoMdCheckboxOutline className="text-[#88C250] text-2xl" />
                                    <p className="text-gray-500">Contact lens service</p>
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-6 flex gap-x-3">
                                    <IoMdCheckboxOutline className="text-[#88C250] text-2xl" />
                                    <p className="text-gray-500">Treats minor illnesses</p>
                                </div>
                                <div className="col-span-12 min-[768px]:col-span-6 flex gap-x-3">
                                    <IoMdCheckboxOutline className="text-[#88C250] text-2xl" />
                                    <p className="text-gray-500">Special Retina exam</p>
                                </div>

                                <div className="col-span-8 min-[576px]:col-span-6 mt-10">
                                    <button className="btn sm:py-3 min-[992px]:py-5">
                                        More About Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="our-archivment" className="!my-[40px] md:my-[60px] !mt-0">
                <div className="containercust">
                    <div className="flex gap-x-10 justify-center min-[576px]:gap-x-0 py-23 min-[576px]:justify-between flex-wrap md:flex-nowrap  min-[576px]:w-[60%] md:w-[90%] lg:w-[80%] mx-auto gap-y-10">
                        <div className="text-white text-center">
                            <div className="archivment-icone text-[#006838] text-[30px] bg-white w-16.5 h-16.5 flex justify-center items-center mx-auto">
                                <PiBuildingOffice />
                            </div>
                            <h3 className="md:text-[25px] lg:text-[30px] mt-5 font-medium">1250</h3>
                            <p className="text-[14px] font-medium">Hospital Rooms</p>
                        </div>

                        <div className="text-white text-center">
                            <div className="archivment-icone text-[#006838] text-[30px] bg-white w-16.5 h-16.5 flex justify-center items-center mx-auto">
                                <PiStethoscopeFill />
                            </div>
                            <h3 className="md:text-[25px] lg:text-[30px] mt-5 font-medium">350</h3>
                            <p className="text-[14px] font-medium">Specialist Doctors</p>
                        </div>

                        <div className="text-white text-center">
                            <div className="archivment-icone text-[#006838] text-[30px] bg-white w-16.5 h-16.5 flex justify-center items-center mx-auto">
                                <HiOutlineEmojiHappy />
                            </div>
                            <h3 className="md:text-[25px] lg:text-[30px] mt-5 font-medium">2500</h3>
                            <p className="text-[14px] font-medium">Happy Patients</p>
                        </div>

                        <div className="text-white text-center">
                            <div className="archivment-icone text-[#006838] text-[30px] bg-white w-16.5 h-16.5 flex justify-center items-center mx-auto">
                                <TbFileCertificate />
                            </div>
                            <h3 className="md:text-[25px] lg:text-[30px] mt-5 font-medium">35</h3>
                            <p className="text-[14px] font-medium">Years of Experience</p>
                        </div>

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

            <section id="testimonial" className="pt-12 md:pt-20 pb-10  bg-[#006838]">
                <div className="containercust">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[32px]  text-center">
                        <span className="main !text-white">What People Say</span>
                        <span className="bg left-[50%] translate-x-[-50%] !text-[#ffffff17] text-[30px] min-[576px]:!text-[60px] min-[992px]:!text-[61px]">TESTIMONIALS</span>
                    </h2>

                    <hr className="w-[50px] mx-auto mt-4 h-[3.5px] rounded-[5px] border-0 bg-[#88C250]" />


                    <p className="md:w-[730px] subtitle mx-auto text-center !text-white leading-7">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>

                    <div className="mt-10 md:mt-20">
                        <Swiper
                            modules={[Pagination]}
                            loop={true}
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                }
                            }}
                        >

                            {
                                testimonials?.map((v) => (
                                    <SwiperSlide>
                                        <div className="testimonial-card  h-fit group">
                                            {/* <PiQuotes /> */}
                                            <div className="test-text text-white border-2 border-[#ffffff2f] px-[30px] pt-[40px] pb-[60px] text-center h-fit group-hover:bg-white group-hover:text-black">
                                                <PiQuotes className="text-4xl mx-auto mb-3 group-hover:text-[#88C250]" />
                                                <p className="text-[14px] leading-6">
                                                    "{v.msg}"
                                                </p>
                                            </div>
                                            <div className="customer relative -top-8 mb-5 md:mb-10">
                                                <img src={v.userimage} alt="customer" className="rounded-full w-[60px] border-[5px] border-[#ffffff3b] mx-auto group-hover:border-[#88C250]" />

                                                <h4 className="text-[16px] font-serif text-center text-white mt-3">
                                                    {v.name}
                                                    <span className="text-[13px] block">{v.deg}</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                ))
                            }

                        </Swiper>
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

            <section id="cilent-logo-section" className="bg-[#f9f9f9] py-15 !mb-0">
                <div className="containercust">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img src="/assets/images/client-logo-1.png" alt="Client 1" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/assets/images/client-logo-2.png" alt="Client 2" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/assets/images/client-logo-3.png" alt="Client 3" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/assets/images/client-logo-4.png" alt="Client 4" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/assets/images/client-logo-2.png" alt="Client 2" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/assets/images/client-logo-3.png" alt="Client 3" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/assets/images/client-logo-1.png" alt="Client 1" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/assets/images/client-logo-4.png" alt="Client 4" />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </section>

        </main>
    )
}

export default AboutUs;