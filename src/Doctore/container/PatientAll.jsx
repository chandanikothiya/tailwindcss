import React from "react";

function PatientAll() {

    const doctorelist = [
        {
            name: "Felica Queen",
            role: "Cardiologist",
            age: '30',
            experiance: '5',
            degree: 'M.D.',
            img: '../../../public/assets/images/te1.jpg'
        },
        {
            name: "Alice Williams",
            role: "Neurologist",
            age: '35',
            experiance: '8',
            degree: 'MBBS',
            img: '../../../public/assets/images/te2.jpg'
        },
        {
            name: "Paul Flavius",
            role: "Physician Assistant",
            age: '32',
            experiance: '4',
            degree: 'MPA',
            img: '../../../public/assets/images/te3.jpg'
        },
        {
            name: "Michael Bean",
            role: "Physician Assistant",
            age: '38',
            experiance: '6',
            degree: 'MPA',
            img: '../../../public/assets/images/te4.jpg'
        },
        {
            name: "Smith Wright",
            role: "Clinical Doctor",
            age: '29',
            experiance: '3',
            degree: 'BDS,MDS',
            img: '../../../public/assets/images/te5.jpg'
        },
        {
            name: "Brooks Latshaw",
            role: "Surgeon",
            age: '45',
            experiance: '10',
            degree: 'MBBS,MD',
            img: '../../../public/assets/images/te6.jpg'
        },
    ]


    return (
        <div >
            <h3 className="py-5 px-8 text-2xl text-[#717171] shadow-sm rounded-4xl border-1 border-gray-200">All Patient</h3>
            <div className="grid grid-cols-12 gap-x-10">

                {
                    doctorelist?.map?.((v, i) => (
                        <div className="col-span-4 mt-10 border-1 border-gray-200">
                            <div className="card-top !pt-7 !overflow-visible !h-[230px]">
                                <div className="patient-card  !w-full  text-center">
                                    <img src={v.img} alt="" className="w-[116px] h-[116px] object-cover rounded-full mx-auto object-top" />

                                    <h4 className="text-[18px] text-[#505458] font-merriweather font-medium text-white">{v.name}</h4>

                                </div>
                            </div>

                            <div className="cards relative z-20 -mt-6 grid grid-cols-12 gap-x-5 px-10">
                                <div className="col-span-6 shadow-sm bg-white py-3 flex flex-col items-center">
                                    <h5 className="text-[#505458] font-bold text-[14px]">Male</h5>
                                    <h4 className="text-[14px] text-[#505458] font-merriweather font-poppins">Patient Gender</h4>
                                </div>
                                <div className="col-span-6 shadow-sm bg-white py-3 flex flex-col items-center">
                                    <h5 className="text-[#505458] font-bold text-[14px]">Age: 23</h5>
                                    <h4 className="text-[14px] text-[#505458] font-merriweather font-poppins">Years Old</h4>
                                </div>
                            </div>

                            <div className="px-5 mt-7 pb-4">
                                <button className="btn my-0 w-[200px] min-[576px]:w-[300px] !py-2 min-[992px]:py-4 min-[768px]:w-full !text-lg">View Profile</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default PatientAll;