import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Gallery() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Gallery</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Gallery</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="galleryp">
                <div className="containercust">
                    <div className="grid grid-cols-12 gap-7">
                        <div className="col-span-4">
                            <div className="gimg">
                                <img src="../../../public/assets/images/g1.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-span-4">
                            <div className="gimg">
                                <img src="../../../public/assets/images/g2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="gimg">
                                <img src="../../../public/assets/images/g3.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-span-4">
                            <div className="gimg">
                                <img src="../../../public/assets/images/g4.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-span-4">
                            <div className="gimg">
                                <img src="../../../public/assets/images/g5.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-span-4">
                            <div className="gimg">
                                <img src="../../../public/assets/images/g6.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-span-4">
                            <div className="gimg">
                                <img src="../../../public/assets/images/g7.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-span-4">
                            <div className="gimg">
                                <img src="../../../public/assets/images/g8.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-span-4">
                            <div className="gimg">
                                <img src="../../../public/assets/images/g10.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Gallery;