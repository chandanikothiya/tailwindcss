import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Addpatient() {

    const [image, setImage] = useState(null);

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };


    return (
        <div >
            <h3 className="py-4 px-8 text-xl text-[#717171] shadow-sm rounded-4xl border-1 border-gray-200">Add Patient</h3>

            <div className="grid grid-cols-12">
                <div className="bg-white border-1 border-gray-200 p-5 col-span-10 col-start-2 mt-12 shadow-md rounded-md">
                    <h4 className="text-[19px] font-poppins font-medium pb-4 border-b-1 border-b-gray-200">New Patient</h4>
                    <form >
                        <div className="flex items-center gap-x-5 mt-6 ml-1">
                            <label>Profile Image</label>

                            <div className="relative w-24 h-24">
                                <label
                                    htmlFor="profile"
                                    className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer border border-gray-200"
                                >
                                    {image ? (
                                        <img
                                            src={image}
                                            alt="profile"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <IoPersonAddOutline className="text-2xl text-gray-500" />
                                    )}
                                </label>

                                <input
                                    type="file"
                                    id="profile"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImage}
                                />

                                <label
                                    htmlFor="profile"
                                    className="absolute bottom-0 left-0 right-0 bg-black text-white h-6 flex items-center justify-center cursor-pointer rounded-b-full"
                                >
                                    <FaCamera className="text-sm" />
                                </label>
                            </div>
                        </div>


                        <div className="p-4 border-1 border-[#e4e7ed] mt-10 bg-[#f8f9fc] rounded-2xl">

                            <h3 className="text-[16px]  font-poppins font-medium">Personal Information</h3>

                            <div className="adddoctore-form mt-6">

                                <div className="grid grid-cols-12 gap-y-2">
                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="fname" className="col-span-3 justify-self-end">First Name <span>*</span></label>
                                        <input type="text" name="fname" id="fname" placeholder="enter first name" className="col-span-6 " />
                                    </div>

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="lname" className="col-span-3 justify-self-end">Last Name <span>*</span></label>
                                        <input type="text" name="lname" id="lname" placeholder="enter last name" className="col-span-6" />
                                    </div>

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="mname" className="col-span-3 justify-self-end">Middle Name <span>*</span></label>
                                        <input type="text" name="mname" id="mname" placeholder="enter middle name" className="col-span-6" />
                                    </div>

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="lname" className="col-span-3 justify-self-end">Birth Date <span>*</span></label>
                                        <input type="date" name="lname" id="lname" placeholder="Medical license number" className="col-span-6" />
                                    </div>

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="dept" className="col-span-3 justify-self-end">Gender <span>*</span></label>
                                        <select className="col-span-6 w-full">
                                            <option value='department' selected >select...</option>
                                            <option value='genral'>Male</option>
                                            <option value='Gastroenterology'>Female</option>
                                            <option value='Nutrition'>Other</option>
                                        </select>
                                    </div>

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="pid" className="col-span-3 justify-self-end">Patient ID</label>
                                        <input type="text" name="pid" id="pid" placeholder="enter Password" className="col-span-6 " />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="p-4 border-1 border-[#e4e7ed] mt-10 bg-[#f8f9fc] rounded-2xl">

                            <h3 className="text-[16px]  font-poppins font-medium">Contact & Address</h3>

                            <div className="adddoctore-form mt-6">

                                <div className="grid grid-cols-12 gap-y-2">
                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="age" className="col-span-3 justify-self-end">Age <span>*</span></label>
                                        <input type="text" name="age" id="age" placeholder="enter your Designation" className="col-span-6 " />
                                    </div>

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="pno" className="col-span-3 justify-self-end">Mobile No <span>*</span></label>
                                        <input type="number" name="pno" id="pno" placeholder="Mobile No" className="col-span-6 " />
                                    </div>

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4 mt-2">
                                        <label htmlFor="email" className="col-span-3 justify-self-end">Email</label>
                                        <div className="col-span-6 flex border-1 border-gray-200 bg-white items-center px-3 py-0" >
                                            <MdEmail className="text-[#555555]" /> <input type="email" name="email" id="email" placeholder="enter email" className="!border-0 w-full !mt-0" />
                                        </div>
                                    </div>

                                    <div className="col-span-12 grid grid-cols-12 items-start gap-x-4">
                                        <label htmlFor="address" className="col-span-3 justify-self-end mt-4">Address  <span>*</span></label>
                                        <textarea name="address" id="address" rows="4" className="col-span-6 w-full bg-white border-1 border-gray-200 py-2 px-4 mt-2" placeholder="Address"></textarea>
                                    </div>

                                    <div className="col-span-12 grid grid-cols-12 items-start gap-x-4">
                                        <label htmlFor="emno" className="col-span-3 justify-self-end mt-4">Emergency Contact</label>
                                        <input type="text" name="ename" id="ename" placeholder="Name" className="col-span-3 " />
                                        <input type="number" name="eno" id="eno" placeholder="Phone" className="col-span-3 " />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-1 border-[#e4e7ed] mt-10 bg-[#f8f9fc] rounded-2xl">

                            <h3 className="text-[16px]  font-poppins font-medium">Medical Details</h3>

                            <div className="adddoctore-form mt-6">
                                <div className="grid grid-cols-12 gap-y-2">

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="dept" className="col-span-3 justify-self-end">Marital Status <span>*</span></label>
                                        <select className="col-span-6 w-full">
                                            <option value='department' selected >select...</option>
                                            <option value='genral'>Single</option>
                                            <option value='Gastroenterology'>Married</option>
                                        </select>

                                        <div className="col-span-12 grid grid-cols-12 items-center gap-x-4 mt-2">
                                            <label htmlFor="bloodgrp" className="col-span-3 justify-self-end">Blood Group  <span>*</span></label>
                                            <input type="text" name="bloodgrp" id="bloodgrp" placeholder="e.g.English, Hindi, Gujarati" className="col-span-6 " />
                                        </div>

                                        <div className="col-span-12 grid grid-cols-12 items-center gap-x-4 mt-2">
                                            <label htmlFor="bloodpre" className="col-span-3 justify-self-end">Blood Presure</label>
                                            <input type="text" name="bloodpre" id="bloodpre" placeholder="LinkedIn profile URL" className="col-span-6" />
                                        </div>
 
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 justify-center mt-9 mb-4">
                                <button className="btn !py-2 !px-10 rounded-3xl !text-[18px]">submit</button>
                                <button className="px-10 !bg-[#fc544b] rounded-3xl py-2 text-[14px] font-medium text-white !text-[18px]">cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Addpatient;