import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";

function Managedepartment() {

    const appoinment = [
        {
            did: '01',
            dname: 'Cardiologist',
            dhead: 'Felica Queen',
            status: 'active',
            himg: '../../../public/assets/images/te1.jpg'
        },
        {
            did: '02',
            dname: 'Neurologist',
            dhead: 'Alice Williams',
            status: 'active',
            himg: '../../../public/assets/images/te2.jpg'
        },
        {
            did: '03',
            dname: 'Physician Assistant',
            dhead: 'Paul Flavius',
            status: 'active',
            himg: '../../../public/assets/images/te3.jpg'
        },
        {
            did: '04',
            dname: 'Physician Assistant',
            dhead: 'Michael Bean',
            status: 'active',
            himg: '../../../public/assets/images/te4.jpg'
        },
        {
            did: '05',
            dname: 'Clinical Doctor',
            dhead: 'Smith Wright',
            status: 'active',
            himg: '../../../public/assets/images/te5.jpg'
        },
        {
            did: '06',
            dname: 'Surgeon',
            dhead: 'Brooks Latshaw',
            status: 'active',
            himg: '../../../public/assets/images/te6.jpg'
        },

    ]

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
                                    <th className="px-6 py-4 text-left font-semibold">Department ID</th>
                                    <th className="px-6 py-4 text-left font-semibold">Department Name</th>
                                    <th className="px-6 py-4 text-left font-semibold">Head Name</th>
                                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                                    <th className="px-6 py-4"></th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    appoinment?.map((v, i) => (
                                        <tr className="border-t border-gray-200 hover:bg-gray-50 ">
                                            <td className="px-6 py-4">{v.did}</td>

                                             <td className="px-6 py-4">{v.dname}</td>

                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={v?.himg}
                                                        alt=""
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                    <span>{v?.dhead}</span>
                                                </div>
                                            </td>


                                             <td className="px-6 py-4">
                                                <span className={`px-3 py-1 text-xs font-medium rounded-md ${
                                                    v.status === 'active' ? 'bg-[#ebf3fc] text-[#1976d2]' : 'bg-[#fee2e2] text-[#dc2626]'} `}>
                                                    {v.status}
                                                </span>
                                            </td>


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

                                                            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
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
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Managedepartment;