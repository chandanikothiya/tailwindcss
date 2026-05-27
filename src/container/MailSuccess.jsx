import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";

function MailSuccess() {

    return (
        <main>
            <div className="containercust flex justify-center mt-70 xl:mt-90">
                <div className="mailtext text-center">
                    <FaRegThumbsUp className="text-[40px] text-[#006838] mx-auto mb-6" />
                    <h1 className="text-[28px] md:text-[40px] text-[#006838] font-merriweather font-[700] ">Congratulations!</h1>
                    <h2 className="text-[18px] font-merriweather font-[600]">Your Mail Sent Successfully</h2>
                    <p className="text-[14px] text-[#838181] font-poppins font-[400] my-5 ">Thanks for contacting with us, We will get back to you asap.</p>
                    <button className="btn sm:py-3 min-[992px]:py-5 !px-8 !mt-0">
                        Back To Home 
                    </button>
                </div>
            </div>
        </main>
    )
}

export default MailSuccess;