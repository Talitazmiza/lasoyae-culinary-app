import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';

export default function ProfileContent() {
    return(
        <div className="container-2xl h-full p-5 bg-white">
            <div className="md:container md:mx-auto bg-white flex justify-center p-5">
                <div className="card shadow-2xl">
                    <div className="card-body">
                        <b className="card-title text-black">Profile</b>
                        <div className="avatar flex justify-center">
                            <div className="mb-8 rounded-full w-24 h-24">
                                <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
                            </div>
                        </div>
                        <div className="grid grid-flow-row auto-rows-max text-black text-left">
                            <p><b>Nama:</b> Talita iza Nurazmi</p>
                            <p><b>Tanggal Lahir:</b> 2000-07-17</p>
                            <p><b>Berat Badan:</b> 50</p>
                            <p><b>Tinggi Badan:</b> 165</p>
                        </div>
                        <div className="card-actions">
                            <Link to="/profile/edit" className="btn btn-primary">Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}