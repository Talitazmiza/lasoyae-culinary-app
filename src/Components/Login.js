import React from 'react';
import '../App.css';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-warning">
            <div className="flex-col justify-center hero-content lg:flex-row ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body bg-white">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered border-base-100 bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered border-base-100 bg-white" />
                            <label className="label">
                                <a href="/" className="label-text-alt text-black">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <a href="/home" className="btn btn-accent">
                                <p>Login</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} ;

export default Login;