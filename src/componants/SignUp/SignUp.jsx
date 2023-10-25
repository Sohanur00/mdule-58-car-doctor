import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider';


const SignUp = () => {
    const { createUser } = useContext(Authcontext);

    const handleRegister = event => {

        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;

        console.log(name, email, password)

        createUser(email,password) 
        .then(result =>{

            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))


    }


    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12 ">

                    <img src={img} alt="" />


                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="email" name="name" className="input input-bordered" required />
                        </div>
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
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>

                    <div className='text-center mb-4'>
                        Have an account? <li className='text-[#FF3811] font-bold btn btn-outline'><Link to='/login'>Sign In</Link> </li>
                    </div>
                </div>
            </div>
        </div>

    )



}







export default SignUp;