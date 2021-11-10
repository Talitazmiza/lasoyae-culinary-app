import React, {useEffect} from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import '../../../App.css';
import {connect, useDispatch, useSelector} from "react-redux";
import { getAllProducts } from "../../../Actions/products";
import { logout } from "../../../Actions/auth";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout'
import {Redirect} from "react-router-dom";
const Home = () => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const headers = ['No','Name', 'Stock', 'Price', 'Action']
    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const logOut = () => {
        dispatch(logout())
    };
    return (
        <div>
            <div className="2xl:bg-warning">
                <div className="navbar mb-2 shadow-lg bg-warning text-neutral-content ">
                    <div className="flex-1 px-2 mx-2">
                    <span className="text-lg font-bold">
                        LASOYAE
                    </span>
                    </div>
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-6 h-6 stroke-current">
                                <ShoppingCartIcon/>
                            </svg>
                        </button>
                        <a href="/login" onClick={logOut} className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-6 h-6 stroke-current">
                                <LogoutIcon/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-5">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {headers.map(column => (
                                    // Add the sorting props to control sorting. For this example
                                    // we can add them into the header props
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        {column}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                                    {products && products.map((cell, index) => {
                                        return (
                                            <tr>
                                                <td
                                                    className="px-6 py-4 whitespace-nowrap">
                                                    {index+1}
                                                </td>
                                                <td
                                                    className="px-6 py-4 whitespace-nowrap">
                                                    {cell.nama_produk}
                                                </td>
                                                <td
                                                    className="px-6 py-4 whitespace-nowrap">
                                                    {cell.stock}
                                                </td>
                                                <td
                                                    className="px-6 py-4 whitespace-nowrap">
                                                    {cell.harga}
                                                </td>
                                                <td
                                                    className="px-6 py-4 whitespace-nowrap">
                                                    <EditIcon/>
                                                    <DeleteIcon/>
                                                </td>
                                            </tr>

                                        )
                                    })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    );
};

export default Home;
