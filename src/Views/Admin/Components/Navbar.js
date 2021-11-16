import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { logout } from "../../../Actions/auth";
import { useDispatch } from "react-redux";

export default function Navbar() {

    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout())
    };

    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
            <div className="px-2 mx-2 navbar-start">
                <div className="dropdown dropdown-right dropdown-hover">
                    <div tabIndex="0" className="btn btn-ghost rounded-btn">
                        <MenuIcon />
                    </div>
                    <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a href="/orderlist">Go to Order List</a>
                        </li>
                        <li>
                            <a href="/dashboard">Go to Manage Stock</a>
                        </li>
                    </ul>
                </div>
                <span className="text-lg font-bold">
                    Layosae Admin
                </span>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <a href="/login" onClick={logOut} className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-6 h-6 stroke-current">
                            <LogoutIcon/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}