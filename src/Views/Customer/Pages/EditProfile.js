import React from 'react';
import '../../../App.css';
import Navbar from "../Components/Navbar";
import EditProf from "../Components/EditProf";

export default function EditProfile() {
    return (
        <div className="h-sceen bg-white">
            <Navbar />
            <EditProf />
        </div>
    )
}