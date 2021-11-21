import React from 'react';
import '../../../App.css';
import {useDispatch} from "react-redux";
import {logout} from "../../../Actions/auth";
import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar";

const Home = () => {

    // const [show, setShow] = useState(false);
    // const [product, setProduct] = useState(false);
    // const [deliverables, setDeliverables] = useState(false);
    // const [profile, setProfile] = useState(false);
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(true);
    // };
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout())
    };

    return (
        <div className="h-screen bg-white">
            <div className="absolute bg-white w-full">
                {/* Navigation starts */}
                {/* Mobile */}
                <Navbar/>
                {/* Navigation ends */}
                <div className="flex flex-row w-full bg-yellow-200">
                    <div className="grid flex-grow h-10 card place-items-center bg-yellow-200">
                        <Link to="/foods" className="relative text-base text-black font-mono font-bold ml-3 hover:text-white">Foods</Link>
                    </div>
                    <div className="divider divider-vertical"></div>
                    <div className="grid flex-grow h-10 card place-items-center bg-yellow-200">
                        <span className="underline relative text-base text-black font-mono font-bold ml-3">Drinks</span>
                    </div>
                </div>
                <div className="container bg-white py-30 flex flex-row items-center justify-center mx-auto px-6 grid gap-4 lg:grid-cols-6 xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <a href="#my-modal" className="btn btn-sm btn-accent">Buy</a>
                                <div id="my-modal" className="modal">
                                    <div className="modal-box">
                                        <div className="modal-action">
                                            <p>Kalsium: 100</p>
                                            <p>Minyak: 100</p>
                                            <p>Zinc: 100</p>
                                            <p>Vitamin: 100</p>
                                            <button className="btn btn-primary">Buy</button>
                                            <button className="btn btn-error">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title ">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title ">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title ">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg">
                        <figure className="px-5 pt-5">
                            <img src="https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvSVFSSkNKQkwuX1NMMTUwMF8uanBn.jpg" className="rounded-2xl" alt=""/>
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">Setarbak</h2>
                            <p>Rp. 12.000</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-sm btn-accent">Buy</button>
                                <button className="btn btn-sm btn-primary">More Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page title starts */}
            {/* Page title ends */}
        </div>
    );
};

export default Home;
