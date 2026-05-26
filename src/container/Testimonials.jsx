import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { PiQuotes } from "react-icons/pi";

function Testimonials() {

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
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Testimonials
                        </h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Testimonials
                            </li>
                        </ul>

                    </div>
                </div>
            </section>

            <section id="testimonial">
                <div className="containercust ">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[32px]  text-center">
                        <span className="main !text-black">What People Say</span>
                        <span className="bg left-[50%] translate-x-[-50%]  text-[30px] min-[576px]:!text-[60px] min-[992px]:!text-[61px]">TESTIMONIALS</span>
                    </h2>

                    <hr className="w-[50px] mx-auto mt-4 h-[3.5px] rounded-[5px] border-0 bg-[#88C250]" />


                    <p className="md:w-[730px] subtitle mx-auto text-center leading-7">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>

                    <div className="mt-10 md:mt-10 test-page">
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
                                        <div className="testimonial-card  h-fit group ">
                                            {/* <PiQuotes /> */}
                                            <div className="test-text border-1 border-[#9b9b9b75] px-[30px] pt-[40px] pb-[60px] text-center h-fit group-hover:bg-[#88C250] group-hover:text-white">
                                                <PiQuotes className="text-4xl mx-auto mb-3 group-hover:text-white" />
                                                <p className="text-[14px] leading-6">
                                                    "{v.msg}"
                                                </p>
                                            </div>
                                            <div className="customer relative -top-8 mb-5 md:mb-10">
                                                <img src={v.userimage} alt="customer" className="rounded-full w-[60px] border-[5px] border-[#ffffff3b] mx-auto group-hover:border-[#006838]" />

                                                <h4 className="text-[16px] font-serif text-center font-[500] mt-3 text-[#006838]">
                                                    {v.name}
                                                    <span className="text-[13px] block text-[#88C250]">{v.deg}</span>
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
        </main>
    )
}

export default Testimonials;
