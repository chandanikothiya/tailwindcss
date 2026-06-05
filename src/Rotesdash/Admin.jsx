import React from "react";
import ALayout from "../Admin/components/ALayout";
import DoctoreAll from "../Doctore/container/DoctoreAll";
import { Route, Routes } from "react-router-dom";
import Adddoctore from "../Admin/container/Adddoctore";


function Admin() {
    return (
        <ALayout>
            <Routes>
                <Route path="/aalldoctore" element={<DoctoreAll />} />
                 <Route path="/adddoctore" element={<Adddoctore />} />
            </Routes>
        </ALayout>
    )
}

export default Admin;