import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { object, string } from 'yup';
import { adddepartment } from "../../redux/slice/department.slice";


function Adddepartment() {


    const dispatch = useDispatch();

    const department = object({
        name: string().required(),
        des: string().required(),
        status: string().required(),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            des: '',
            status: ''
        },
        validationSchema: department,
        onSubmit: values => {
            console.log(values)
            //dispatch(registeruser(values))
            //dispatch(verifyuser(values))

            dispatch(adddepartment(values))
        },
    })

    const { handleSubmit, handleBlur, handleChange, values, touched, errors } = formik;
    console.log(errors, touched)


    return (
        <form className="bg-white rounded-xl p-6 shadow-sm dept-form" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-6">
                Add Department
            </h2>

            <div>
                <div>
                    <label className="block mb-2 font-medium">
                        Department Name *
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Cardiology"
                        className="w-full border rounded-lg px-4 py-3 border-gray-200"
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {errors.name && touched.name ? <span>{errors.name}</span> : ""}

                <div className="mt-5">
                    <label className="block mb-2 font-medium">
                        Department Head
                    </label>
                    <select className="w-full border rounded-lg px-4 py-3 border-gray-200 focus:border-blue-500 focus:outline-none">
                        <option>Select Doctor</option>
                    </select>
                </div>

                <div className="mt-5">
                    <label className="block mb-2 font-medium">
                        Description
                    </label>
                    <textarea
                        rows="4"
                        placeholder="Department description"
                        className="w-full border rounded-lg px-4 py-3 border-gray-200"
                        name="des"
                        id="des"
                        value={values.des}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {errors.des && touched.des ? <span>{errors.des}</span> : ""}

                <div className="mt-5">
                    <label className="block mb-2 font-medium">
                        Status
                    </label>
                    <select
                        className="w-full border rounded-lg px-4 py-3 border-gray-200"
                        name="status"
                        id="status"
                        value={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                {errors.status && touched.status ? <span>{errors.status}</span> : ""}

                <div className="flex justify-end gap-3 items-center ">
                    <button className="px-6 py-3 border rounded-lg">
                        Cancel
                    </button>

                    <button className="btn px-6 py-3 rounded-lg" type="submit">
                        Save Department
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Adddepartment;