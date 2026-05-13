import React, { useState } from "react";


function Header() {

    return (
        <header className="fixed w-full">
            <div className="flex  font-poppins text-[14px] justify-between container mx-auto mt-5 shadow-2xl px-5 ">
                <img src="../../public/assets/images/logo.svg" alt="logo" width={200} className="my-5" />

                <div>
                    <ul className="flex gap-x-15 font-medium ">
                        <li className="navitem"><a href="#" className="link">Home</a></li>
                        <li className="navitem relative group">
                            <a href="#" className="link" >Pages</a>
                            <ul className="absolute submenu top-[93px] hidden group-hover:block">
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
                            <ul className="absolute submenu top-[93px] hidden group-hover:block">
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Service Detail</a></li>
                            </ul>
                        </li>
                        <li className="navitem group"><a href="#" className="link">Doctore</a>
                            <ul className="absolute submenu top-[93px] hidden group-hover:block">
                                <li><a href="#">Doctore</a></li>
                                <li><a href="#">Doctore Detail</a></li>
                            </ul>
                        </li>
                        <li className="navitem group"><a href="#" className="link">Blog</a>
                        <ul className="absolute submenu top-[93px] hidden group-hover:block">
                                <li><a href="#">Blog Grid Siderbar</a></li>
                                <li><a href="#">Blog Single</a></li>
                            </ul>
                        </li>
                        <li className="navitem"><a href="#" className="link">Contact</a></li>
                    </ul>
                </div>

                <button className="btn py-5">Book Appointment</button>


            </div>
        </header>
    )
}

export default Header;