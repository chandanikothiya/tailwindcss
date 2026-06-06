import React from "react";

function Adddepartment() {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">
                Add Department
            </h2>

            <div className="space-y-5">
                <div>
                    <label className="block mb-2 font-medium">
                        Department Name *
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Cardiology"
                        className="w-full border rounded-lg px-4 py-3 border-gray-200"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Department Head
                    </label>
                    <select className="w-full border rounded-lg px-4 py-3 border-gray-200 focus:border-blue-500 focus:outline-none">
                        <option>Select Doctor</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Description
                    </label>
                    <textarea
                        rows="4"
                        placeholder="Department description"
                        className="w-full border rounded-lg px-4 py-3 border-gray-200"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Status
                    </label>
                    <select className="w-full border rounded-lg px-4 py-3 border-gray-200 focus:border-blue-500 focus:outline-none">
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>

                <div className="flex justify-end gap-3 items-center ">
                    <button className="px-6 py-3 border rounded-lg">
                        Cancel
                    </button>

                    <button className="btn px-6 py-3 rounded-lg">
                        Save Department
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Adddepartment;