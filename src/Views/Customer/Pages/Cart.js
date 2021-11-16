import React from 'react';
import '../../../App.css';
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Cart = () => {
    return (
        <div className="h-screen bg-accent">
            <nav className="w-full mx-auto bg-yellow-400 shadow">
                <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
                    <div className="h-full flex items-center">
                        <div className="mr-10 flex items-center">
                            <a href="/" className="relative no-underline text-base text-white font-bold tracking-normal leading-tight ml-3">LASOYAE</a>
                        </div>
                        <div className="text-center">
                            <span>Pengiriman</span>
                        </div>
                    </div>
                    <div className="relative h-full xl:flex items-center justify-end">
                        <div className="w-full h-full flex items-center">
                            <div className="flex-none">
                                <button ata-tip="Cart" className="btn btn-square btn-ghost tooltip tooltip-bottom">
                                    <a href="/cart">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             className="inline-block w-6 h-6 stroke-current">
                                            <ShoppingCartRoundedIcon/>
                                        </svg>
                                    </a>
                                </button>
                                <button data-tip="Track Order" className="btn btn-square btn-ghost tooltip tooltip-bottom">
                                    <a href="/trackorder">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             className="inline-block w-6 h-6 stroke-current">
                                            <DeliveryDiningRoundedIcon/>
                                        </svg>
                                    </a>
                                </button>
                                <button data-tip="Account" className="btn btn-square btn-ghost tooltip tooltip-bottom">
                                    <a href="profile">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             className="inline-block w-6 h-6 stroke-current">
                                            <AccountCircleRoundedIcon/>
                                        </svg>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="visible xl:hidden flex items-center relative">
                        {/*center navbar*/}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Cart;