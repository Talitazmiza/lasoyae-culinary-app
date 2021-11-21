import React from 'react';
import Navbar from "../Components/Navbar";
import Stocks from "../Components/Stocks";
import Footer from "../Components/Footer";

export default function Dashboard() {
    return (
        <div className="flex flex-col h-screen bg-white">
            <Navbar />
            <Stocks />
            <Footer />
        </div>
    );
};
