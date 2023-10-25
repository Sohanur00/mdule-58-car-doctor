import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className='lg:w-1/2 relative'> 
                    <img src={person} className="  w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className=" absolute right-5 -mt-36 w-1/2 rounded-lg shadow-2xl border-8 border-white  " />

                </div>


                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h2 className='text-[#FF3811] font-bold text-2xl mb-3'>About Us </h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn btn-primary mt-4">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;