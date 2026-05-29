import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Notfound() {
    return (
        <main>
            <div id="notfound" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/notfound.jpg')] bg-cover 
            bg-center min-h-screen flex justify-center items-center text-white">
                <div className="mailtext text-center">
                    <h1 className="text-[28px] md:text-[100px]  font-merriweather font-[700] ">404</h1>
                    <h2 className="text-[25px] font-merriweather font-[600]">Oops! Page Not Found!</h2>
                    <p className="text-[14px] font-poppins font-[400] my-5 ">The page you are looking for does not exist. It might have been moved or deleted.</p>
                    <NavLink to={'/'}>
                        <button to={'/'} className="btnf sm:py-3 min-[992px]:py-5 !px-8 !mt-0 hover:!text-[#006838]">
                            Back To Home
                        </button>
                    </NavLink>
                </div>
            </div>
        </main>
    )
}

export default Notfound;