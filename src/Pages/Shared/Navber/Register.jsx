import React, { useContext, useState } from 'react';
import pic from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Components/AuthProvider';
import Swal from 'sweetalert2'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Register = () => {

const {registerUser , setUser } = useContext(AuthContext)
const [error , setError] = useState("")


const handelRegister = (e) =>{
   e.preventDefault()
   const email =  e.target.email.value ;
   const password =  e.target.password.value ;
   const confirmPassword =  e.target.confirmPassword.value ;

   if(!/@gmail\.com$/.test(email)){
    setError("@gmail.com - hobe")
    return
    }
// ----------------------------------------------------------------
   if(password.length < 6){
    setError("password must be six charecter")
    return
  }
// ----------------------------------------------------------------
  if(password !== confirmPassword){
    setError("Did Not Match Password with Confirm Password")
    return
  }

  if(!/[a-z]/.test(password)){
    setError("Use Any Lowercase value")
    return
  }
  // ----------------------------------------------------------------
  if(!/[A-Z]/.test(password)){
    setError("Use Any Uppercase VAlue")
    return
  }
 // ----------------------------------------------------------------
  if(!/[@#%&*$]/.test(password)){
    setError("add any of them -!,@,#,$,%,*,& ")
    return
  }

  setError("")
 
   registerUser(email,password)
   .then(result =>{
    setUser(result.user)
    Swal.fire({
        icon: "success",
        title: "Sign Up Complete",
        showConfirmButton: false,
        timer: 1500
      });

      // axios.post("http://localhost:5000/jwt", result.user , {withCredentials: true} )
      // .then((res) => {
      //   console.log(res.data);
      //   if(res.data.success){
      //   Navigate(location.state ? location.state : "/");
      //   }
      // })
  
        })
        .catch((error) => setError(error.message.split("/")[1]));

   
   
}






    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-5 mb-5 items-center justify-center '>
                        <div className='ml-60'><img src={pic} alt="" /></div>
                        <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center rounded-lg  border border-black">
	<h1 className="text-3xl font-semibold">Sign Up to your account</h1>
	<a className="text-sm dark:text-gray-600" href="/">Or start your free trial</a>
	<form onSubmit={handelRegister} noValidate="" className="space-y-4">
		<div className="flex flex-col">
			<label htmlFor="email" className="sr-only">Email address</label>

			<input id="email" type="email" name="email" placeholder="Email address" className="rounded-t-md h-16 bg-gray-100   " />
			<label htmlFor="password" className="sr-only">Password</label>

			<input  type="password" name="password" placeholder="Password" className="-mt-1 rounded-b-md h-16 bg-gray-100  focus:ring-2" />
			<label htmlFor="password" className="sr-only">Password</label>

			<input type="password" name="confirmPassword" placeholder="Confirm Password" className="-mt-1 rounded-b-md h-16 bg-gray-100  focus:ring-2" />
		</div>
        {
             error && <small className='text-red-500'>{error}</small>
        }
		<div className="flex justify-between">
			<div className="flex items-center">
				<input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm    " />
				<label htmlFor="remember" className="text-sm dark:text-gray-600">Remember me</label>
			</div>
			<a className="text-sm dark:text-gray-600" href="/">Forgot your password?</a>
		</div>
     
		<button type="submit" className="px-8 py-3 bg-orange-400 space-x-2 font-semibold rounded ">Sign Up</button>
	</form>
</div>
        </div>
    );
};

export default Register;