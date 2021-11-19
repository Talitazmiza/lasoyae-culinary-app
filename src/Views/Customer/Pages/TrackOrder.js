import React from 'react';
import '../../../App.css';
import Navbar from "../Components/Navbar";
import TrackOrderContent from "../Components/TrackOrderContent";

const TrackOrder = () => {
    return (
        <div className="h-screen bg-black">
            <Navbar />
            <TrackOrderContent />
        </div>
    )
}

export default TrackOrder;