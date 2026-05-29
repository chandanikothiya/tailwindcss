import React from "react";
import { FaFacebookF, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward, IoIosCheckbox } from "react-icons/io";
import { IoArrowUndoOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiQuotes } from "react-icons/pi";
import { RiGoogleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Blogsingle() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Blog Single</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Blog Single</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="blogsingle">
                <div className="containercust">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-10 md:col-start-2 border-1 border-gray-200">

                             <div className="detail-img h-[175px] min-[576px]:h-[262px] min-[768px]:h-[402px] min-[992px]:h-[482px]">
                                    <img src="../../../public/assets/images/blog-single.jpg" alt="" className="h-full w-full object-cover" />
                                </div>

                            <div className="blog-detail p-[40px]">
                                <h3 className="text-[22px] font-merriweather font-[600] hover:text-[#006838]"><a href="#">We Are Provide Update Nano Technology Care</a></h3>

                                <div className="user-info text-[#888888] flex gap-3 items-center mt-5">
                                    <img src="../../../public/assets/images/comment2.jpg" alt="" className="w-[30px] h-[30px] rounded-full" />

                                    <h5 className="cursor-default hover:text-[#006838]">Alrado Deyam</h5>
                                    <p className="ml-4 cursor-default hover:text-[#006838]">10 Feb 2023</p>
                                </div>

                                <p className="text-[#838181] text-[14px] font-poppins font-[400] my-[20px] leading-7">
                                    We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment,
                                    so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
                                    in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple
                                    and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we
                                    like best, every pleasure is to be welcomed and every pain avoided.
                                </p>

                                <ul className="flex flex-col gap-y-3 mt-[30px]">
                                    <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                        <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                        For those of you who are serious about having more.
                                    </li>

                                    <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                        <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                        There are a million distractions in every facet of our lives.
                                    </li>

                                    <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                        <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                        The sad thing is the majority of people have no clue about what they truly want.
                                    </li>

                                    <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                        <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                        Once you have a clear understanding of what you want
                                    </li>

                                    <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                        <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                        Focus is having the unwavering attention to complete what you set out to do.
                                    </li>
                                </ul>

                                <p className="text-[#838181] text-[14px] font-poppins font-[400] my-[30px] leading-7">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                </p>

                                <blockquote className="bg-[url('/assets/images/pattern2.png')] bg-cover p-10">
                                    <PiQuotes className="text-4xl text-white" />

                                    <h4 className="text-[14px] font-merriweather text-white leading-6 mt-[20px] mb-[16px]">"Don't demand that things happen as you wish, but wish that they happen as they do happen, and you will go on well."</h4>

                                    <span className="text-white text-[13px] font-poppins">-Epictetus, The Enchiridion</span>
                                </blockquote>

                                <h3 className="text-[20px] font-merriweather font-[600] mt-[40px] mb-[20px]"><a href="#">Setting the mood with incense</a></h3>

                                <p className="text-[#838181] text-[14px] font-poppins font-[400] my-[30px] leading-7">
                                    Remove aversion, then, from all things that are not in our control, and transfer it to things contrary to the nature of what is in our control. But, for the present,
                                    totally suppress desire: for, if you desire any of the things which are not in your own control, you must necessarily be disappointed; and of those which are, and which
                                    it would be laudable to desire, nothing is yet in your possession. Use only the appropriate actions of pursuit and avoidance; and even these lightly, and with gentleness
                                    and reservation.
                                </p>

                                <ul className="flex flex-col gap-y-3 mt-[30px]">
                                    <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                        <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                        The happiness of your life depends upon the quality of your thoughts
                                    </li>

                                    <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                        <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                        You have power over your mind, not outside events
                                    </li>

                                    <li className="flex font-poppins text-[14px] text-[#838181] gap-x-3 items-center">
                                        <IoIosCheckbox className="text-[#006838] text-2xl shrink-0" />
                                        The things you think about determine the quality of your mind
                                    </li>
                                </ul>

                                <p className="text-[#838181] text-[14px] font-poppins font-[400] my-[30px] leading-7">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                                </p>

                                <div className="socialmediapost flex gap-y-4 md:gap-x-7 flex-wrap md:flex-nowrap">
                                    <h5 className="text-[18px] font-merriweather font-[500]">Social Share</h5>
                                    <ul className="flex gap-4.5">
                                        <li>
                                            <a href="#">
                                                <FaFacebookF className="text-[#838181]" />
                                                <span>facebook</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <FaTwitter className="text-[#838181]" />
                                                <span>twitter</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <RiGoogleLine className="text-[#838181]" />
                                                <span>google</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <FaLinkedin className="text-[#838181]" />
                                                <span>linkedin</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <FaPinterest className="text-[#838181]" />
                                                <span>pinterest</span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="postcomment mt-10">
                        <div className="grid grid-cols-12">
                            <div className="siderbar-card col-span-12 min-[992px]:col-span-10 min-[992px]:col-start-2">
                                <h3 className="!text-[16px]  md:!text-[20px]  font-merriweather font-[600] mb-[20px]">Post comments</h3>

                                <div>
                                    <div className="comment flex gap-x-9 flex-wrap md:flex-nowrap gap-y-4 md:gap-y-0">
                                        <img src="../../../public/assets/images/comment1.jpg" alt="" className="w-[80px] h-[80px]" />

                                        <div>
                                            <div className="flex flex-wrap md:flex-nowrap justify-between items-top w-full ">
                                                <div>
                                                    <h6 className="text-[16px] font-merriweather font-[500]">Arista Williamson</h6>
                                                    <span className="text-[#838181] text-[14px] font-poppins font-[400]">19th May 2023</span>
                                                </div>

                                                <button className="replaybtn"><IoArrowUndoOutline />Reply</button>
                                            </div>

                                            <p className="text-[#838181] text-[14px] font-poppins font-[400] mt-[15px] leading-7">
                                                Donec aliquam ex ut odio dictum, ut consequat leo interdum. Aenean nunc ipsum, blandit eu enim sed, facilisis convallis orci.
                                                Etiam commodo lectus quis vulputate tincidunt. Mauris tristique velit eu magna maximus condimentum.
                                            </p>
                                        </div>

                                    </div>


                                    <hr className="md:w-[550px] lg:w-[600px]  xl:w-[900px] ml-auto text-gray-200 my-6" />

                                    <div className="reply flex gap-x-9 mb-6 md:w-[550px] lg:w-[600px]  xl:w-[900px] ml-auto mt-10 flex-wrap md:flex-nowrap gap-y-4 md:gap-y-0">
                                        <img src="../../../public/assets/images/comment2.jpg" alt="" className="w-[80px] h-[80px]" />

                                        <div>
                                            <div className="flex flex-wrap md:flex-nowrap justify-between items-top w-full ">
                                                <div>
                                                    <h6 className="text-[16px] font-merriweather font-[500]">Rosalina Kelian</h6>
                                                    <span className="text-[#838181] text-[14px] font-poppins font-[400]">15th May 2023</span>
                                                </div>

                                                <button className="replaybtn"><IoArrowUndoOutline />Reply</button>
                                            </div>

                                            <p className="text-[#838181] text-[14px] font-poppins font-[400] mt-[15px] leading-7">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                                            </p>
                                        </div>

                                    </div>


                                </div>

                                   <hr className=" text-gray-200 my-8 mb-10" />

                                <div>
                                    <div className="comment flex gap-x-9 flex-wrap md:flex-nowrap gap-y-4 md:gap-y-0">
                                        <img src="../../../public/assets/images/comment3.jpg" alt="" className="w-[80px] h-[80px]" />

                                        <div >
                                            <div className="flex flex-wrap md:flex-nowrap justify-between items-top w-full">
                                                <div>
                                                    <h6 className="text-[16px] font-merriweather font-[500]">Alex Jemmi</h6>
                                                    <span className="text-[#838181] text-[14px] font-poppins font-[400]">19th May 2023</span>
                                                </div>

                                                <button className="replaybtn"><IoArrowUndoOutline />Reply</button>
                                            </div>

                                            <p className="text-[#838181] text-[14px] font-poppins font-[400] mt-[15px] leading-7">
                                               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="commentform mt-[40px]">
                        <div className="grid grid-cols-12">
                            <div className="siderbar-card col-span-12 min-[992px]:col-span-10 min-[992px]:col-start-2">

                                <h3 className="!text-[16px]  md:!text-[20px]  font-merriweather font-[600] mb-[20px]">Leave a comment</h3>


                                <form action="" className="grid grid-cols-12 gap-4 appoinmentform mt-10">
                                    <div className="col-span-12 md:col-span-6 formrow">
                                        <input type="text" name="url" id="url" placeholder="Website URL" />
                                    </div>

                                    <div className="col-span-12 md:col-span-6 formrow">
                                        <input type="text" name="name" id="name" placeholder="Your Name" />
                                    </div>

                                    <div className="col-span-12 md:col-span-6 formrow">
                                        <input type="email" name="email" id="email" placeholder="Your Email" />
                                    </div>

                                    <div className="col-span-12 md:col-span-6 formrow">
                                        <input type="text" name="phone" id="phone" placeholder="Phone Number" />
                                    </div>

                                    <div className="col-span-12 formrow">
                                        <textarea id="message" name="message" placeholder="Your Comment" rows="6" cols="50" className="!w-full">
                                        </textarea>
                                    </div>

                                    <div className="col-span-12 min-[576px]:col-span-6 md:col-span-4 xl:col-span-2">
                                        <button className="btn sm:py-3 min-[992px]:py-5 w-full !text-[16px]">
                                            Post Comment
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Blogsingle;