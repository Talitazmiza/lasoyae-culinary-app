import '../App.css';
import '../index.css';
import React from 'react';

const Landing = () => {

    // some logics mayb

    return (

        <div className="hero min-h-screen bg-warning">
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-9 text-5xl font-bold">
                        Welcome To Lasoyae
                    </h1>
                    <a href="/login" className="btn glass">
                        <p>Continue with Login</p>
                    </a>
                    {/*/!*<button href="/login" className="btn glass">Continue with Login</button>*!/*/}
                </div>
            </div>
        </div>

    );
};

export default Landing;