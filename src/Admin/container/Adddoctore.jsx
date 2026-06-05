import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";

function Adddoctore() {

    const [image, setImage] = useState(null);

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };


    return (
        <div >
            <h3 className="py-4 px-8 text-xl text-[#717171] shadow-sm rounded-4xl border-1 border-gray-200">Add Doctore</h3>

            <div className="grid grid-cols-12">
                <div className="bg-white border-1 border-gray-200 p-5 col-span-10 col-start-2">
                    <h4 className="text-[19px] font-poppins font-medium pb-4 border-b-1 border-b-gray-200">New Doctore</h4>

                    <h3 className="mt-6 text-[16px]  font-poppins font-medium ml-6">Contact Information</h3>

                    <form >
                        <div className="flex items-center gap-x-5 mt-6">
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

                        <div className="grid grid-cols-12 gap-x-8 gap-y-5 addd mt-6">
                            <div className="col-span-6">
                                <label>Name</label>
                                <input type="text" name="name" id="name" />
                            </div>

                            <div className="col-span-6">
                                <label>Username </label>
                                <input type="text" name="uname" id="uname" />
                            </div>

                            <div className="col-span-6">
                                <label>Phone Number</label>
                                <input type="text" name="pno" id="pno" />
                            </div>

                            <div className="col-span-6">
                                <label>Email Address</label>
                                <input type="email" name="email" id="email" />
                            </div>

                            <div className="col-span-6">
                                <label>DOB </label>
                                <input type="date" name="dob" id="dob" />
                            </div>

                            <div className="col-span-6">
                                <label>Year Of Experience  </label>
                                <input type="text" name="exp" id="exp" />
                            </div>

                            <div className="col-span-6">
                                <label>Department</label>
                                <select className="w-full text-gray-400 !border-1 border-gray-200 w-full py-2 px-4 mt-2 rounded-lg">
                                    <option value='department' selected >Department</option>
                                    <option value='genral'>Cardiology</option>
                                    <option value='Gastroenterology'>Neurology</option>
                                    <option value='Nutrition'>Orthopedics</option>
                                    <option value='Cardiology'>Dermatology</option>
                                    <option value='Neurology'>Gastroenterology</option>
                                    <option value='Pediatric'>Endocrinology</option>
                                     <option value='Neurology'>Pulmonology</option>
                                    <option value='Pediatric'>Nephrology</option>
                                </select>
                            </div>

                            <div className="col-span-6">
                                <label>Designation</label>
                                <select className="w-full text-gray-400 !border-1 border-gray-200 w-full py-2 px-4 mt-2 rounded-lg">
                                    <option value='department' selected >Designation</option>
                                    <option value='genral'>Senior Consultant</option>
                                    <option value='Gastroenterology'>Junior Consultant</option>
                                    <option value='Nutrition'>Specialist</option>
                                    <option value='Cardiology'>Senior Specialist</option>
                                    <option value='Neurology'>Resident Doctor</option>
                                    <option value='Pediatric'>Chief Medical Officer</option>
                                    <option value='genral'>Medical Officer</option>
                                    <option value='Gastroenterology'>Attending Physician</option>
                                    <option value='Nutrition'>Registrar</option>
                                    <option value='Cardiology'>Senior Registrar</option>
                                    <option value='Neurology'>Professor</option>
                                    <option value='Pediatric'>Head of Department (HOD)</option>
                                </select>
                            </div>

                             <div className="col-span-6">
                                <label>Medical License Number</label>
                                <input type="text" name="bgroup" id="bgroup" />
                            </div>

                            <div className="col-span-6">
                                <label>Language Spoken</label>
                               <select className="w-full text-gray-400 !border-1 border-gray-200 w-full py-2 px-4 mt-2 rounded-lg">
                                    <option value='department' selected >Language</option>
                                    <option value='genral'>English</option>
                                    <option value='Gastroenterology'>Hindi</option>
                                    <option value='Nutrition'>Gujarati</option>
                                </select>
                            </div>

                            <div className="col-span-6">
                                <label>Blood Group*</label>
                                <input type="text" name="bgroup" id="bgroup" />
                            </div>

                            <div className="col-span-6">
                                <label>Gender</label>
                               <select className="w-full text-gray-400 !border-1 border-gray-200 w-full py-2 px-4 mt-2 rounded-lg">
                                    <option value='department' selected >Gender</option>
                                    <option value='genral'>Male</option>
                                    <option value='Gastroenterology'>Female</option>
                                    <option value='Nutrition'>Other</option>
                                </select>
                            </div>

                            <div className="col-span-12">
                                <label>Bio</label>
                                <textarea name="bio" id="bio" rows="3" className="w-full border-1 border-gray-200 py-2 px-4 mt-2" placeholder="About Doctor"></textarea>
                            </div>
                        </div>

                        <h3 className="mt-6 text-[16px]  font-poppins font-medium ml-6">Appointment Information</h3>




                    </form>

                </div>
            </div>


        </div>
    )
}

export default Adddoctore;