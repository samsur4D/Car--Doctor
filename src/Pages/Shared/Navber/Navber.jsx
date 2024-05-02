import React from 'react';
import logo from '../../../assets/icons/logo.svg'
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";



const Navber = () => {

     const navItems = <>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link >Services</Link></li>
                        <li><Link >Blog</Link></li>
                        <li><Link >Contact</Link></li>

                        </>
               return(   
    
        <div>
              <div className="navbar shadow-2xl h-36 px-5 rounded-lg  bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl"><img src="/src/assets/icons/" alt="" /><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  <IoBagCheckOutline  className='text-3xl mr-5'/>
  <BsSearch           className='text-3xl mr-5'/>
  <div className='flex gap-3'>
  <a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span className="relative text-white">Appoinmant</span>
</span>
</a>
  <Link to="/login" href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span className="relative text-white">Login</span>
</span>
</Link>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navber;