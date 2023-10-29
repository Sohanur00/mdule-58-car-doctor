import { useLoaderData } from 'react-router-dom';
import image from '../../assets/images/checkout/checkout.png'
import { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider';


const CheackOut = () => {

    const service = useLoaderData()

    const { title, _id, price, img } = service;

    const { user } = useContext(Authcontext)

    const handleService = event => {
        event.preventDefault();

        const from = event.target;
        const name = from.name.value;
        const date = from.date.value;
        const phone = from.phone.value;
        const email = user?.email;
        const bio = from.bio.value;


        const bookings = {

            customer: name,
            email,
            date,
            service: _id,
            bio,
            phone,
            price,
            img,
            title



        }
        console.log(bookings)
        fetch('http://localhost:5000/checkout', {

            method: "POST",

            headers: {
                "content-type": 'application/json'

            },
            body: JSON.stringify(bookings)



        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }





    return (
        <div className=''>
            <h2 className='text-white mt-28 ml-20 font-bold text-4xl absolute'>Check Out</h2>
            <div className="">

                <img className='w-full ' src={image} alt="" />

            </div>

            <h2>CheackOut  services :{title} </h2>


            <form onSubmit={handleService} className="card-body  bg-[#F3F3F3] ">

                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <input type="text"
                            defaultValue={user?.displayname}
                            placeholder=" Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date"
                            defaultValue={user?.date}
                            placeholder="receving date" className="input input-bordered" name='date' required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="text"
                            defaultValue={user?.phone}
                            placeholder="Your Phone" className="input input-bordered" name='phone' required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" name='email' required />

                    </div>
                    <div className="form-control col-span-2">
                        <textarea placeholder="Bio" name='bio' className="textarea textarea-bordered textarea-lg " ></textarea>
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