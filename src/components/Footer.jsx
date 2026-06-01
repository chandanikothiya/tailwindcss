import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer bg-[url(../../../public/assets/images/footer.jpg)] bg-cover bg-center font-poppins mt-10 md:mt-0">
            <div className="relative z-50 pt-10 min-[992px]:pt-30">
                <div className="containercust">
                    <div className="top-footer text-white grid grid-cols-12 gap-y-7">
                        <div className="col-span-12 md:col-span-6">
                            <h3 className="min-[576px]:text-[21px] md:text-[22px] font-bold font-serif">Need Help?</h3>
                            <p className="text-[14px] min-[576px]:text-[15px] mt-3 md:mt-4 font-[500]">Please feel free to contact our friendly reception staff with any medical enquiry, or call <span className="text-[#88C250]">+880 12345678901</span></p>
                        </div>
                        <div className="col-span-12 md:col-span-6 ml:0 md:ml-10 min[992px]:ml-20 lg:ml-18 xl:ml-15 2xl:ml-20">
                            <h3 className="min-[576px]:text-[21px] md:text-[22px] font-bold font-serif ">Subscribe Newsletter</h3>
                            <form className="flex text-white w-full mt-3 md:mt-4  overflow-hidden">
                                <input type="email" name="email" placeholder="Email" className="!text-white bg-[#3C8C68] w-[70%] min-[576px]:w-[90%] md:w-[65%] lg:w-[60%] xl:w-[70%] py-3 px-5 relative z-50" />
                                <button className="btnf">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="second-footer border-y-1 border-mist-400 mt-10 md:mt-20 ">
                    <div className="containercust">
                        <div className="grid grid-cols-12 text-white space-y-6 md:space-y-8 lg:space-y-0">
                            <div className="first col-span-12 pt-9 lg:py-15 md:col-span-6 lg:col-span-3 lg:border-r-1 border-mist-400 pr-4">
                                <img src="../../../public/assets/images/white-logo.svg" alt="" className="w-[150px] md:w-[180px] lg:w-[200px]" />

                                <p className="my-6">There’s nothing in this story to make us think he was dreaming about riches.</p>

                                <div className="flex gap-x-[10px]">
                                    <div className="icone">
                                        <a href="#"><i className="fa-brands fa-facebook-f text-[#006838] text-[12px]"></i></a>
                                    </div>

                                    <div className="icone">
                                        <a href="#"><i className="fa-brands fa-twitter text-[#006838] text-[12px]"></i></a>
                                    </div>

                                    <div className="icone">
                                        <a href="#"><i className="fa-brands fa-instagram text-[#006838] text-[12px]"></i></a>
                                    </div>
                                    <div className="icone">
                                        <a href="#"><i className="fa-brands fa-linkedin text-[#006838] text-[12px]"></i></a>
                                    </div>
                                    <div className="icone">
                                        <a href="#"><i className="fa-brands fa-youtube text-[#006838] text-[12px]"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="first col-span-12 md:pt-9 lg:py-15 md:col-span-6 lg:col-span-3 lg:px-3 xl:px-10 lg:border-r-1 border-mist-400 pr-4">
                                <h3 className="text-[20px] font-medium">Useful Links</h3>
                                <ul className="grid grid-cols-12 text-[14px] gap-y-2 font-medium mt-5 gap-x-6">
                                    <li className="col-span-12 md:col-span-6"><NavLink to={'/aboutus'}>About</NavLink></li>
                                    <li className="col-span-12 md:col-span-6"><NavLink to={'/appoinment'}>Appoinment</NavLink></li>
                                    <li className="col-span-12 md:col-span-6"><NavLink to={'/doctore'}>Team</NavLink></li>
                                    <li className="col-span-12 md:col-span-6"><a href="#">Gallery</a></li>
                                    <li className="col-span-12 md:col-span-6"><a href="#">Before After</a></li>
                                    <li className="col-span-12 md:col-span-6"><NavLink to={'/timetable'}>Timetable</NavLink></li>
                                    <li className="col-span-12 md:col-span-6"><a href="#">Cost calculator</a></li>
                                    <li className="col-span-12 md:col-span-6"><a href="#">Department</a></li>
                                    <li className="col-span-12 md:col-span-6"><a href="#">Working Hours</a></li>
                                    <li className="col-span-12 md:col-span-6"><NavLink to={'/contact'}>Contact Us</NavLink></li>
                                </ul>
                            </div>

                            <div className="third col-span-12 md:pb-9 lg:py-15 md:col-span-6 lg:col-span-3 lg:px-3 xl:px-10 lg:border-r-1 border-mist-400 pr-4">
                                <h3 className="text-[20px] font-medium">Opening Hours</h3>
                                <ul className="grid grid-cols-12 text-[14px] gap-y-2 font-medium mt-5 gap-x-6">
                                    <li className="col-span-6 md:col-span-8 lg:col-span-6 "><a href="#">Mon - Tue</a></li>
                                    <li className="col-span-6  md:col-span-4 lg:col-span-6"><a href="#">08:30 - 18:30</a></li>
                                    <li className="col-span-6 md:col-span-8 lg:col-span-6"><a href="#"> Wed- Thu</a></li>
                                    <li className="col-span-6 md:col-span-4 lg:col-span-6"><a href="#">08:30 - 18:30</a></li>
                                    <li className="col-span-6 md:col-span-8 lg:col-span-6"><a href="#"> Friday</a></li>
                                    <li className="col-span-6 md:col-span-4 lg:col-span-6"><a href="#">08:30 - 18:30</a></li>
                                    <li className="col-span-6 md:col-span-8 lg:col-span-6"><a href="#">Saturday</a></li>
                                    <li className="col-span-6 md:col-span-4 lg:col-span-6"><a href="#">08:30 - 18:30</a></li>
                                </ul>
                            </div>

                            <div className="four col-span-12 pb-9 lg:py-15 md:col-span-6 lg:col-span-3 lg:px-3 xl:px-10">
                                <h3 className="text-[20px] font-medium">Contact</h3>
                                <div className="flex items-start gap-5 mt-6">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p className="text-[14px]">23 New Design Str, Lorem Upsum 10 Hudson Yards, USA</p>
                                </div>
                                <div className="flex items-center gap-5 mt-3">
                                    <i className="fa-solid fa-phone"></i>
                                    <p className="text-[14px]">Tel. +(123) 1800-567-8990</p>
                                </div>
                                <div className="flex items-center gap-5 mt-3">
                                    <i className="fa-solid fa-envelope"></i>
                                    <p className="text-[14px]">Mail. support@classigrids.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="containercust py-8">
                    <div className="third-footer text-white flex justify-center gap-y-2  md:justify-between text-[14px] flex-wrap">
                        <p>Designed and Developed by <a href="#">GrayGrids</a></p>
                         <div className="flex gap-4">
                            <a href="#">Terms & Conditions</a>
                            <a href="#">FAQ</a>
                            <a href="#">Privacy Policy</a>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;