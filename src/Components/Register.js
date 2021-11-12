import '../App.css';
import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {register} from "../Actions/auth";

const Register = () => {
    const initialState = {
        name: null,
        email: null,
        password: null,
        tanggal_lahir: null,
        berat_badan : null,
        tinggi_badan : null
    };
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const {isLoggedIn} = useSelector(state => state.auth);
    const {message} = useSelector(state => state.message);

    const dispatch = useDispatch();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleRegister = (e) => {
        e.preventDefault();

        setLoading(true);
        dispatch(register(form))
            .then(() => {
                return <Redirect to="/foods" />;
            })
            .catch(() => {
                setLoading(false);
            });

    };
    if (isLoggedIn) {
        return <Redirect to="/foods" />;
    }
    return (
        <div className="hero min-h-screen bg-warning">
            <div className="flex-col justify-center hero-content lg:flex-row ">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl">
                    <div className="card-body bg-white">
                        <form onSubmit={handleRegister}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black">Nama Lengkap</span>
                                        </label>
                                        <input
                                            name="name"
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Nama lengkap"
                                            required
                                            className="input input-bordered border-base-100 bg-white text-black"/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black">Email</span>
                                        </label>
                                        <input
                                            name="email"
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="E-Mail"
                                            required
                                            className="input input-bordered border-base-100 bg-white text-black"/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black">Password</span>
                                        </label>
                                        <input
                                            name="password"
                                            onChange={handleChange}
                                            type="password"
                                            placeholder="Password"
                                            required
                                            className="input input-bordered border-base-100 bg-white text-black"/>
                                    </div>
                                </div>

                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black">Tanggal lahir</span>
                                        </label>
                                        <input
                                            name="tanggal_lahir"
                                            onChange={handleChange}
                                            type="date"
                                            placeholder="Tanggal lahir"
                                            required
                                            className="input input-bordered border-base-100 bg-white text-black"/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black">Berat badan</span>
                                        </label>
                                        <input
                                            name="berat_badan"
                                            onChange={handleChange}
                                            type="number"
                                            placeholder="Berat badan (Kg)"
                                            required
                                            className="input input-bordered border-base-100 bg-white text-black"/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black">Tinggi Badan</span>
                                        </label>
                                        <input
                                            name="tinggi_badan"
                                            onChange={handleChange}
                                            type="number"
                                            required
                                            placeholder="Tinggi badan (cm)"
                                            className="input input-bordered border-base-100 bg-white text-black"/>
                                    </div>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent" disabled={loading}>
                                    {loading && (
                                        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                                        </svg>
                                    )}
                                    <span>Register</span>
                                </button>
                            </div>
                            {message && (
                                <div className="form-control mt-6">
                                    <div className="alert alert-error">
                                        <div className="flex-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 className="w-6 h-6 mx-2 stroke-current">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                                            </svg>
                                            <label>{message}</label>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
