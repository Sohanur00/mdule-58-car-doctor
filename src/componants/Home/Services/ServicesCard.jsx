/* eslint-disable react/prop-types */
import { FaArrowRight } from 'react-icons/fa';

const ServicesCard = ({service}) => {

const {img , title, price} = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl font-bold">{title}</h2>
          <p className="text-[#FF3811] font-bold text-2xl">Price:  $ {price}</p>
          <div className="card-actions">
           <p className='btn'><FaArrowRight></FaArrowRight></p>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;