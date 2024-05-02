import React from 'react';
import team from '../../assets/images/team/1.jpg'
import team1 from '../../assets/images/team/2.jpg'
import team2 from '../../assets/images/team/3.jpg'
import social from '../../assets/icons/Group 4889.svg'
import social2 from '../../assets/icons/Group 4891.svg'
import social3 from '../../assets/icons/Group 4892.svg'
import social4 from '../../assets/icons/Group 4893.svg'

const Team = () => {
    return (
        <div>
              <div>
              <div className="flex flex-col items-center justify-center">
        <h1 className="mb-3 text-orange-600 underline font-bold">
          Our Team
        </h1>
        <h1 className="text-3xl font-bold mb-5">Meet Our Members</h1>
        <p className="text-gray-500">
          The majority have suffered alteration in some form, by injected br
          humour, .{" "}
        </p>
        <p className="text-gray-500">
          {" "}
          or br randomised words which don't look even slightly believable
        </p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 mt-10 mb-5 rounded-xl gap-5">
                   <div className=' px-3 lg:px-5 py-3 space-y-7 border rounded-lg border-gray-300 shadow-lg'>
                            <div>  <img className='rounded-2xl h-[320px] border border-gray-300 ' src={team} alt="" /></div>
                            <div>
                              <h2 className='font-bold text-2xl'></h2>
                           <div className='flex flex-col justify-center'>
                       
                             
                         <div className="text-center">
                            <h2 className="text-xl font-bold">Car Engine Machnique </h2> 
                               <div className='flex items-center justify-center gap-3'>
                                  <img src={social} alt=""></img>
                                  <img src={social2} alt=""></img>
                                  <img src={social3} alt=""></img>
                                  <img src={social4} alt=""></img>
                               </div>
                         </div>
                           
                           
                           </div>
                            </div>
                          </div>
                          {/* -------------------------------------------------- */}
                          <div className=' px-3 lg:px-5 py-3 space-y-7 border rounded-lg border-gray-300 shadow-lg'>
                            <div>  <img className='rounded-2xl h-[320px] border border-gray-300 ' src={team1} alt="" /></div>
                            <div>
                              <h2 className='font-bold text-2xl'></h2>
                           <div className='flex flex-col justify-center'>
                       
                             
                         <div className="text-center">
                            <h2 className="text-xl font-bold">Car Engine Machnique </h2> 
                               <div className='flex items-center justify-center gap-3'>
                                  <img src={social} alt=""></img>
                                  <img src={social2} alt=""></img>
                                  <img src={social3} alt=""></img>
                                  <img src={social4} alt=""></img>
                               </div>
                         </div>
                           
                           
                           </div>
                            </div>
                          </div>
                          <div className=' px-3 lg:px-5 py-3 space-y-7 border rounded-lg border-gray-300 shadow-lg'>
                            <div>  <img className='rounded-2xl h-[320px] border border-gray-300 ' src={team2} alt="" /></div>
                            <div>
                              <h2 className='font-bold text-2xl'></h2>
                           <div className='flex flex-col justify-center'>
                       
                             
                         <div className="text-center">
                            <h2 className="text-xl font-bold">Car Engine Machnique </h2> 
                               <div className='flex items-center justify-center gap-3'>
                                  <img src={social} alt=""></img>
                                  <img src={social2} alt=""></img>
                                  <img src={social3} alt=""></img>
                                  <img src={social4} alt=""></img>
                               </div>
                         </div>
                           
                           
                           </div>
                            </div>
                          </div>
                          {/* ---------------------------------------------------------- */}
                   </div>
              </div>
        </div>
    );
};

export default Team;