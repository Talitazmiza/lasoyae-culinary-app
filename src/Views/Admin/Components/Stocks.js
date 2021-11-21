import React, {useEffect} from 'react';
import '../../../App.css';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../Actions/products";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import {Redirect} from "react-router-dom";

export default function Stocks() {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const headers = ['No','Name', 'Stock', 'Price', 'Action']

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    return (
            <div className="container bg-white flex-grow p-10">
                <div className="shadow overflow-x-auto border-b border-gray-200 py-5 px-10 sm:rounded-lg">
                    <div className="flex justify-start items-center py-3">
                        <div className="flex-none lg:mr-0 mr-5">
                            <button className="btn btn-primary">Add</button>
                        </div>
                        <div className="flex-grow">
                            <h1 className="font-extrabold text-black text-xl lg:text-center xl:text-center md:text-center text-left">Manage Stock</h1>
                        </div>
                    </div>
                    {
                        products.length > 0 ? (
                        <table className="min-w-full bg-yellow-100 divide-y-2 divide-base-300 rounded-lg overflow-hidden text-base-300">
                        <thead>
                        <tr>
                    {headers.map(column => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                        scope="col"
                        className="px-6 py-3 font-medium uppercase tracking-wider">
                    {column}
                        </th>
                        ))}
                        </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-base-300">
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
                        </table>) : <div className="flex justify-center"><div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"/></div>
                    }
                </div>
            </div>
    );
};
