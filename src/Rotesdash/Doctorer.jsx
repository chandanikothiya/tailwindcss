import React from "react";
import Layout from "../Doctore/container/components/Layout";
import DoctoreAll from "../Doctore/container/DoctoreAll";
import { Route, Routes } from "react-router-dom";
import PatientAll from "../Doctore/container/PatientAll";

function Doctorer() {
    return (
        <Layout>
            <Routes>
                <Route path="/alldoctore" element={<DoctoreAll />} />
               <Route path="/allpatient" element={<PatientAll />} />
            </Routes>
        </Layout>
    )
}

export default Doctorer;