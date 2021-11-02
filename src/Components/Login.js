import '../App.css';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="flex-col justify-center hero-content lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="button" value="Login" className="btn btn-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} ;

export default Login;