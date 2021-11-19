import React from 'react';

export default function TrackOrderContent() {
    return (
        <div className="container-2xl h-full p-5 bg-white">
            <div className="md:container md:mx-auto bg-white flex justify-center p-5">
                <div className="card lg:card-side bg-white shadow-2xl">
                    <div className="card-body">
                        <b className="card-title text-black">Lacak Pesanan</b>
                        <p className="text-white">Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus
                            veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                        <div className="flex flex-row w-full">
                            <div className="grid flex-grow h-auto card bg-white rounded-box place-items-left">
                                <div className="grid flex-grow h-auto card bg-white place-items-left text-left text-black">
                                    <b>No Pesanan</b>
                                    <h2>123456</h2>
                                    <p>Di Pesan Pada: </p>
                                    <button className="btn btn-outline text-black">Lihat Pesanan</button>
                                    <a href="#my-modal" className="btn btn-sm btn-error">Batalkan Pesanan</a>
                                    <div id="my-modal" className="modal bg-white">
                                        <div className="modal-box bg-white">
                                            <div className="modal-action">
                                                <h2>Batalkan?</h2>
                                                <a href="#" className="btn btn-error">Yes</a>
                                                <a href="#" className="btn btn-primary">No</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider divider-vertical"></div>
                            <div className="grid flex-grow h-auto card bg-white rounded-box place-items-left">
                                <div className="grid flex-grow h-auto card bg-white place-items-left text-left text-black">
                                    <b>Burger Soya (3)</b>
                                    <h2>tidak pedas</h2>
                                    <h2>Rp. 24.000</h2>
                                    <br/>
                                    <b>Veggie Bites (1)</b>
                                    <h2>-</h2>
                                    <h2>Rp. 12.000</h2>
                                </div>
                            </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="flex flex-row w-full">
                            <div className="grid flex-grow h-auto card bg-white rounded-box place-items-left">
                                <div className="grid flex-grow h-auto card bg-white place-items-left text-left text-black">
                                    <b>No Pesanan</b>
                                    <h2>123456</h2>
                                    <p>Di Pesan Pada: </p>
                                    <button className="btn btn-outline text-black">Lihat Pesanan</button>
                                    <a href="#my-modal" className="btn btn-sm btn-error">Batalkan Pesanan</a>
                                    <div id="my-modal" className="modal bg-white">
                                        <div className="modal-box bg-white">
                                            <div className="modal-action">
                                                <h2>Batalkan?</h2>
                                                <a href="#" className="btn btn-error">Yes</a>
                                                <a href="#" className="btn btn-primary">No</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider divider-vertical"></div>
                            <div className="grid flex-grow h-auto card bg-white rounded-box place-items-left">
                                <div className="grid flex-grow h-auto card bg-white place-items-left text-left text-black">
                                    <b>Burger Soya (3)</b>
                                    <h2>tidak pedas</h2>
                                    <h2>Rp. 24.000</h2>
                                    <br/>
                                    <b>Veggie Bites (1)</b>
                                    <h2>-</h2>
                                    <h2>Rp. 12.000</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};