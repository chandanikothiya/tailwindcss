import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

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
            <section id="hero">
                <Swiper
                    navigation
                     modules={[Navigation]}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        slide?.map((v) => {
                            return (
                                <SwiperSlide className="w-screen">
                                    <div className="bg-[#006838] relative">
                                        <div className="flex min-[992px]:w-[940px] min-[1024px]:w-[95%] xl:w-[1296px] mx-auto min-[992px]:mt-5 h-[750px] items-center gap-x-10">
                                            <div className="mt-20">
                                                <h1 className="text-[38px]  font-bold text-white ">
                                                    {v.title}
                                                </h1>
                                                <p className="text-white my-5">{v.subtitle}</p>

                                                <div className="flex  gap-3">
                                                    <button className="btnh sm:py-3 min-[992px]:py-5 hidden md:block">Book Appointment</button>
                                                    <button className="btnh sm:py-3 min-[992px]:py-5 hidden md:block">About Us</button>
                                                </div>
                                            </div>
                                            <div className="w-[100%] h-[100%]">
                                                <img src={v.image} alt="" className="w-[100%] h-[100%] " />
                                            </div>
                                        </div>

                                        <img src="../../public/assets/images/s4.svg" alt="" width={120} className="absolute top-50 -left-13" />
                                        <img src="../../public/assets/images/s5.svg" alt="" width={25} className="absolute right-10 bottom-15" />

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
        </main>
    )
}

export default Home;