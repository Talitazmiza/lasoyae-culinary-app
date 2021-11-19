import React from 'react';
import '../../../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CartContent from "../Components/CartContent";

export default function Cart() {
    return (
        <div className="h-screen bg-white flex flex-col">
            <Navbar />
            <CartContent />
        </div>
    );
};