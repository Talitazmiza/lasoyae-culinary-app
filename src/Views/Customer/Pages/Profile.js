import React from 'react';
import '../../../App.css';
import Navbar from "../Components/Navbar";
import ProfileContent from "../Components/ProfileContent";


const Profile = () => {
    return (
        <div className="h-screen bg-error">
            <Navbar />
            <ProfileContent />
        </div>
    )
}

export default Profile;