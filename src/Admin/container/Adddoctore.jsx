import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { mixed, object, string } from 'yup';
import { adddoctore, getdoctore, updatedoctore } from "../../redux/slice/doctore.slice";
import { useParams, useSearchParams } from "react-router-dom";
import { IMG_URL } from "../../utility/url";


function Adddoctore() {

    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const { id } = useParams();
    console.log(id)

    // if (id) {
    //     dispatch(getdoctore(id))
    // }

    useEffect(() => {
        dispatch(getdoctore(id))
    }, [id])

    const doctores = useSelector(state => state.doctore)
    const doctoredata = doctores?.doctore?.[0]
    //console.log(doctores.doctore, Object.keys(doctoredata)?.length > 0)

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(URL.createObjectURL(file));
            setFieldValue("profile_img", file);
        }
    };

    const department = object({
        profile_img: mixed().test(
            "fileRequired",
            "Profile image is required",
            value => {
                if (!value) return false;

                return (
                    value instanceof File ||
                    typeof value === "string"
                );
            }
        ),
        fname: string().required(),
        lname: string().required(),
        email: string().email(),
        gender: string().required(),
        pass: string(),
        cpass: string(),
        designation: string().required(),
        dept: string().required(),
        lno: string().required(),
        pno: string().required(),
        bod: string().required(),
        address: string().required(),
        eduction: string().required(),
        languages: string(),
        linkdin: string(),
    })

    const formik = useFormik({
        initialValues: {
            profile_img: doctoredata?.profile_img || '',
            fname: doctoredata?.fname || '',
            lname: doctoredata?.lname || '',
            email: doctoredata?.email || '',
            gender: doctoredata?.gender || '',
            pass: '',
            designation: doctoredata?.designation || '',
            dept: doctoredata?.departments || '',
            lno: doctoredata?.lno || '',
            pno: doctoredata?.pno || '',
            bod: doctoredata?.dob || '',
            address: doctoredata?.address || '',
            eduction: doctoredata?.education || '',
            languages: doctoredata?.languages || '',
            linkdin: doctoredata?.linkdin || '',
            exp: doctoredata?.exp || ''
        },
        validationSchema: department,
        enableReinitialize: true,
        onSubmit: (values, { resetForm }) => {
            console.log("values", values);

            if (Object.keys(doctoredata).length > 0) {
                dispatch(updatedoctore({...values,id:doctoredata?._id}))
            } else {
                dispatch(adddoctore(values))
            }

            resetForm();
        },
    })

    const { handleSubmit, handleBlur, handleChange, values, touched, errors, setFieldValue, setFieldTouched } = formik;
    // console.log(errors, touched)
    console.log("profile:", values);
    console.log("errors:", errors);
    console.log("touched:", touched);

    return (
        <div >
            <h3 className="py-4 px-8 text-xl text-[#717171] shadow-sm rounded-4xl border-1 border-gray-200">Add Doctore</h3>

            <div className="grid grid-cols-12">
                <div className="bg-white border-1 border-gray-200 p-5 col-span-10 col-start-2 mt-12 shadow-md rounded-md">
                    <h4 className="text-[19px] font-poppins font-medium pb-4 border-b-1 border-b-gray-200">New Doctore</h4>
                    <form onSubmit={handleSubmit} className="doctore-form">
                        <div className="flex items-center gap-x-5 mt-6 ml-1">
                            <label>Profile Image</label>

                            <div className="relative w-24 h-24">
                                <label
                                    htmlFor="profile_img"
                                    className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer border border-gray-200"
                                >
                                    {image ? (
                                        <img
                                            src={image}
                                            alt="profile"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : doctoredata?.profile_img ? (
                                        <img
                                            src={IMG_URL + doctoredata.profile_img.replace(/\\/g, "/")}
                                            alt="profile"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <IoPersonAddOutline className="text-2xl text-gray-500" />
                                    )}
                                </label>

                                <input
                                    type="file"
                                    id="profile_img"
                                    name="profile_img"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImage}
                                    onBlur={handleBlur}
                                />

                                <label
                                    htmlFor="profile"
                                    className="absolute bottom-0 left-0 right-0 bg-black text-white h-6 flex items-center justify-center cursor-pointer rounded-b-full"
                                >
                                    <FaCamera className="text-sm" />
                                </label>
                                {errors.profile_img && touched.profile_img && (
                                    <span className="espan !w-[170px] !mt-2">
                                        {errors.profile_img}
                                    </span>
                                )}
                            </div>
                        </div>


                        <div className="p-4 border-1 border-[#e4e7ed] mt-10 bg-[#f8f9fc] rounded-2xl">

                            <h3 className="text-[16px]  font-poppins font-medium">Personal Information</h3>

                            <div className="adddoctore-form mt-6">

                                <div className="grid grid-cols-12 gap-y-2">
                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="fname" className="col-span-3 justify-self-end">First Name <span>*</span></label>
                                        <input type="text" name="fname" id="fname" placeholder="enter first name"
                                            className="col-span-6 "
                                            value={values.fname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    {errors.fname && touched.fname ? <span className="espan">{errors.fname}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="lname" className="col-span-3 justify-self-end">Last Name <span>*</span></label>
                                        <input type="text" name="lname" id="lname" placeholder="enter last name" className="col-span-6"
                                            value={values.lname}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    {errors.lname && touched.lname ? <span className="espan">{errors.lname}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4 mt-2">
                                        <label htmlFor="email" className="col-span-3 justify-self-end">Email</label>
                                        <div className="col-span-6 flex border-1 border-gray-200 bg-white items-center px-3 py-0" >
                                            <MdEmail className="text-[#555555]" /> <input type="email" name="email" id="email" placeholder="enter email"
                                                className="!border-0 w-full !mt-0" value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    {errors.email && touched.email ? <span className="espan">{errors.email}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="dept" className="col-span-3 justify-self-end">Gender <span>*</span></label>
                                        <select
                                            name="gender"
                                            id="gender"
                                            value={values.gender}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            <option value="">Select...</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    {errors.gender && touched.gender ? <span className="espan">{errors.gender}</span> : ""}


                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="password" className="col-span-3 justify-self-end">Password  <span>*</span></label>
                                        <input type="text" name="pass" id="pass" placeholder="enter Password" className="col-span-6 " value={values.pass}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    {errors.pass && touched.pass ? <span className="espan">{errors.pass}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="cpassword" className="col-span-3 justify-self-end">Confirm Password <span>*</span></label>
                                        <input type="text" name="cpass" id="cpass" placeholder="Reenter your Password" className="col-span-6" value={values.cpass}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    {errors.cpass && touched.cpass ? <span className="espan">{errors.cpass}</span> : ""}
                                </div>

                            </div>
                        </div>

                        <div className="p-4 border-1 border-[#e4e7ed] mt-10 bg-[#f8f9fc] rounded-2xl">

                            <h3 className="text-[16px]  font-poppins font-medium">Professional Details</h3>

                            <div className="adddoctore-form mt-6">

                                <div className="grid grid-cols-12 gap-y-2">
                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="designation" className="col-span-3 justify-self-end">Designation <span>*</span></label>
                                        <input type="text" name="designation" id="designation" placeholder="enter your Designation" className="col-span-6 " value={values.designation}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    {errors.des && touched.des ? <span className="espan">{errors.des}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="fname" className="col-span-3 justify-self-end">Departments <span>*</span></label>
                                        <select
                                            name="dept"
                                            id="dept"
                                            value={values.dept}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            <option value="">Select...</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Neurology">Neurology</option>
                                            <option value="Orthopedics">Orthopedics</option>
                                            <option value="Dermatology">Dermatology</option>
                                            <option value="Gastroenterology">Gastroenterology</option>
                                            <option value="Endocrinology">Endocrinology</option>
                                            <option value="Pulmonology">Pulmonology</option>
                                            <option value="Nephrology">Nephrology</option>
                                            <option value="Nephrology">Dentistry</option>
                                            <option value="General Medicine">General Medicine</option>
                                            <option value="Nephrology">General Surgery</option>
                                        </select>
                                    </div>
                                    {errors.dept && touched.dept ? <span className="espan">{errors.dept}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="exp" className="col-span-3 justify-self-end">Years of Experience</label>
                                        <input type="number" name="exp" id="exp" placeholder="enter Years of Experience" className="col-span-6 " value={values.exp}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    {errors.exp && touched.exp ? <span className="espan">{errors.exp}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="lno" className="col-span-3 justify-self-end">License Number <span>*</span></label>
                                        <input type="text" name="lno" id="lno" placeholder="Medical license number" className="col-span-6" value={values.lno}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    {errors.lno && touched.lno ? <span className="espan">{errors.lno}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="pno" className="col-span-3 justify-self-end">Mobile No <span>*</span></label>
                                        <input type="number" name="pno" id="pno" placeholder="Mobile No" className="col-span-6 " value={values.pno}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    {errors.pno && touched.pno ? <span className="espan">{errors.pno}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="lname" className="col-span-3 justify-self-end">Birth Date <span>*</span></label>
                                        <input type="date" name="bod" id="bod" placeholder="Medical license number" className="col-span-6" value={values.bod}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    {errors.bod && touched.bod ? <span className="espan">{errors.bod}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-start gap-x-4">
                                        <label htmlFor="address" className="col-span-3 justify-self-end mt-4">Address <span>*</span></label>
                                        <textarea name="address" id="address" rows="4" className="col-span-6 w-full bg-white border-1 border-gray-200 py-2 px-4 mt-2"
                                            placeholder="About Doctor" value={values.address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}></textarea>
                                    </div>
                                    {errors.address && touched.address ? <span className="espan">{errors.address}</span> : ""}

                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-1 border-[#e4e7ed] mt-10 bg-[#f8f9fc] rounded-2xl">

                            <h3 className="text-[16px]  font-poppins font-medium">Profile & Education</h3>

                            <div className="adddoctore-form mt-6">
                                <div className="grid grid-cols-12 gap-y-2">

                                    <div className="col-span-12 grid grid-cols-12 items-start gap-x-4">
                                        <label htmlFor="eduction" className="col-span-3 justify-self-end mt-4">Education <span>*</span></label>
                                        <textarea name="eduction" id="eduction" rows="4" className="col-span-6 w-full bg-white border-1 border-gray-200 py-2 px-4 mt-2"
                                            placeholder="About Education" value={values.eduction}
                                            onChange={handleChange}
                                            onBlur={handleBlur}></textarea>
                                    </div>
                                    {errors.eduction && touched.eduction ? <span className="espan">{errors.eduction}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="languages" className="col-span-3 justify-self-end">Languages</label>
                                        <input type="text" name="languages" id="languages" placeholder="e.g.English, Hindi, Gujarati" className="col-span-6 " value={values.languages}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    {errors.languages && touched.languages ? <span className="espan">{errors.languages}</span> : ""}

                                    <div className="col-span-12 grid grid-cols-12 items-center gap-x-4">
                                        <label htmlFor="linkdin" className="col-span-3 justify-self-end">LinkedIn</label>
                                        <input type="text" name="linkdin" id="linkdin" placeholder="LinkedIn profile URL" className="col-span-6" value={values.linkdin}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    {errors.linkdin && touched.linkdin ? <span className="espan">{errors.linkdin}</span> : ""}

                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 justify-center mt-9 mb-4">
                            <button className="btn !py-2 !px-10 rounded-3xl !text-[18px]" type="submit">submit</button>
                            <button className="px-10 !bg-[#fc544b] rounded-3xl py-2 text-[14px] font-medium text-white !text-[18px]">cancel</button>
                        </div>

                    </form>
                </div>
            </div>


        </div>
    )
}

export default Adddoctore;