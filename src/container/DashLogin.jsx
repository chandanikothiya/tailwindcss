import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";

function DashLogin() {

    const [role, setRole] = useState('Nurse');


    function handlechangeroll(e) {
        console.log(e.target.innerText)
        setRole(e.target.innerText)
    }

    return (
        <div className="deshlogin min-h-screen">
            <div className="containercust min-h-screen">
                <div className="grid grid-cols-12 min-h-screen gap-x-10">

                    <div className="loginimg col-span-6">
                        <div className="flex items-center h-full">
                            <img src="../../../public/assets/images/Medicine-amico.png" alt="" className="w-full" />
                        </div>
                    </div>

                    <div className="col-span-6">
                        <div className="flex items-center h-full">
                            <div className="login h-fit px-10 py-15 shadow-2xl ml-25 w-full">
                                <h3 className="text-[30px] font-poppins font-medium text-center">Login</h3>

                                <ul className="flex border-1 border-gray-200 w-fit  px-2 rounded-md mx-auto my-7">
                                    <li onClick={(e) => handlechangeroll(e)} className={`${role === 'Nurse' ? 'lactive' : ''}`}>Nurse</li>
                                    <li onClick={(e) => handlechangeroll(e)} className={`${role === 'Doctore' ? 'lactive' : ''} border-x-1 border-gray-200`}>Doctore</li>
                                    <li onClick={(e) => handlechangeroll(e)} className={`${role === 'Admin' ? 'lactive' : ''}`}>Admin</li>
                                </ul>

                                <form action="">

                                    <div>
                                        <label htmlFor="">{role} ID</label>
                                        <input type="text" name="nurseid" id="nurseid" />
                                    </div>

                                    <div className="mt-8">
                                        <label htmlFor="">Password</label>
                                        <input type="text" name="nurseid" id="nurseid" />
                                    </div>
                                    <div className="mt-5 text-center">
                                        <button className="btn my-0 w-[200px] min-[576px]:w-[300px] py-3 min-[992px]:py-4 min-[768px]:w-[400px] rounded-md !text-lg">Login</button>
                                    </div>

                                    <p className="text-center">not have account ? <a href="#" className="text-blue-600">signup</a></p>
                                    <p className="text-center mt-3">Forget Password ? <a href="#" className="text-blue-600">Get it on Email !</a></p>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashLogin;