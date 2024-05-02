import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen  p-5">
        <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2 relative'>
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={parts} className="w-1/2 h-3/4 border-8 border-gray-300  absolute right-5 top-1/2 bottom-3 rounded-lg shadow-2xl" />
            </div>
          <div className='lg:w-1/2'>
            <h1 className="text-4xl text-orange-600 font-bold mb-5">About Us</h1>
            <div className='mt-7 mb-5'>
            <h1 className="text-5xl text- font-bold">We are qualified</h1>
            <h1 className="text-5xl text- font-bold">& of experience</h1>
            <h1 className="text-5xl text- font-bold">in this field</h1>
            </div>
           <div className='mt-5 mb-5'>
           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           </div>
            <button className="bg-orange-600 px-5 py-3 rounded-lg font-semibold">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;