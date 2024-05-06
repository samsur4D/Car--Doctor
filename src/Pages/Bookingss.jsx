import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import Bookrow from "../Components/Bookrow";
import axios from "axios";

const Bookingss = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
      
    axios.get(url , {withCredentials: true})
    .then(res => {
       setBookings(res.data);
    })

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);

  const handelDelete = (id) => {
    const proceed = confirm("Delete korbi?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handelConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}` , {
        method: 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = 'CONFIRM'
          const  newBookings = [updated , ...remaining]
          setBookings(newBookings)

        }
      });
  };

  return (
    <div>
      <h2 className="text-6xl font-bold flex items-center justify-center mt-5 mb-5 ">MY BOOKINGS - - - {bookings.length} ❤</h2>
      {/* ---------------------------------------- */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
              </th>
              <th className="text-2xl">Your Service</th>
              <th className="text-2xl">YOur Name</th>
              <th className="text-2xl">Your Email</th>
              <th className="text-2xl">Price</th>
              <th className="text-2xl">Date</th>
              <th className="text-2xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <Bookrow
                key={booking._id}
                booking={booking}
                handelDelete={handelDelete}
                handelConfirm={handelConfirm}
              ></Bookrow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookingss;
