import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Timetable() {
    return (
        <main>
            <section id="top" className="bg-[linear-gradient(rgba(0,104,55,0.88),rgba(0,104,55,0.88)),url('/assets/images/service.jpg')] bg-cover 
            bg-center h-[236px] min-[768px]:h-[256px] min-[992px]:h-[366px] !my-0  pt-[120px] pb-[50px] min-[992px]:pt-[180px] min-[992px]:pb-[100px]">
                <div className="containercust">
                    <div className="breadcrumbs text-white text-center">
                        <h1 className="text-[25px] md:text-[32px] font-merriweather font-bold" >Time Table</h1>

                        <ul className="flex gap-x-2 items-center justify-center mt-2 md:mt-4">
                            <li><NavLink to={'/'} className="hover:underline">Home</NavLink></li>
                            <IoIosArrowForward />
                            <li>Time Table</li>
                        </ul>

                    </div>
                </div>
            </section>

            <section id="time-table">
                <div className="containercust">
                    <h2 className="text title !text-[22px] leading-8 min-[576px]:leading-8 min-[992px]:leading-10 mt-3 min-[576px]:!text-[25px] min-[992px]:!text-[32px]  text-center">
                        <span className="main">Determine Your Date to Come</span>
                        <span className="bg left-[50%] translate-x-[-50%]">TIME TABLE</span>
                    </h2>

                    <hr className="w-[50px] mx-auto mt-4 h-[3.5px] rounded-[5px] border-0 bg-[#88C250]" />

                    <p className="md:w-[730px] subtitle mx-auto text-center">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>

                    <div className="grid grid-cols-12 shadow-2xl mt-15 overflow-x-auto xl:overflow-hidden">
                        <table classname="col-span-12">
                            <thead classname="col-span-12">
                                <tr className="bg-[#006838]">
                                    <th>TIME</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>9.00</td>
                                    <td>
                                        <h4>Dr. Tanner</h4>
                                        <span>Dermatologists</span>
                                    </td>
                                    <td>
                                        <h4>Dr. Kwak</h4>
                                        <span>Ear, Nose</span>
                                    </td>
                                    <td>
                                        <h4>Dr. Slaughter</h4>
                                        <span>Neurologist</span>
                                    </td>
                                    <td>
                                       
                                    </td>
                                    <td>
                                        <h4>Dr. Foley</h4>
                                        <span>Oncologist</span>
                                    </td>
                                    <td className="!border-r-0">
                                        <h4>Dr. Palmer</h4>
                                        <span>Maxine lowe</span>
                                    </td>
                                </tr>

                                 <tr>
                                    <td>12.00</td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        <h4>Dr. Megahead</h4>
                                        <span>Orthopedics</span>
                                    </td>
                                    <td>
                                        <h4>Dr. Neupane</h4>
                                        <span>Pain Management</span>
                                    </td>
                                    <td>
                                        <h4>Dr. Breidin</h4>
                                        <span>Radiologist</span>
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td className="!border-r-0">
                                        <h4>Dr. Pipe</h4>
                                        <span>Surgeons</span>
                                    </td>
                                </tr>

                                  <tr>
                                    <td>15.00</td>
                                    <td>
                                        <h4>Dr. Tanner</h4>
                                        <span>Dermatologists</span>
                                    </td>
                                    <td>
                                        <h4>Dr. Kwak</h4>
                                        <span>Ear, Nose</span>
                                    </td>
                                     <td>
                                       
                                    </td>
                                    <td>
                                        <h4>Dr. Slaughter</h4>
                                        <span>Neurologist</span>
                                    </td>
                                    <td>
                                        <h4>Dr. Foley</h4>
                                        <span>Oncologist</span>
                                    </td>
                                    <td className="!border-r-0">
                                      
                                    </td>
                                </tr>

                                    <tr>
                                    <td>18.00</td>
                                    <td>
                                        <h4>Dr. Slaughter</h4>
                                        <span>Neurologist</span>
                                    </td>
                                    <td>
                                        <h4>Dr. Megahead</h4>
                                        <span>Orthopedics</span>
                                    </td>
                                    <td>
                                        <h4>Dr. Neupane</h4>
                                        <span>Pain Management</span>
                                    </td>
                                    <td>
                                        <h4>Dr. Breidin</h4>
                                        <span>Radiologist</span>
                                    </td>
                                   <td>
                                        <h4>Dr. Kwak</h4>
                                        <span>Ear, Nose</span>
                                    </td>
                                    <td className="!border-r-0">
                                        <h4>Dr. Pipe</h4>
                                        <span>Surgeons</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </main>
    )
}
 
export default Timetable;