import '../App.css';
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from 'react-router-dom';
import {login} from "../Actions/auth";

const Login = () => {
    const initialState = {
        email: null,
        password: null,

    };
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const {isLoggedIn} = useSelector(state => state.auth);
    const {message} = useSelector(state => state.message);

    const dispatch = useDispatch();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        dispatch(login(form))
            .then(() => {
                if(form.email === 'admin@gmail.com') return <Redirect to="/dashboard" />;
                else return <Redirect to="/foods" />;
            })
            .catch(() => {
                setLoading(false);
            });

    };
    if (isLoggedIn) {
        if(form.email === 'admin@gmail.com') return <Redirect to="/dashboard" />;
        else return <Redirect to="/foods" />;
    }
    return (
        <div className="hero min-h-screen bg-warning">
            <div className="flex-col justify-center hero-content lg:flex-row ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body bg-white">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    required
                                    className="input input-bordered border-base-100 bg-white text-black"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="password"
                                    className="input input-bordered border-base-100 bg-white text-black"/>
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover text-black">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p className="label-text-alt text-black">Don't have an account? <a href="/register" className="text-black">Regist here!</a></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent" disabled={loading}>
                                    {loading && (
                                        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                                        </svg>
                                    )}
                                    <span>Login</span>
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
                        {/*<a href="/register" className="link link-hover text-black">Regist</a>*/}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
