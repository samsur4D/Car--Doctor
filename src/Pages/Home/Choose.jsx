import React from 'react';
import team from  '../../assets/icons/group.svg';
import clock from '../../assets/icons/Group 38729.svg';
import man from '../../assets/icons/person.svg';
import www from '../../assets/icons/Wrench.svg';
import check from '../../assets/icons/check.svg';
import del from '../../assets/icons/deliveryt.svg'




const Choose = () => {
    return (
        <div className='mt-10'>
                    <div>
                    <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="mb-3 text-orange-600 underline font-bold">
         Core Feauters
        </h1>
        <h1 className="text-5xl font-bold mb-5">Why Choose Us !</h1>
        <p className="text-gray-500">
          The majority have suffered alteration in some form, by injected br
          humour, .{" "}
        </p>
        <p className="text-gray-500">
          {" "}
          or br randomised words which don't look even slightly believable
        </p>
                   </div>



<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10 mb-10 px-10'>
   <div className=' border border-gray-400 rounded-lg'>
       <div className='flex flex-col item-center justify-center p-10'>
        <img  className='h-[150px]' src={team} alt="" />
        <h1 className='text-center mt-2 font-bold'> Expert Team </h1>
        
        </div>

   </div>
   {/* --------------------------------- */}
   <div className=' border border-gray-400 rounded-lg bg-orange-600'>
       <div className='flex flex-col item-center justify-center p-10 '>
        <img className='h-[150px]' src={clock} alt="" />
        <h1 className='text-center mt-2 font-bold'> Time Delivery </h1>
        
        </div>

   </div>
   <div className=' border border-gray-400 rounded-lg'>
       <div className='flex flex-col item-center justify-center p-10'>
        <img  className='h-[150px]' src={man} alt="" />
        <h1 className='text-center mt-2 font-bold'> 24/7 Support</h1>
        
        </div>

   </div>
   <div className=' border border-gray-400 rounded-lg'>
       <div className='flex flex-col item-center justify-center p-10'>
        <img  className='h-[150px]' src={www} alt="" />
        <h1 className='text-center mt-2 font-bold'>Best Equipment </h1>
        
        </div>

   </div>
   <div className=' border border-gray-400 rounded-lg'>
       <div className='flex flex-col item-center justify-center p-10'>
        <img  className='h-[150px]' src={check} alt="" />
        <h1 className='text-center mt-2 font-bold'>100% Guranty </h1>
        
        </div>

   </div>
   <div className=' border border-gray-400 rounded-lg'>
       <div className='flex flex-col item-center justify-center p-10'>
        <img  className='h-[150px]' src={del} alt="" />
        <h1 className='text-center mt-2 font-bold'>Perfect Delivery</h1>
        
        </div>

   </div>
   {/* ----------------------------- */}
</div>










                    </div>
        </div>
    );
};

export default Choose;