import React from "react";

function DoctoreAll() {

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
            <h3 className="py-5 px-8 text-2xl text-[#717171] shadow-sm rounded-4xl border-1 border-gray-200">All Doctore</h3>
            <div className="grid grid-cols-12 gap-x-10">

                {
                    doctorelist?.map?.((v, i) => (
                        <div className="col-span-4 mt-10 border-1 border-gray-200">
                            <div className="card-top !pt-7 !overflow-visible">
                                <div className="doctore-card bg-white relative flex gap-x-3 items-start !w-full ">
                                    <img src={v.img} alt="" className="w-20 rounded-2xl" />

                                    <div>
                                        <h4 className="text-[18px] text-[#505458] font-merriweather font-medium">{v.name}</h4>
                                        <h5 className="text-[14px] text-[#505458] font-merriweather font-poppins mt-2">{v.role}</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="cards relative z-20 -mt-6 grid grid-cols-12 gap-x-5 px-10">
                                <div className="col-span-4 shadow-sm bg-white py-3 flex flex-col items-center">
                                    <h5 className="text-[#505458] font-bold text-[14px]">{v.age} Years</h5>
                                    <h4 className="text-[14px] text-[#505458] font-merriweather font-poppins">age</h4>
                                </div>
                                <div className="col-span-4 shadow-sm bg-white py-3 flex flex-col items-center">
                                    <h5 className="text-[#505458] font-bold text-[14px]">{v.experiance}</h5>
                                    <h4 className="text-[14px] text-[#505458] font-merriweather font-poppins">Experiance</h4>
                                </div>
                                <div className="col-span-4 shadow-sm bg-white py-3 flex flex-col items-center">
                                    <h5 className="text-[#505458] font-bold text-[14px]">{v.degree}</h5>
                                    <h4 className="text-[14px] text-[#505458] font-merriweather font-poppins">Degree</h4>
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

export default DoctoreAll;