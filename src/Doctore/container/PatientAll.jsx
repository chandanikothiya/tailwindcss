import React from "react";

function PatientAll() {

    const patientlist = [
        {
            name: "Smith Wright",
            gender: "Male",
            age: '30',
            img: '../../../public/assets/images/pt1.png'
        },
        {
            name: "Finder Johuna",
            gender: "Male",
            age: '35',
            img: '../../../public/assets/images/pt2.png'
        },
        {
            name: "Samy Wolhalf",
            gender: "Male",
            age: '32',
            img: '../../../public/assets/images/pt3.png'
        },
        {
            name: "Carri Busey",
            gender: "Male",
            age: '38',
            img: '../../../public/assets/images/pt4.png'
        },
        {
            name: "Arthur John",
            gender: "Male",
            age: '29',
            img: '../../../public/assets/images/pt5.jpg'
        },
        {
            name: "Samy Wolhalf",
            gender: "Male",
            age: '45',
            img: '../../../public/assets/images/pt6.png'
        },
    ]


    return (
        <div >
            <h3 className="py-4 px-8 text-xl text-[#717171] shadow-sm rounded-4xl border-1 border-gray-200">All Patient</h3>
            <div className="grid grid-cols-12 gap-x-10">

                {
                    patientlist?.map?.((v, i) => (
                        <div className="col-span-4 mt-10 border-1 border-gray-200">
                            <div className="card-top !pt-7 !overflow-visible !h-[230px]">
                                <div className="patient-card  !w-full  text-center">
                                    <img src={v.img} alt="" className="w-[116px] h-[116px] object-cover rounded-full mx-auto object-top" />

                                    <h4 className="text-[17px] text-[#505458] font-merriweather font-medium mt-2">Name : {v.name}</h4>

                                </div>
                            </div>

                            <div className="cards relative z-20 -mt-6 grid grid-cols-12 gap-x-5 px-10">
                                <div className="col-span-6 shadow-sm bg-white py-3 flex flex-col items-center">
                                    <h5 className="text-[#505458] font-bold text-[14px]">{v.gender}</h5>
                                    <h4 className="text-[14px] text-[#505458] font-merriweather font-poppins">Patient Gender</h4>
                                </div>
                                <div className="col-span-6 shadow-sm bg-white py-3 flex flex-col items-center">
                                    <h5 className="text-[#505458] font-bold text-[14px]">Age:{v.age}</h5>
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