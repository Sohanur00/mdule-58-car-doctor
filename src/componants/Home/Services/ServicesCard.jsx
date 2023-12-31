/* eslint-disable react/prop-types */
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {

const {_id, img , title, price} = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl font-bold">{title}</h2>
          <p className="text-[#FF3811] font-bold text-2xl">Price:  $ {price}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
            <button className='btn'><FaArrowRight></FaArrowRight></button>
            </Link>
           
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;