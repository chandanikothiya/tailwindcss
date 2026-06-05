import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";

function Appointment() {


    const appoinment = [
        {
            patient: {
                pid: '#PT0025',
                pimg: '../../../public/assets/images/pt1.png',
                pname: "Smith Wright"
            },
            doctore: {
                dimg: '../../../public/assets/images/te1.jpg',
                dname: "Felica Queen"
            },
            Department: 'Cardiologist',
            date: '17 Jun 2025, 09:00 AM to 10:00 AM',
            Status: 'Upcoming'
        },
        {
            patient: {
                pid: '#PT0024',
                pimg: '../../../public/assets/images/pt2.png',
                pname: "Finder Johuna"
            },
            doctore: {
                dimg: '../../../public/assets/images/te2.jpg',
                dname: "Alice Williams"
            },
            Department: 'Neurologist',
            date: '10 Jun 2025, 10:30 AM to 11:30 AM',
            Status: 'Upcoming'
        },
        {
            patient: {
                pid: '#PT0023',
                pimg: '../../../public/assets/images/pt3.png',
                pname: "Samy Wolhalf"
            },
            doctore: {
                dimg: '../../../public/assets/images/te3.jpg',
                dname: "Paul Flavius"
            },
            Department: 'Physician Assistant',
            date: '22 May 2025, 01:15 PM to 02:15 PM',
            Status: 'Upcoming'
        },
        {
            patient: {
                pid: '#PT0022',
                pimg: '../../../public/assets/images/pt4.png',
                pname: "Carri Busey"
            },
            doctore: {
                dimg: '../../../public/assets/images/te4.jpg',
                dname: "Michael Bean"
            },
            Department: 'Physician Assistant',
            date: '15 May 2025, 11:30 AM to 12:30 PM',
            Status: 'Inprogress'
        },
        {
            patient: {
                pid: '#PT0021',
                pimg: '../../../public/assets/images/pt5.jpg',
                pname: "Arthur John"
            },
            doctore: {
                dimg: '../../../public/assets/images/te5.jpg',
                dname: "Smith Wright"
            },
            Department: 'Clinical Doctor',
            date: '30 Apr 2025, 12:20 PM to 01:20 PM',
            Status: 'Completed'
        },
        {
            patient: {
                pid: '#PT0020',
                pimg: '../../../public/assets/images/pt6.png',
                pname: "Samy Wolhalf"
            },
            doctore: {
                dimg: '../../../public/assets/images/te6.jpg',
                dname: "Brooks Latshaw"
            },
            Department: 'Clinical Doctor',
            date: '25 Apr 2025, 03:15 PM to 04:15 PM',
            Status: 'Completed'
        }
    ]

    return (
        <div >
            <h3 className="py-4 px-8 text-xl text-[#717171] shadow-sm rounded-4xl border-1 border-gray-200">Appoinment</h3>

            <div className="border-1 border-gray-200 rounded-lg mt-10">
                <div className="px-5 py-3 flex justify-between">
                    <h3 className="text-[18px] font-[600] gap-x-3 flex items-center">Total Appointments <div className="bg-[#b71c1c] text-white text-[12px] font-[400] font-poppins px-2 py-[2px] rounded-lg">950</div></h3>

                    <form action="">
                        <label>Search:</label>
                        <input type="text" name="search" id="search" className="border-1 border-[#ccc] py-[8px] px-2 rounded-md ml-3 focus:!outline-1  focus:!outline-1  focus:border-[#ccc]" />
                    </form>
                </div>

                <hr className="border-gray-200" />

                {/* <div className="px-5 py-3 appointment-tbl overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="!pl-1">Patient ID</th>
                                <th>Patient Name</th>
                                <th>Doctor Name</th>
                                <th>Department</th>
                                <th>Appointment Date</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="!text-left pl-3">#PT0025</td>
                                <td>
                                    <div className="flex items-center justify-center gap-2">
                                        <img
                                            src="/assets/images/comment1.jpg"
                                            alt="Patient"
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <span>James Carter</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center justify-center gap-2">
                                        <img
                                            src="/assets/images/comment1.jpg"
                                            alt="Patient"
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <span>Dr. Andrew Clark</span>
                                    </div>
                                </td>
                                <td>Anaesthesiology</td>
                                <td>17 Jun 2025, 09:00 AM to 10:00 AM 09:00 AM to 10:00 AM</td>
                                <td>Upcoming</td>
                                <td><BsThreeDotsVertical /></td>
                            </tr>
                        </tbody>

                    </table>
                </div> */}

                <div className="px-5 py-5 overflow-visible">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-visible">
                        <table className="w-full overflow-visible">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Patient ID</th>
                                    <th className="px-6 py-4 text-left font-semibold">Patient Name</th>
                                    <th className="px-6 py-4 text-left font-semibold">Doctor Name</th>
                                    <th className="px-6 py-4 text-left font-semibold">Department</th>
                                    <th className="px-6 py-4 text-left font-semibold">Appointment Date</th>
                                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                                    <th className="px-6 py-4"></th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    appoinment?.map((v, i) => (
                                        <tr className="border-t border-gray-200 hover:bg-gray-50 ">
                                            <td className="px-6 py-4">#PT0025</td>

                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={v?.patient?.pimg}
                                                        alt=""
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                    <span>{v?.patient?.pname}</span>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={v?.doctore?.dimg}
                                                        alt=""
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                    <span>{v?.doctore?.dname}</span>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4">{v?.Department}</td>

                                            <td className="px-6 py-4">
                                                {v?.date}
                                            </td>

                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 text-xs font-medium rounded-md ${v.Status === 'Upcoming' ? 'bg-purple-100 text-purple-700'
                                                    : v.Status === 'Inprogress' ? 'bg-[#ebf3fc] text-[#1976d2]' : 'bg-[#eef9f1] text-[9, 128, 15'} `}>
                                                    {v.Status}
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

export default Appointment;