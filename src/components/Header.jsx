import React, { useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";


function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [openmenu, setOpenmenu] = useState("")
    const [scrollPosition, setScrollPosition] = useState(false);

    const toggle = (menu) => {
        setOpenmenu(openmenu === menu ? '' : menu)
    }

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-10   ${scrollPosition ? 'bg-white top-0 shadow-lg' : 'bg-transparent min-[992px]:top-4'}`}>
            <div className={`bg-white flex  font-poppins text-[14px] justify-between w-full min-[992px]:w-[940px] min-[1024px]:w-[95%] items-center
                 ${scrollPosition ? 'shadow-0' : 'shadow-2xl'} xl:w-[1296px] mx-auto min-[992px]:top:5  px-5 `}>
                <NavLink to={'/'}><img src="../../public/assets/images/logo.svg" alt="logo" className="my-3 w-[150px] md:w-[180px] lg:w-[200px]" /></NavLink>

                <div className="hidden min-[992px]:block">
                    <ul className="flex md:gap-x-7 lg:gap-x-10 font-medium ">
                        <li className="navitem"><NavLink to={'/'} className="link" >Home</NavLink></li>
                        <li className="navitem relative group">
                            <a href="#" className="link" >Pages</a>
                            <ul className="absolute submenu top-[87px] hidden group-hover:block">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Appointment</a></li>
                                <li><a href="#">Time Table</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Project Deatil</a></li>
                                <li><a href="#">Our Pricing</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Faq</a></li>
                                <li><a href="#">Mail success</a></li>
                                <li><a href="#">404 Error</a></li>
                            </ul>
                        </li>
                        <li className="navitem group"><a href="#" className="link">Services</a>
                            <ul className="absolute submenu top-[87] hidden group-hover:block">
                                <li><NavLink to={'/services'}>Services</NavLink></li>
                                <li><NavLink to={'/service-detail'}>Service Detail</NavLink></li>
                            </ul>
                        </li>
                        <li className="navitem group"><a href="#" className="link">Doctore</a>
                            <ul className="absolute submenu top-[87] hidden group-hover:block">
                                <li><NavLink to={'/doctore'}>Doctore</NavLink></li>
                                <li><a href="#">Doctore Detail</a></li>
                            </ul>
                        </li>
                        <li className="navitem group"><a href="#" className="link">Blog</a>
                            <ul className="absolute submenu top-[87] hidden group-hover:block">
                                <li><a href="#">Blog Grid Siderbar</a></li>
                                <li><a href="#">Blog Single</a></li>
                            </ul>
                        </li>
                        <li className="navitem"><a href="#" className="link">Contact</a></li>
                    </ul>
                </div>

                <div className="text-3xl min-[992px]:hidden py-7">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <RxCross1 /> : <VscMenu />}
                    </button>
                </div>

                <button className="btn sm:py-3 min-[992px]:py-5 hidden md:block !z-10">Book Appointment</button>
            </div>

            {
                isOpen &&
                <nav className="bg-white shadow-md  border-t-1 border-gray-200 w-[90%] mx-auto p-3 px-7 h-[350px] overflow-y-scroll">
                    <ul>
                        <li>
                            <NavLink to={'/'} className="reslink">Home</NavLink>
                        </li>
                        <li>
                            <div className="resnavitem" onClick={() => toggle("pages")}>
                                <a href="#" className="reslink">Pages</a>
                                <button className="group"><MdOutlineKeyboardArrowDown className="text-xl" /></button>
                            </div>
                            {
                                openmenu === 'pages' &&
                                <ul className="ml-5">
                                    <li><a href="#" className="block py-3 ">About Us</a></li>
                                    <li><a href="#" className="block py-3 ">Appointment</a></li>
                                    <li><a href="#" className="block py-3 ">Time Table</a></li>
                                    <li><a href="#" className="block py-3 ">Testimonials</a></li>
                                    <li><a href="#" className="block py-3 ">Project Deatil</a></li>
                                    <li><a href="#" className="block py-3 ">Our Pricing</a></li>
                                    <li><a href="#" className="block py-3 ">Sign Up</a></li>
                                    <li><a href="#" className="block py-3 ">Login</a></li>
                                    <li><a href="#" className="block py-3 ">Faq</a></li>
                                    <li><a href="#" className="block py-3 ">Mail success</a></li>
                                    <li><a href="#" className="block py-3 ">404 Error</a></li>
                                </ul>
                            }

                        </li>
                        <li>
                            <div className="resnavitem" onClick={() => toggle("services")}>
                                <a href="#" className="reslink">Services</a>
                                <button><MdOutlineKeyboardArrowDown className="text-xl" /></button>
                            </div>

                            {
                                openmenu === 'services' &&
                                <ul className="ml-5">
                                    <li><NavLink to={'/services'} className="block py-3 ">Services</NavLink></li>
                                    <li><a href="#" className="block py-3 ">Services Details</a></li>
                                </ul>
                            }

                        </li>
                        <li>
                            <div className="resnavitem" onClick={() => toggle("doctore")}>
                                <a href="#" className="reslink">Doctore</a>
                                <button><MdOutlineKeyboardArrowDown className="text-xl" /></button>
                            </div>


                            {
                                openmenu === 'doctore' &&
                                <ul className="ml-5">
                                    <li><a href="#" className="block py-3 ">Doctore</a></li>
                                    <li><a href="#" className="block py-3 ">Doctore Details</a></li>
                                </ul>
                            }
                        </li>
                        <li>
                            <div className="resnavitem" onClick={() => toggle("blog")}>
                                <a href="#" className="reslink">Blog</a>
                                <button><MdOutlineKeyboardArrowDown className="text-xl" /></button>
                            </div>

                            {
                                openmenu === 'blog' &&
                                <ul className="ml-5">
                                    <li><a href="#" className="block py-3 ">Blog Grid Siderbar</a></li>
                                    <li><a href="#" className="block py-3 ">Blog Single</a></li>
                                </ul>
                            }
                        </li>
                        <li>
                            <a href="#" className="reslink">Contact</a>
                        </li>
                    </ul>
                </nav>
            }

            <a href="#" className={`bg-[#88C250] text-white  w-11 h-11  justify-center items-center text-[22px] 
                            fixed right-7 bottom-7 z-10 ${scrollPosition ? 'flex' : 'hidden'} hover:bg-[#081828] ease-in-out duration-400 hover:-translate-y-2`}>
                <IoIosArrowUp />
            </a>
        </header>
    )
}

export default Header;