import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import Swal from 'sweetalert2'


const Checkout = () => {
  const { id } = useParams();
  const service = useLoaderData();
  const { title, _id, price , img } = service;
  const { user } = useContext(AuthContext);

  const handleBook = e => {
    e.preventDefault(); // Corrected typo here
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const message = form.message.value;

    const email = user?.email;

    const booking = {
      customerDetails: name,
      date,
      email,
      img,
      service: title ,
      service_id: _id, 
      price: price,
      message,
    };
    console.log(booking);

    fetch('http://localhost:5000/bookings' , {
        method: 'POST' ,
        headers: {
              'content-type' : 'application/json'
        },
        body:  JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        form.reset();
        if(data.insertedId){
            Swal.fire({
                icon: "success",
                title: "Your Order iS Confirm",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })

  };





  return (
    <div>
    <div className="p-6 py-12 bg-[url(https://i.ibb.co/xXXCKYM/5.jpg)]  rounded-md mt-5 mb-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h2 className="text-center text-white text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <h2 className="text-orange-600 animate-pulse text-9xl tracking-tighter font-bold mt-10">
              Checkout
            </h2>
          </div>
          {/*  */}
          <a
            href="#"
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>

    <div className="bg-gray-300 flex flex-col rounded-2xl mb-10 items-center justify-center w-full">
      <div className="text-3xl font-bold underline mt-5 mb-2">
        Checkout Services :{" "}
        <span className="text-orange-600 text-4xl"> {title}</span>{" "}
      </div>
      <form  onSubmit={handleBook}>
        <div className="max-w-3xl">
          <div className="flex form-control mt-5 mb-5">
            <div className="flex gap-5">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input  input-bordered w-full max-w-xs"
              />
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input    input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="flex form-control mt-5 mb-5">
            <div className="flex gap-5">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input  input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="Your Email"
                className="input    input-bordered w-full max-w-2xl"
              />
            </div>
          </div>

          <div className="flex form-control mt-5 mb-5">
            <div className="flex gap-5">
              <input
                type="text"
                name="price"
                defaultValue={"$" + price}
                className="input  input-bordered w-full max-w-3xl "
              />
            </div>
          </div>
          <div className="flex form-control mt-5 mb-5">
            <div className="flex gap-5">
              <input
                type="text"
                name="message"
                placeholder=" Any Message"
                className="input  input-bordered w-full max-w-3xl h-28 "
              />
            </div>
            
          </div>
          
        </div>
        <input
          className="bg-orange-600 px-5 py-2 font-bold text-white rounded-xl mb-5 w-full flex items-center justify-center"
          type="submit"
          value="Order Confirm"
        />
      </form>
    </div>
  </div>
  );
};

export default Checkout;
