import { useLoaderData } from 'react-router-dom';
import image from '../../assets/images/checkout/checkout.png'

const CheackOut = () => {

    const service = useLoaderData()
    // eslint-disable-next-line no-unused-vars
    const { title, _id } = service;

    return (
        <div className=''>
            <h2 className='text-white mt-28 ml-20 font-bold text-4xl absolute'>Check Out</h2>
            <div className="">

                <img className='w-full ' src={image} alt="" />

            </div>

            <h2>CheackOut  services :{title} </h2>

        
                        <form className="card-body  bg-[#F3F3F3] ">

                        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Name</span>
                                </label>
                                <input type="text" placeholder=" Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" placeholder="receving date" className="input input-bordered" name='date'required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input type="text" placeholder="Your Phone" className="input input-bordered" name='phone' required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="text" placeholder="Your Email" className="input input-bordered"name='email' required />
                               
                            </div>
                            <div className="form-control col-span-2">
                            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg " ></textarea>
                            </div>
                        </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-block bg-[#FF3811] text-white">Order Confirm</button>
                            </div>
                        </form>
                    </div>
               
    );
};

export default CheackOut;