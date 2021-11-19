import React from 'react';
import {Link} from "react-router-dom";

export default function EditProf() {
    return (
        <div className="container-2xl h-screen p-5 bg-white">
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
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-black">Nama</span>
                                </label>
                                <input type="text" placeholder="nama" className="input input-bordered border-base-100 bg-white text-black" />
                                <label className="label">
                                    <span className="label-text text-black">Tinggi Badan</span>
                                </label>
                                <input type="text" placeholder="tinggi badan" className="input input-bordered border-base-100 bg-white text-black" />
                                <label className="label">
                                    <span className="label-text text-black">Berat Badan</span>
                                </label>
                                <input type="text" placeholder="berat badan" className="input input-bordered border-base-100 bg-white text-black" />
                            </div>
                        </div>
                        <div className="card-actions">
                            <Link to="/profile" className="btn btn-warning">Save</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}