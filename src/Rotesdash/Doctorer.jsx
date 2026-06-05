import React from "react";
import DoctoreAll from "../Doctore/container/DoctoreAll";
import { Route, Routes } from "react-router-dom";
import PatientAll from "../Doctore/container/PatientAll";
import Appointment from "../Doctore/container/Appointment";
import Layout from "../Doctore/components/Layout";
import Schedule from "../Doctore/container/Schedule";

function Doctorer() {
    return (
        <Layout>
            <Routes>
                <Route path="/alldoctore" element={<DoctoreAll />} />
                <Route path="/allpatient" element={<PatientAll />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </Layout>
    )
}

export default Doctorer;