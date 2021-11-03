import React from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import '../App.css';

const Home = () => {

    // some...

    return (
        <div className="2xl:bg-warning">
            <div className="navbar mb-2 shadow-lg bg-warning text-neutral-content ">
                <div className="flex-1 px-2 mx-2">
                    <span className="text-lg font-bold">
                        LASOYAE
                    </span>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-6 h-6 stroke-current">
                            <ShoppingCartIcon/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Home;