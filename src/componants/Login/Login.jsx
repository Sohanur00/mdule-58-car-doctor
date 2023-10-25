import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(Authcontext)

    const handleLogin = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log( email, password)
        signIn(email, password)
            .then(result => {

                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })


    }


    return (
        <div>



            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 mr-12 ">

                        <img src={img} alt="" />


                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Confirm Password</span>
                                </label>
                                <input type="password" placeholder="password" name="confirmPassword" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className='text-center mb-4'>
                            New car Doctors?<li className='text-[#FF3811] font-bold btn btn-outline'><Link to='/signUp'>Sign Up</Link> </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;