import React from "react";

const Bookrow = ({ booking , handelDelete , handelConfirm }) => {
  const { _id, customerDetails, email, date, service, price, img , status   } = booking;

  

  return (
    <tr>
      <th>
        <button
          onClick={() => handelDelete(_id)}
          className="btn btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-16">
          <div className="avatar">
            <div className="mask mask-squircle w-32 h-28">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <h1 className="text-xl text-orange-700 underline">{service}</h1>
          </div>
        </div>
      </td>
      <td>{customerDetails}</td>
      <td>{email}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
     {   
        status === 'confirm' ?   <span className="bg-blue-300 px-4 py-2 font-bold text-black rounded-xl"> Cofirmed</span> :
         <button onClick={() => handelConfirm(_id)} className="btn btn-ghost bg-orange-700 text-white text-md btn-xs">Please Confirm</button>
     }
      </th>
    </tr>
  );
};

export default Bookrow;
