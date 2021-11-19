import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import '../../../App.css';
import LogoutIcon from "@mui/icons-material/Logout";
import {useDispatch} from "react-redux";
import {logout} from "../../../Actions/auth";
import { Link } from 'react-router-dom';

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
                <nav className="w-full mx-auto bg-yellow-400 shadow">
                    <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
                        <div className="h-full flex items-center">
                            <div className="mr-10 flex items-center">
                                <a href="/" className="relative no-underline text-base text-white font-bold tracking-normal leading-tight ml-3">LASOYAE</a>
                            </div>
                            <div className="relative w-full flex justify-center">
                                <div className="text-gray-500 absolute ml-3 inset-0 m-auto w-4 h-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                </div>
                                <input className="border border-gray-100 focus:outline-none focus:border-indigo-700 w-56 rounded text-sm text-gray-500 bg-gray-100 pl-8 py-2" type="text" placeholder="Search" />
                            </div>
                        </div>
                        <div className="relative h-full xl:flex items-center justify-end">
                            <div className="w-full h-full flex items-center">
                                <div className="flex-none">
                                    <button data-tip="Cart" className="btn btn-square btn-ghost tooltip tooltip-left">
                                        <a href="/cart">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 className="inline-block w-6 h-6 stroke-current">
                                                <ShoppingCartRoundedIcon/>
                                            </svg>
                                        </a>
                                    </button>
                                    <button data-tip="Track Order" className="btn btn-square btn-ghost tooltip tooltip-left">
                                        <a href="/trackorder">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 className="inline-block w-6 h-6 stroke-current">
                                                <DeliveryDiningRoundedIcon/>
                                            </svg>
                                        </a>
                                    </button>
                                    <button data-tip="Account" className="btn btn-square btn-ghost tooltip tooltip-left">
                                        <a href="/profile">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 className="inline-block w-6 h-6 stroke-current">
                                                <AccountCircleRoundedIcon/>
                                            </svg>
                                        </a>
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
                        <div className="visible xl:hidden flex items-center relative">
                            {/*center navbar*/}
                        </div>
                    </div>
                </nav>
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
                <div className="container bg-white py-30 flex flex-row items-center justify-center mx-auto px-6 grid gap-4 grid-cols-6">
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