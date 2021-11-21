import React, {useState} from 'react';
import '../../../App.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../../../Actions/auth";
import { useDispatch } from "react-redux";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import {Link} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";


export default function Navbar() {

    const dispatch = useDispatch();
    const [isExpanded, setShowExpanded] = useState(false);

    const logOut = () => {
        dispatch(logout())
    };

    const wannaExpand = () => {
        setShowExpanded(!isExpanded);
    };
    return (
        <div>
            <nav className="navbar bg-yellow-400 text-neutral-content">
                    <div className="navbar-start">
                        <div className="h-full flex items-center justify-between">
                            <div className="flex lg:mr-10 mr-5 items-center">
                                <Link to="/" className="relative no-underline text-base text-white font-bold tracking-normal leading-tight ml-3">LASOYAE</Link>
                            </div>
                            <div className="relative w-full flex justify-center">
                                <div className="text-gray-500 absolute ml-3 inset-0 m-auto w-4 h-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                </div>
                                <input className="border border-gray-100 focus:outline-none focus:border-indigo-700 w-auto rounded text-sm text-gray-500 bg-gray-100 pl-8 py-2" type="text" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="relative h-full lg:flex xl:flex md:flex sm:flex flex-none hidden items-center justify-end">
                            <div className="w-full h-full flex items-center">
                                <div className="flex-none">
                                    <button data-tip="Cart" className="btn btn-square btn-ghost tooltip tooltip-left">
                                        <Link to="/cart">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 className="inline-block w-6 h-6 stroke-current">
                                                <ShoppingCartRoundedIcon/>
                                            </svg>
                                        </Link>
                                    </button>
                                    <button data-tip="Track Order" className="btn btn-square btn-ghost tooltip tooltip-left">
                                        <Link to="/trackorder">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 className="inline-block w-6 h-6 stroke-current">
                                                <DeliveryDiningRoundedIcon/>
                                            </svg>
                                        </Link>
                                    </button>
                                    <button data-tip="Account" className="btn btn-square btn-ghost tooltip tooltip-left">
                                        <Link to="/profile">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 className="inline-block w-6 h-6 stroke-current">
                                                <AccountCircleRoundedIcon/>
                                            </svg>
                                        </Link>
                                    </button>
                                    <button data-tip="Logout" onClick={logOut} className="btn btn-square btn-ghost tooltip tooltip-left">
                                        <a href="/login">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 className="inline-block w-6 h-6 stroke-current">
                                                <LogoutIcon/>
                                            </svg>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden xl:hidden md:hidden sm:hidden">
                            <button onClick={wannaExpand}>
                                <MenuIcon />
                            </button>
                        </div>
                    </div>
           </nav>
            <div className={isExpanded === true ? 'block bg-yellow-400 lg:hidden xl:hidden md:hidden sm:hidden w-full flex-grow md:flex md:justify-end md:w-auto' : 'hidden'}>
                    <div className="flex-none">
                        <button data-tip="Cart" className="btn btn-square btn-ghost tooltip tooltip-left">
                            <Link to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-6 h-6 stroke-current">
                                    <ShoppingCartRoundedIcon/>
                                </svg>
                            </Link>
                        </button>
                        <button data-tip="Track Order" className="btn btn-square btn-ghost tooltip tooltip-left">
                            <Link to="/trackorder">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-6 h-6 stroke-current">
                                    <DeliveryDiningRoundedIcon/>
                                </svg>
                            </Link>
                        </button>
                        <button data-tip="Account" className="btn btn-square btn-ghost tooltip tooltip-left">
                            <Link to="/profile">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-6 h-6 stroke-current">
                                    <AccountCircleRoundedIcon/>
                                </svg>
                            </Link>
                        </button>
                        <button data-tip="Logout" onClick={logOut} className="btn btn-square btn-ghost tooltip tooltip-left">
                            <a href="/login">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-6 h-6 stroke-current">
                                    <LogoutIcon/>
                                </svg>
                            </a>
                        </button>
                    </div>
            </div>
        </div>
    )

};

