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
        <div>
            <div className="md:container md:mx-auto p-10">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <strong className="text-black">Manage Stock</strong>
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