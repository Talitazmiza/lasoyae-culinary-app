import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Stocks from "../Components/Stocks";

export default function Dashboard() {
    return (
        <div className="h-screen bg-white">
            <Navbar />
            <Stocks />
            <Footer />
        </div>
    );
};