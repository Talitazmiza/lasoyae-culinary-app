import React from 'react';
import Navbar from "../Components/Navbar";
import Order from "../Components/Order";
import Footer from "../Components/Footer";

export default function OrderList() {
    return (
      <div className="h-screen bg-white">
          <Navbar />
          <Order />
          <Footer />
      </div>
    );
};