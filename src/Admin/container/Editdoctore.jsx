import React, { useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getalldoctore, getdoctore } from "../../redux/slice/doctore.slice";
import { IMG_URL } from "../../utility/url";
import { useNavigate, useSearchParams } from "react-router-dom";

function Editdoctore() {

    const doctorelist = [
        {
            did: '01',
            name: "Felica Queen",
            role: "Cardiologist",
            age: '30',
            experiance: '5',
            degree: 'M.D.',
            img: '../../../public/assets/images/te1.jpg'
        },
        {
            did: '02',
            name: "Alice Williams",
            role: "Neurologist",
            age: '35',
            experiance: '8',
            degree: 'MBBS',
            img: '../../../public/assets/images/te2.jpg'
        },
        {
            did: '03',
            name: "Paul Flavius",
            role: "Physician Assistant",
            age: '32',
            experiance: '4',
            degree: 'MPA',
            img: '../../../public/assets/images/te3.jpg'
        },
        {
            did: '03',
            name: "Michael Bean",
            role: "Physician Assistant",
            age: '38',
            experiance: '6',
            degree: 'MPA',
            img: '../../../public/assets/images/te4.jpg'
        },
        {
            did: '04',
            name: "Smith Wright",
            role: "Clinical Doctor",
            age: '29',
            experiance: '3',
            degree: 'BDS,MDS',
            img: '../../../public/assets/images/te5.jpg'
        },
        {
            did: '05',
            name: "Brooks Latshaw",
            role: "Surgeon",
            age: '45',
            experiance: '10',
            degree: 'MBBS,MD',
            img: '../../../public/assets/images/te6.jpg'
        },
    ]

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const doctores = useSelector(state => state.doctore)
    console.log(doctores.doctore)

    function getdata() {
        dispatch(getalldoctore());
    }

    useEffect(() => {
        getdata();
    }, [])


    function handleedit(id) {
        navigate(`/admin/adddoctore/${id}`)
    }

    return (
        <div >
            <h3 className="py-4 px-8 text-xl text-[#717171] shadow-sm rounded-4xl border-1 border-gray-200">Department</h3>

            <div className="border-1 border-gray-200 rounded-lg mt-10">
                <div className="px-5 py-3 flex justify-between">
                    <h3 className="text-[18px] font-[600] gap-x-3 flex items-center">Total Department</h3>

                    <form action="">
                        <label>Search:</label>
                        <input type="text" name="search" id="search" className="border-1 border-[#ccc] py-[8px] px-2 rounded-md ml-3 focus:!outline-1  focus:!outline-1  focus:border-[#ccc]" />
                    </form>
                </div>

                <hr className="border-gray-200" />

                <div className="px-5 py-5 overflow-visible">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-visible">
                        <table className="w-full overflow-visible">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Doctore ID</th>
                                    <th className="px-6 py-4 text-left font-semibold">Doctore</th>
                                    <th className="px-6 py-4 text-left font-semibold">Department Name</th>
                                    <th className="px-6 py-4 text-left font-semibold">Age</th>
                                    <th className="px-6 py-4 text-left font-semibold">Degree</th>
                                    <th className="px-6 py-4 text-left font-semibold">Experiance</th>
                                    <th className="px-6 py-4"></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    doctores.doctore?.map((v, i) => {

                                        const today = new Date();
                                        const bdate = new Date(v.dob);

                                        let age = today.getFullYear() - bdate.getFullYear();
                                        console.log(age, bdate, v.dob)

                                        return (<tr className="border-t border-gray-200 hover:bg-gray-50 ">
                                            <td className="px-6 py-4">{v._id.slice(-4)}</td>

                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={IMG_URL + v.profile_img}
                                                        alt=""
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                    <span>{v.fname + " " + v.lname}</span>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4">{v.departments}</td>

                                            <td className="px-6 py-4">{age}</td>

                                            <td className="px-6 py-4">{v.education}</td>

                                            <td className="px-6 py-4">{v.exp}</td>


                                            <td className="px-6 py-4 text-center">
                                                <div className="relative inline-block group">
                                                    <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                                                        <BsThreeDotsVertical />
                                                    </button>

                                                    <div
                                                        className="
                                                                      absolute right-0 top-10
                                                                      min-w-[170px]
                                                                      bg-white
                                                                      border border-gray-200
                                                                      rounded-lg
                                                                      shadow-lg
                                                                      opacity-0
                                                                      invisible
                                                                      group-hover:opacity-100
                                                                      group-hover:visible
                                                                      transition-all
                                                                      duration-200
                                                                      z-50
                                                                  "
                                                    >
                                                        <ul className="py-2">
                                                            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                                                                <LuEye />
                                                                View Details
                                                            </li>

                                                            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleedit(v._id)}>
                                                                <BiEdit />
                                                                Edit
                                                            </li>

                                                            <li className="px-4 py-2 flex items-center gap-2 hover:bg-red-50 text-red-500 cursor-pointer">
                                                                <RiDeleteBin5Line />
                                                                Delete
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Editdoctore;