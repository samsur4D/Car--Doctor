import { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Services = () => {

const [services , setServices] = useState([])


useEffect(()=>{
    fetch("http://localhost:5000/services")
    .then(res=>res.json())
    .then(data=>{
        setServices(data);
        console.log(data);
    })
},[])

    return (
        <div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='mb-3 text-orange-600 underline font-bold'>Service</h1>
                    <h1 className='text-3xl font-bold mb-5'>Our Service Area</h1>
                    <p className='text-gray-500'>The majority have suffered alteration in some form, by injected br  humour, . </p>
                    <p className='text-gray-500'> or br randomised words which don't look even slightly believable</p>
                </div>
                {/* -------------------------------- */}
                <div className='mt-16 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 gap-5 px-10 '>
                    {
                        services.map(service =>(
                            <div key={service.id} className=' px-3 lg:px-5 py-3 space-y-7 border rounded-lg border-gray-300 shadow-lg'>
                            <div>  <img className='rounded-2xl h-[320px]' src={service.img} alt="" /></div>
                            <div>
                              <h2 className='font-bold text-2xl'>{service.title}</h2>
                           <div className='flex justify-between'>
                           <p className='text-orange-600 text-xl font-semibold'>Price : ${service.price}</p>
                           <button><FaArrowRight className='text-lg text-orange-600'/></button>
                           </div>
                           <Link to={`/checkout/${service._id}`}><button className='bg-orange-600 px-4 p-2 rounded-xl font-bold'>BOOK NOW</button></Link>
                            </div>
                          </div>
                        ))
                    }
                   
                   
                </div>
                <div className='text-center flex items-center justify-center mt-3 mb-5'><button className='border border-orange-600 px-5 py-3 rounded-xl flex items-center justify-center'>More Services</button></div>
        </div>
    );
};

export default Services;