import React from 'react';


export default function CartContent() {
    return (
        <div className="container-none h-auto p-5 bg-white">
            <kbd className="kbd bg-error">Cart</kbd>
            <div className="sm:container sm:mx-auto bg-white flex justify-center">
                <div className="card shadow-2xl w-1/2">
                    <div className="card-body text-black">
                        <div className="flex flex-col w-full grid justify-items-stretch ">
                            <div className="grid grid-cols-2 h-auto card bg-white rounded-box place-items-center p-4">
                                <div >
                                    <h1>Burger Soya</h1>
                                    <h1>Rp. 12.000</h1>
                                </div>
                                <div >
                                    <button className="btn btn-error">-</button>
                                    <input className="mx-2 border text-center w-8" type="text" value="1" />
                                    <button className="btn btn-accent">+</button>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="grid grid-cols-2 h-auto card bg-white rounded-box place-items-center p-4">
                                <div >
                                    <h1>Burger Soya</h1>
                                    <h1>Rp. 12.000</h1>
                                </div>
                                <div >
                                    <button className="btn btn-error">-</button>
                                    <input className="mx-2 border text-center w-8" type="text" value="1" />
                                    <button className="btn btn-accent">+</button>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="grid grid-cols-2 h-auto card bg-white rounded-box place-items-center p-4">
                                <div >
                                    <h1>Setarbak</h1>
                                    <h1>Rp. 2.000</h1>
                                </div>
                                <div >
                                    <button className="btn btn-error">-</button>
                                    <input className="mx-2 border text-center w-8" type="text" value="1" />
                                    <button className="btn btn-accent">+</button>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="grid h-auto bg-white text-left none-rounded">
                                <b>Jenis Pengiriman: </b>
                                <div className="p-2 card bordered">
                                    <div className="form-control">
                                        <label className="cursor-pointer label">
                                            <span className="label-text text-black">Self-pickup</span>
                                            <input type="radio" name="opt" className="radio radio-xs radio-primary" value="" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="cursor-pointer label">
                                            <span className="label-text text-black">Antar (+ Ongkos Kirim Rp. 10.000)</span>
                                            <input type="radio" name="opt" checked="checked" className="radio radio-secondary radio-xs" value="" />
                                        </label>
                                    </div>
                                </div>
                                <b>Alamat: </b>
                                <p>Perumahan Puri Sejahtera Blok K-3</p>
                                <b>Total Items:</b>
                                <b>Shipping Cost:</b>
                                <b>TOTAL: </b>
                            </div>
                            <button className="btn btn-warning">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}