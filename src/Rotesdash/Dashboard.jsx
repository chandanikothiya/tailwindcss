import React from "react";
import Layout from "../Doctore/components/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import ALayout from "../Admin/components/ALayout";
import NLayout from "../Nurse/components/NLayout";
import DoctoreAll from "../Doctore/container/DoctoreAll";
import PatientAll from "../Doctore/container/PatientAll";
import Appointment from "../Doctore/container/Appointment";
import Schedule from "../Doctore/container/Schedule";
import Adddoctore from "../Admin/container/Adddoctore";
import Addpatient from "../Admin/container/Addpatient";
import Department from "../container/Department";
import Adddepartment from "../Admin/container/Adddepartment";
import Managedepartment from "../Admin/container/Managedepartment";
import Editdoctore from "../Admin/container/Editdoctore";

function Dashboard() {

    const location = useLocation();

    const pathname = location.pathname;
    console.log(pathname)

    const LayoutComponent = pathname.startsWith("/doctore")
        ? Layout
        : pathname.startsWith("/admin")
            ? ALayout
            : NLayout;

    return (
        <LayoutComponent>
            <Routes>
                <Route path="/alldoctore" element={<DoctoreAll />} />
                <Route path="/allpatient" element={<PatientAll />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/aalldoctore" element={<DoctoreAll />} />
                <Route path="/adddoctore" element={<Adddoctore />} />
                <Route path="/addpatient" element={<Addpatient />} />
                <Route path="/department" element={<Adddepartment />} />
                <Route path="/mangedepartment" element={<Managedepartment />} />
                <Route path="/editdoctore" element={<Editdoctore />} />
            </Routes>
        </LayoutComponent>
    )
}

export default Dashboard;