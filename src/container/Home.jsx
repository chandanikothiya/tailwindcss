import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { RiUser6Line } from "react-icons/ri";
import { IoMdCheckboxOutline } from "react-icons/io";
import { PiPlayBold } from "react-icons/pi";
import { TbWaveSine } from "react-icons/tb";
import { BiInjection } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiStethoscopeFill } from "react-icons/pi";
import { PiBuildingOffice } from "react-icons/pi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { TbFileCertificate } from "react-icons/tb";
import { PiAmbulance } from "react-icons/pi";
import { RiStethoscopeFill } from "react-icons/ri";
import { GiMicroscope } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbHandThreeFingers } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


function Home() {

    const [category, setCategory] = useState('Cardiology');
    const [galleryopt, setGalleryopt] = useState('Show All')
    const [scrollPosition, setScrollPosition] = useState(false);

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

    const medigrid = [
        {
            img: '../../../public/assets/images/d1.jpg',
            category: 'Cardiology',
            options: ['Get the oars in the water and start rowing', 'Introspection is the trick.', 'Most people believe that success is difficult.']
        },
        {
            img: '../../../public/assets/images/d2.jpg',
            category: 'Stomatology',
            options: ['Get the oars in the water and start rowing', 'Introspection is the trick.', 'Most people believe that success is difficult.']
        },
        {
            img: '../../../public/assets/images/d3.jpg',
            category: 'Radiology',
            options: ['Get the oars in the water and start rowing', 'Introspection is the trick.', 'Most people believe that success is difficult.']
        },
        {
            img: '../../../public/assets/images/d4.jpg',
            category: 'Neurology',
            options: ['Get the oars in the water and start rowing', 'Introspection is the trick.', 'Most people believe that success is difficult.']
        },
        {
            img: '../../../public/assets/images/d5.jpg',
            category: 'Ophthalmology',
            options: ['Get the oars in the water and start rowing', 'Introspection is the trick.', 'Most people believe that success is difficult.', 'Conducts eye health checkups']
        }
    ]

    const galleryobj = [
        {
            category: 'Cardiology',
            images: [{
                url: '../../../public/assets/images/c1.jpg',
                title: 'Dry Eye Surgery',
                subtitle: 'Eye Surgery'
            }]
        },
        {
            category: 'Diabetes',
            images: [
                {
                    url: '../../../public/assets/images/di1.jpg',
                    title: 'Qualified Physicians',
                    subtitle: 'Cardiac Surgery'
                }, {
                    url: '../../../public/assets/images/di2.jpg',
                    title: 'Personalized Medication',
                    subtitle: 'Cloud Services'
                }]
        },
        {
            category: 'Pediatric',
            images: [{
                url: '../../../public/assets/images/p1.jpg',
                title: 'Excellence And Safety',
                subtitle: 'Dietetics'
            }, {
                url: '../../../public/assets/images/p2.jpg',
                title: 'Surgical Procedure',
                subtitle: 'Surgical'
            }]
        },
        {
            category: 'Neurosurgery',
            images: [{
                url: '../../../public/assets/images/n1.jpg',
                title: 'Dry Eye Surgery',
                subtitle: 'Eye Surgery'
            }]
        },
    ]

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleclickbtn(e) {
        console.log(e.target.innerText);
        setCategory(e.target.innerText)
    }
    //console.log(category)

    let filterdatagrid = medigrid?.find((v) => v.category === category);

    // useEffect(() => {
    //      filterdatagrid = medigrid?.find((v) => v.category === category)
    //     console.log(filterdatagrid)
    // }, [category])

    console.log(filterdatagrid, galleryopt)

    function handlegalleryclick(e) {
        console.log(e.target.innerText)
        setGalleryopt(e.target.innerText)
    }

    const galleryfilter = galleryopt === 'Show All' ? galleryobj : galleryobj?.filter((v) => v?.category === galleryopt)
    console.log(galleryfilter)


    return (
        <main className="">
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

            <section id="bokkappt" className="pt-5 pb-5 md:pb-0">
                <div className="containercust">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 
                    min-[576px]:!text-[25px] min-[992px]:!text-[32px]">
                        <span className="main">Book An Appointment</span>
                        <span className="bg left-0">Appointment</span>
                    </h2>
                    {/* <h2 className="title !text-[22px]  min-[576px]:!text-[25px] min-[992px]:!text-[35px]">Book An Appointment</h2> */}

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

                            <button className="col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-3 btn !my-0 ">Get Appoinment</button>
                        </div>

                    </form>

                </div>
            </section>

            <section id="about" className="bg-[#F9F9F9] py-10 lg:py-18 ">
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

            <section id="medigrids" className="!mt-[100px]">
                <div className="containercust">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[32px]  text-center">
                        <span className="main">Specialities Available At MediGrids</span>
                        <span className="bg left-[50%] translate-x-[-50%]">Department</span>
                    </h2>

                    <hr className="w-[50px] mx-auto mt-4 h-[3.5px] rounded-[5px] border-0 bg-[#88C250]" />

                    <p className="md:w-[730px] subtitle mx-auto text-center">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

                    <div className="menu bg-[#F9F9F9] mt-15">
                        <ul className="flex flex-col md:flex-row text-[14px] flex-wrap font-medium border-1  border-gray-300 md:border-0">
                            <li className="group " >
                                <button href="#" className={`flex items-center px-10 w-full md:w-fit
                              py-3 md:py-5 border-b-1 md:border-b-3 border-b-gray-300
                              ${category === 'Cardiology' ? "bg-[#88C250] text-white md:!border-b-[#006838] md:!border-b-3" : 'group-hover:text-[#88C250] '}`} onClick={(e) => handleclickbtn(e)}>
                                    <div className={`mediicone 
                                         ${category === 'Cardiology' ? "bg-white text-[#88C250]" : 'group-hover:text-white group-hover:bg-[#88C250] !group-hover:border-0 '}`}>
                                        <i className="fa-regular fa-heart"></i>
                                    </div>
                                    Cardiology
                                </button></li>

                            <li className="group">
                                <button href="#" className={`flex items-center px-10 w-full md:w-fit
                              py-3 md:py-5  border-b-1 md:border-b-3 border-b-gray-300
                              ${category === 'Stomatology' ? "bg-[#88C250] text-white md:!border-b-[#006838] md:!border-b-3" : 'group-hover:text-[#88C250] '}`} onClick={(e) => handleclickbtn(e)}>
                                    <div className={`mediicone 
                                         ${category === 'Stomatology' ? "bg-white text-[#88C250]" : 'group-hover:text-white group-hover:bg-[#88C250] !group-hover:border-0 '}`}>
                                        <BiInjection />
                                    </div>
                                    Stomatology
                                </button></li>

                            <li className="group">
                                <button href="#" className={`flex items-center px-10 w-full md:w-fit
                              py-3 md:py-5 border-b-1 md:border-b-3 border-b-gray-300
                              ${category === 'Radiology' ? "bg-[#88C250] text-white md:!border-b-[#006838] md:!border-b-3" : 'group-hover:text-[#88C250] '}`} onClick={(e) => handleclickbtn(e)}>
                                    <div className={`mediicone 
                                         ${category === 'Radiology' ? "bg-white text-[#88C250]" : 'group-hover:text-white group-hover:bg-[#88C250] !group-hover:border-0 '}`}>
                                        <IoBagHandleOutline />
                                    </div>
                                    Radiology
                                </button></li>

                            <li className="group">
                                <button href="#" className={`flex items-center px-10 w-full md:w-fit
                              py-3 md:py-5 border-b-1 md:border-b-3 border-b-gray-300
                              ${category === 'Neurology' ? "bg-[#88C250] text-white md:!border-b-[#006838] md:!border-b-3" : 'group-hover:text-[#88C250] '}`} onClick={(e) => handleclickbtn(e)}>
                                    <div className={`mediicone  
                                         ${category === 'Neurology' ? "bg-white text-[#88C250]" : 'group-hover:text-white group-hover:bg-[#88C250] !group-hover:border-0 '}`}>
                                        <TbWaveSine />
                                    </div>
                                    Neurology
                                </button></li>

                            <li className="group">
                                <button href="#" className={`flex items-center px-10 w-full md:w-fit
                              py-3 md:py-5  md:border-b-3 border-b-gray-300
                              ${category === 'Ophthalmology' ? "bg-[#88C250] text-white md:!border-b-[#006838] md:!border-b-3" : 'group-hover:text-[#88C250] '}`} onClick={(e) => handleclickbtn(e)}>
                                    <div className={`mediicone 
                                         ${category === 'Ophthalmology' ? "bg-white text-[#88C250]" : 'group-hover:text-white group-hover:bg-[#88C250] !group-hover:border-0 '}`}>
                                        <PiStethoscopeFill />
                                    </div>
                                    Ophthalmology
                                </button></li>
                        </ul>
                    </div>

                    <div className="doctorelist grid grid-cols-12 mt-15 gap-y-8">
                        <div className="col-span-12 md:col-span-6 lg:col-span-5 self-center">
                            <img src={filterdatagrid?.img} alt="" className="w-full " />
                        </div>
                        <div className="col-span-12 md:col-span-6 ml-0 md:ml-5 lg:ml-15 self-center ">
                            <h3 className="text-[22px] md:text-[28px] lg:text-[30px] font-semibold font-normal ">{filterdatagrid?.category}</h3>

                            <div className="checked flex flex-col gap-2 my-8">
                                {
                                    filterdatagrid?.options?.map((v1) => (
                                        <div className="col-span-12  min-[768px]:col-span-6 flex gap-x-3">
                                            <IoMdCheckboxOutline className="text-[#88C250] text-2xl" />
                                            <p className="text-[#888888] font-medium text-[14px]">{v1}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            <p className="text-[#888888] font-medium text-[14px] leading-6">
                                For those of you who are serious about having more, doing more, giving more and being more, success is achievable with some understanding of what to do,
                                some discipline around planning and execution of those plans and belief that you can achieve your desires.
                            </p>

                            <p className="text-[#888888] font-medium text-[14px] mt-7 leading-6  ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo nunc. Vivamus lacinia massa nec sem sagittis.
                            </p>

                            <button className="btn sm:py-3 min-[992px]:py-5  !mt-8 !mb-0 ">View Speciality</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="our-archivment" className="!my-[40px] md:my-[60px]">
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

            <section id="service" className="!mt-[100px]">
                <div className="containercust">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[32px]  text-center">
                        <span className="main">Services Provided By MediGrids</span>
                        <span className="bg left-[50%] translate-x-[-50%]">Services</span>
                    </h2>

                    <hr className="w-[50px] mx-auto mt-4 h-[3.5px] rounded-[5px] border-0 bg-[#88C250]" />

                    <p className="md:w-[730px] subtitle mx-auto text-center">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>

                    <div className="grid grid-cols-12 mt-15 gap-y-8 min-[768px]:gap-8 min-[992px]:gap-0">
                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                         border-gray-200 p-8 md:p-10 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                             group-hover:bg-white ">
                                <PiAmbulance className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Fast Ambulance</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                 group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[120px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                 group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:right-0 2xl:right-10" />
                        </div>

                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                         border-gray-200 p-8 md:p-10 min-[992px]:border-l-0 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                             group-hover:bg-white ">
                                <RiStethoscopeFill className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Dental Specialist</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                 group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[120px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                 group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:right-0 2xl:right-10" />
                        </div>

                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                         border-gray-200 p-8 md:p-10 min-[992px]:border-l-0 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                             group-hover:bg-white ">
                                <GiMicroscope className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Modern Laboratory</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                 group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[120px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                 group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:right-0 2xl:right-10" />
                        </div>


                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                         border-gray-200 p-8 md:p-10 min-[992px]:border-t-0 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                             group-hover:bg-white ">
                                <HiOutlineUserGroup className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Children Center</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                 group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[120px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                 group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:right-0 2xl:right-10" />
                        </div>


                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                         border-gray-200 p-8 md:p-10 min-[992px]:border-l-0 min-[992px]:border-t-0 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                             group-hover:bg-white ">
                                <FaRegHeart className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Heart Surgery</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                 group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[120px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                 group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:right-0 2xl:right-10" />
                        </div>


                        <div className="group relative col-span-12 min-[768px]:col-span-6 min-[992px]:col-span-4 border-1
                         border-gray-200 p-8 md:p-10 min-[992px]:border-l-0 min-[992px]:border-t-0 hover:bg-[#006838] overflow-hidden">

                            <div className="archivment-icone text-[#ffffff] text-[30px] bg-[#006838] w-16.5 h-16.5 flex justify-center items-center
                             group-hover:bg-white ">
                                <TbHandThreeFingers className="group-hover:text-[#006838]" />
                            </div>
                            <h3 className="text-[19px] font-serif font-[600] mt-7 group-hover:text-white"><a href="#">Care Advice</a></h3>
                            <p className="subtitle !text-[13px] !mb-0 group-hover:!text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>

                            <img src="../../public/assets/images/s4.svg" alt="svg"
                                className="opacity-0 absolute   transition-all duration-500 ease-in-out  -top-11 right-8  translate-y-[-20px]
                                 group-hover:opacity-100  group-hover:translate-y-0 md:w-[90px] 2xl:w-[120px]" />

                            <img src="../../public/assets/images/s5.svg" alt="svg"
                                className="opacity-0 absolute transition-all duration-500 ease-in-out bottom-0 translate-x-5
                                 group-hover:opacity-100  group-hover:translate-x-0 !w-7 h-auto md:right-0 2xl:right-10" />
                        </div>

                    </div>
                </div>
            </section>

            <section id="gallery" className="!my-[40px] md:my-[60px] py-10 sm:py-20 ">
                <div className="containercust">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[32px]  text-center">
                        <span className="main">Here Is Some Of Our <br /> Latest Cases</span>
                        <span className="bg left-[50%] translate-x-[-50%]">Projects</span>
                    </h2>

                    <hr className="w-[50px] mx-auto mt-4 h-[3.5px] rounded-[5px] border-0 bg-[#88C250]" />

                    <p className="md:w-[730px] subtitle mx-auto text-center">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>

                    <div className="flex gap-y-4 sm:gap-y-0 gap-x-3 justify-center mt-15 flex-wrap">
                        <button className="gallerybtn" onClick={(e) => handlegalleryclick(e)}>Show All</button>
                        <button className="gallerybtn" onClick={(e) => handlegalleryclick(e)}>Cardiology</button>
                        <button className="gallerybtn" onClick={(e) => handlegalleryclick(e)}>Diabetes</button>
                        <button className="gallerybtn" onClick={(e) => handlegalleryclick(e)}>Pediatric</button>
                        <button className="gallerybtn" onClick={(e) => handlegalleryclick(e)}>Neurosurgery</button>
                    </div>

                    <div className="grid grid-cols-12  gap-6 mt-8 sm:mt-15">

                        {
                            galleryfilter?.map((v) => (
                                v?.images?.map((v1) => (
                                    <div className="img-card col-span-12  min-[576px]:col-span-6 lg:col-span-4">
                                        <img src={v1.url} alt={v1.subtitle} className="w-full" />
                                        <div className="gtext h-full flex flex-col">
                                            <p className="text-[14px]">{v1.subtitle}</p>
                                            <h4 className="text-[19px]">{v1.title}</h4>

                                            <div className="border-1 p-2 w-fit mt-auto">
                                                <IoIosLink />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ))
                        }

                        {/* <div className="img-card col-span-4">
                            <img src="../../../public/assets/images/c1.jpg" alt="" className="w-full" />
                            <div className="gtext h-full flex flex-col">
                                <p className="text-[14px]"> Cardiac Surgery</p>
                                <h4 className="text-[19px]">Qualified Physicians</h4>

                                <div className="border-1 p-2 w-fit mt-auto">
                                    <IoIosLink />
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>

            <section id="supscription" className="">
                <div className="containercust">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[32px]  text-center">
                        <span className="main">Pricing Plan</span>
                        <span className="bg left-[50%] translate-x-[-50%]">PRICING</span>
                    </h2>

                    <hr className="w-[50px] mx-auto mt-4 h-[3.5px] rounded-[5px] border-0 bg-[#88C250]" />


                    <p className="md:w-[730px] subtitle mx-auto text-center">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>

                    <div className="supscription-cards grid grid-cols-12 gap-6 lg:gap-10 mt-15">

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

            <a href="#" className={`bg-[#88C250] text-white  w-11 h-11  justify-center items-center text-[22px] 
                fixed right-7 bottom-10 z-10 ${scrollPosition ? 'flex' : 'hidden'} hover:bg-[#081828] ease-in-out duration-400 hover:-translate-y-2`}>
                <IoIosArrowUp />
            </a>
        </main>
    )
}

export default Home;