import { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

const Services = () => {

const [services , setServices] = useState([])
useEffect(()=>{
    fetch("Services.json")
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
                            </div>
                          </div>
                        ))
                    }
                   
                    {/* --------------------------- */}
                    {/* <div className=' px-3 lg:px-5 py-3 border rounded-lg border-gray-300 shadow-lg'>
                      <div>  <img className='rounded-2xl' src={sone1} alt="" /></div>
                      <div>
                        <h2 className='font-bold text-2xl'>Electrial System</h2>
                        <p className='text-orange-600 text-xl font-semibold'>Price: $ 20.00</p>
                      </div>
                    </div> */}
                    {/* ------------------ */}
                    {/* <div className=' px-3 lg:px-5 py-3 border rounded-lg border-gray-300 shadow-lg'>
                      <div>  <img className='rounded-2xl' src={sone2} alt="" /></div>
                      <div>
                        <h2 className='font-bold text-2xl'>Electrial System</h2>
                        <p className='text-orange-600 text-xl font-semibold'>Price: $ 20.00</p>
                      </div>
                    </div> */}
                    {/* ----------------------- */}
                    {/* <div className='px-3 lg:px-5 py-3 border rounded-lg border-gray-300 shadow-lg'>
                      <div>  <img className='rounded-2xl' src={sone3} alt="" /></div>
                      <div>
                        <h2 className='font-bold text-2xl'>Electrial System</h2>
                        <p className='text-orange-600 text-xl font-semibold'>Price: $ 20.00</p>
                      </div>
                    </div> */}
                    {/* --------------- */}
                    {/* <div className='px-3 lg:px-5 py-3 border rounded-lg border-gray-300 shadow-lg'>
                      <div>  <img className='rounded-2xl' src={sone4} alt="" /></div>
                      <div>
                        <h2 className='font-bold text-2xl'>Electrial System</h2>
                        <p className='text-orange-600 text-xl font-semibold'>Price: $ 20.00</p>
                      </div>
                    </div> */}
                    {/* --------------------- */}
                    {/* <div className='px-3 lg:px-5 py-3 border rounded-lg border-gray-300 shadow-lg'>
                      <div>  <img className='rounded-2xl' src={sone5} alt="" /></div>
                      <div>
                        <h2 className='font-bold text-2xl'>Electrial System</h2>
                        <p className='text-orange-600 text-xl font-semibold'>Price: $ 20.00</p>
                      </div>
                    </div> */}
                </div>
        </div>
    );
};

export default Services;