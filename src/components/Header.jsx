import React, { useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";


function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [openmenu, setOpenmenu] = useState("")
    const [scrollPosition, setScrollPosition] = useState(false);
    const navigation = useNavigate();
    const location = useLocation();
    console.log(location.pathname)

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
                <Link to={'/'}><img src="../../public/assets/images/logo.svg" alt="logo" className="my-3 w-[150px] md:w-[180px] lg:w-[200px]" /></Link>

                <div className="hidden min-[992px]:block">
                    <ul className="flex md:gap-x-7 lg:gap-x-10 font-medium ">
                        <li className="navitem"><NavLink to={'/'} className={({ isActive }) => isActive ? "link active" : "link"}>Home</NavLink></li>
                        <li className="navitem relative group">
                            <a href="#" className="link" >Pages</a>
                            <ul className="absolute submenu top-[87px] hidden group-hover:block">
                                <li><NavLink to={'/aboutus'} className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink></li>
                                <li><NavLink to={'/appoinment'} className={({ isActive }) => isActive ? "active" : ""}>Appointment</NavLink></li>
                                <li><NavLink to={'/timetable'} className={({ isActive }) => isActive ? "active" : ""}>Time Table</NavLink></li>
                                <li><NavLink to={'/testimonials'} className={({ isActive }) => isActive ? "active" : ""}>Testimonials</NavLink></li>
                                <li><NavLink to={'/projectdetail'} className={({ isActive }) => isActive ? "active" : ""}>Project Deatil</NavLink></li>
                                <li><NavLink to={'/pricing'} className={({ isActive }) => isActive ? "active" : ""}>Our Pricing</NavLink></li>
                                <li><NavLink to={'/signup'} className={({ isActive }) => isActive ? "active" : ""}>Sign Up</NavLink></li>
                                <li><NavLink to={'/login'} className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink></li>
                                <li><NavLink to={'/faq'} className={({ isActive }) => isActive ? "active" : ""}>Faq</NavLink></li>
                                <li><NavLink to={'/mailsuccess'} className={({ isActive }) => isActive ? "active" : ""}>Mail success</NavLink></li>
                                <li><NavLink to={'/notfound'} className={({ isActive }) => isActive ? "active" : ""}>404 Error</NavLink></li>
                            </ul>
                        </li>
                        <li className="navitem group"><a to={'/'} className="link">Services</a>
                            <ul className="absolute submenu top-[87] hidden group-hover:block">
                                <li><NavLink to={'/services'} className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
                                <li><NavLink to={'/service-detail'} className={({ isActive }) => isActive ? "active" : ""}>Service Detail</NavLink></li>
                            </ul>
                        </li>
                        <li className="navitem group"><a to={'/'} className="link">Doctore</a>
                            <ul className="absolute submenu top-[87] hidden group-hover:block">
                                <li><NavLink to={'/doctore'} className={({ isActive }) => isActive ? "active" : ""}>Doctore</NavLink></li>
                                <li><NavLink to={'/doctoredetail'} className={({ isActive }) => isActive ? "active" : ""}>Doctore Detail</NavLink></li>
                            </ul>
                        </li>
                        <li className="navitem group"><a to={'/'} className="link">Blog</a>
                            <ul className="absolute submenu top-[87] hidden group-hover:block">
                                <li><NavLink to={'/bloggrid'} className={({ isActive }) => isActive ? "active" : ""}>Blog Grid Siderbar</NavLink></li>
                                <li><NavLink to={'/blogsingle'} className={({ isActive }) => isActive ? "active" : ""}>Blog Single</NavLink></li>
                                <li><NavLink to={'/blogsinglesider'} className={({ isActive }) => isActive ? "active" : ""}>Blog Single Siderbar</NavLink></li>
                            </ul>
                        </li>
                        <li className="navitem"><NavLink to={'/contact'} className={({ isActive }) => isActive ? "link active" : "link"}>Contact</NavLink></li>
                    </ul>
                </div>

                <div className="text-3xl min-[992px]:hidden py-7">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <RxCross1 /> : <VscMenu />}
                    </button>
                </div>

                <NavLink to={'/appoinment'} className="hidden md:block">
                    <button className="btn sm:py-3 min-[992px]:py-5 !z-10">Book Appointment</button>
                </NavLink>
            </div>

            {
                isOpen &&
                <nav className="bg-white shadow-md  border-t-1 border-gray-200 w-[90%] mx-auto p-3 px-7 h-[350px] overflow-y-scroll">
                    <ul>
                        <li>
                            <NavLink to={'/'} className={({ isActive }) => isActive ? "reslink ractive" : "reslink"}>Home</NavLink>
                        </li>
                        <li className="mobile-menu">
                            <div className="resnavitem" onClick={() => toggle("pages")}>
                                <a href="#" className="reslink">Pages</a>
                                <button className="group"><MdOutlineKeyboardArrowDown className="text-xl" /></button>
                            </div>
                            {
                                openmenu === 'pages' &&
                                <ul className="ml-5">
                                    <li><NavLink to={'/aboutus'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>About Us</NavLink></li>
                                    <li><NavLink to={'/appoinment'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Appointment</NavLink></li>
                                    <li><NavLink to={'/timetable'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Time Table</NavLink></li>
                                    <li><NavLink to={'/testimonials'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Testimonials</NavLink></li>
                                    <li><NavLink to={'/projectdetail'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Project Deatil</NavLink></li>
                                    <li><NavLink to={'/pricing'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Our Pricing</NavLink></li>
                                    <li><NavLink to={'/signup'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Sign Up</NavLink></li>
                                    <li><NavLink to={'/login'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Login</NavLink></li>
                                    <li><NavLink to={'/faq'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Faq</NavLink></li>
                                    <li><NavLink to={'/mailsuccess'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Mail success</NavLink></li>
                                    <li><NavLink to={'/notfound'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>404 Error</NavLink></li>
                                </ul>
                            }

                        </li>
                        <li className="mobile-menu">
                            <div className="resnavitem" onClick={() => toggle("services")}>
                                <a href="#" className="reslink">Services</a>
                                <button><MdOutlineKeyboardArrowDown className="text-xl" /></button>
                            </div>

                            {
                                openmenu === 'services' &&
                                <ul className="ml-5">
                                    <li><NavLink to={'/services'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Services</NavLink></li>
                                    <li><NavLink to={'/service-detail'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Services Details</NavLink></li>
                                </ul>
                            }

                        </li>
                        <li className="mobile-menu">
                            <div className="resnavitem" onClick={() => toggle("doctore")}>
                                <a href="#" className="reslink">Doctore</a>
                                <button><MdOutlineKeyboardArrowDown className="text-xl" /></button>
                            </div>


                            {
                                openmenu === 'doctore' &&
                                <ul className="ml-5">
                                    <li><NavLink to={'/doctore'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Doctore</NavLink></li>
                                    <li><NavLink to={'/doctoredetail'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Doctore Detail</NavLink></li>
                                </ul>
                            }
                        </li>
                        <li className="mobile-menu">
                            <div className="resnavitem" onClick={() => toggle("blog")}>
                                <a href="#" className="reslink">Blog</a>
                                <button><MdOutlineKeyboardArrowDown className="text-xl" /></button>
                            </div>

                            {
                                openmenu === 'blog' &&
                                <ul className="ml-5">
                                    <li><NavLink to={'/bloggrid'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Blog Grid Siderbar</NavLink></li>
                                    <li><NavLink to={'/blogsingle'} className={({ isActive }) => isActive ? "block py-3 page-active" : "block py-3"}>Blog Single</NavLink></li>
                                </ul>
                            }
                        </li>
                        <li>
                            <NavLink to={'/contact'} className={({ isActive }) => isActive ? "reslink ractive" : "reslink"}>Contact</NavLink>
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