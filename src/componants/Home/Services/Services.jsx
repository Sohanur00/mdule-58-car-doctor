import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {

    const [services, setServices] = useState([])


    useEffect(() => {

        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <div className="text-center">
                <h3 className="text-[#FF3811] font-bold text-2xl mb-5 mt-10">Service</h3>
                <h2 className="text-7xl font-bold mb-5">Our Service Area</h2>
                <p className="text-[#737373] font-bold text-xs">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)

                }
            </div>

        </div>
    );
};

export default Services;