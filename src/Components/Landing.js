import '../App.css';
import '../index.css';
import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Landing = () => {
    const {isLoggedIn} = useSelector(state => state.auth);
    const {user} = useSelector(state => state.auth);

    // some logics mayb

    return (

        <div className="hero min-h-screen bg-warning">
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-9 text-5xl font-bold">
                        Welcome To Lasoyae
                    </h1>
                    {
                        isLoggedIn !== true ? (
                            <Link to="/login" className="btn glass">
                                <p>Continue with Login</p>
                            </Link>) :
                            (<div>
                                {
                                    user!= null && user.email == 'admin@gmail.com' ? (
                                    <Link to="/dashboard" className="btn glass">
                                            <p>Go to Dashboard</p>
                                    </Link>) : (
                                        <Link to="/foods" className="btn glass">
                                            <p>Let's order!</p>
                                        </Link>
                                    )
                                }

                            </div>)
                    }

                    {/*/!*<button href="/login" className="btn glass">Continue with Login</button>*!/*/}
                </div>
            </div>
        </div>

    );
};

export default Landing;
