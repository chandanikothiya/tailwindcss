import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { RiUser6Line } from "react-icons/ri";


function Home() {


    const slide = [
        {
            title: (
                <>
                    Superior solutions that <br />
                    help you to shine.
                </>
            ),
            subtitle: 'Since the first days of operation of MediGrids, our teaming has been focused on building a high-qualities medicals service by MediGrids.',
            image: '../../public/assets/images/s1.png'
        },
        {
            title: (
                <>
                    We only give <br />
                    Best care to your eyes
                </>
            ),
            subtitle: 'Since the first days of operation of MediGrids, our teaming has been focused on building a high-qualities medicals service by MediGrids.',
            image: '../../public/assets/images/s2.png'
        },
        {
            title: (
                <>
                    Superior solutions that <br />
                    help you to shine.
                </>
            ),
            subtitle: 'Since the first days of operation of MediGrids, our teaming has been focused on building a high-qualities medicals service by MediGrids.',
            image: '../../public/assets/images/s3.png'
        }
    ]

    return (
        <main>
            <section id="hero" className="h-[520px] min-[576px]:h-[492px] min-[768px]:h-[504px] min-[992px]:h-[640px]  xl:h-[750px] ">
                <div className="bg-[#006838] relative heroslide ">
                    <Swiper
                        navigation
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        autoplay={true}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="h-[520px] min-[576px]:h-[492px] min-[768px]:h-[504px] min-[992px]:h-[640px] xl:h-[750px]"
                    >
                        {
                            slide?.map((v) => {
                                return (
                                    <SwiperSlide className="w-screen ">

                                        <div className="flex min-[992px]:w-[940px] min-[1024px]:w-[95%] xl:w-[1296px] mx-auto h-full min-[992px]:mt-5  items-center gap-x-10">
                                            <div className="w-full px-3 mt-20  min-[576px]:w-[500px] text-center min-[576px]:mx-auto  min-[576px]:px-10 min-[992px]:px-0 min-[768px]:w-full min-[768px]:mx-0 min-[768px]:text-left">
                                                <h1 className="text-[23px]  min-[576px]:text-[24px] min-[768px]:text-[30px] min-[992px]:text-[38px] font-bold text-white ">
                                                    {v.title}
                                                </h1>
                                                <p className="text-white leading-[28px]  my-5 text-[15px] min-[576px]:leading-[22.5px] min-[576px]:text-[16px]">{v.subtitle}</p>

                                                <div className="flex items-center flex-col gap-y-3  min-[768px]:gap-x-3 min-[768px]:flex-row mt-10 min-[768px]:w-fit  min-[768px]:justify-start">
                                                    <button className="btnh my-0 w-[200px] min-[576px]:w-[300px] py-3 min-[992px]:py-4 min-[768px]:w-fit">Book Appointment</button>
                                                    <button className="btnh w-[200px] min-[576px]:w-[300px] py-3 min-[992px]:py-4 min-[768px]:w-fit">About Us</button>
                                                </div>
                                            </div>
                                            <div className="hidden  min-[992px]:block min-[992px]:w-[100%] min-[992px]:h-[80%] 2xl:w-[100%] 2xl:h-[100%]  self-end">
                                                <img src={v.image} alt="slid image" className=" h-full w-full " />
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                    <img src="../../public/assets/images/s4.svg" alt="svg" className="hidden absolute top-50 -left-13 min-[992px]:block md:w-[90px] 2xl:w-[120px] lg:top-35 2xl:top-50" />
                    <img src="../../public/assets/images/s5.svg" alt="svg" className="hidden absolute bottom-15 min-[992px]:block md:w-[20px] 2x:lw-[25px] lg:bottom-3 2xl:bottom-15 md:right-3 2xl:right-10" />

                </div>
            </section>

            <section id="bokkappt" className="py-5 ">
                <div className="containercust">
                    <h2 className="title">Book An Appointment</h2>

                    <p className="md:w-[636px] subtitle">
                        Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our doctors will receive or return any urgent calls.
                    </p>


                    <form className="mt-10 mb-5">
                        <div className='grid grid-cols-12 gap-x-4 gap-y-4'>
                            <div className="col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-3 apptinput">
                                <input type="text" placeholder="Name" name='name' />
                                <i className="fa-regular fa-user text-gray-500" ></i>
                            </div>

                            <div className="col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-3 apptinput">
                                <input type="email" placeholder="Email" name='email' />
                                <i className="fa-regular fa-envelope text-gray-500"></i>
                            </div>

                            <div className="col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-3 apptinput">
                                {/* <input type="text" placeholder="name" name='name' /> */}
                                <select className="w-full text-gray-400">
                                    <option value='department' selected >Department</option>
                                    <option value='genral'>General Surgery</option>
                                    <option value='Gastroenterology'>Gastroenterology</option>
                                    <option value='Nutrition'>Nutrition & Dietetics</option>
                                    <option value='Cardiology'>Cardiology</option>
                                    <option value='Neurology'>Neurology</option>
                                    <option value='Pediatric'>Pediatric</option>
                                </select>
                                <i className="fa-regular fa-clipboard text-gray-500"></i>
                            </div>

                            <button className="col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-3 btn !my-0">Get Appoinment</button>
                        </div>

                    </form>

                </div>
            </section>

            <section id="about">
                <div className="containercust">
                    about section
                </div>
            </section>
        </main >
    )
}

export default Home;