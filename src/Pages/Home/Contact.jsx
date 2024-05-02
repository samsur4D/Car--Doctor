import React from "react";
import calender from "../../assets/icons/Group 35.svg";
import phone from "../../assets/icons/Group 32.svg";
import address from "../../assets/icons/Group 34.svg";

const Contact = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  bg-black
       rounded-2xl h-[450px] lg:h-[300px]  py-28 px-28  container mx-auto mb-10 ">

        <div className="flex items-center  ">
          <div>
            <img src={calender} alt="" />
          </div>
          <div className="ml-2">
            <h2 className="text-white">Need a Repair ? our address</h2>
            <h2 className="text-white font-bold">Liza Park , Bangladesh</h2>
          </div>
        </div>
        {/* ============= */}
        <div className="flex items-center ">
          <div>
            <img src={address} alt="" />
          </div>
          <div className="ml-2">
            <h2 className="text-white">Need a Repair ? our address</h2>
            <h2 className="text-white font-bold">Liza Park , Bangladesh</h2>
          </div>
        </div>
        {/* ==================== */}
        <div className="flex items-center ">
          <div>
            <img src={phone} alt="" />
          </div>
          <div className="ml-2">
            <h2 className="text-white">Need a Repair ? our address</h2>
            <h2 className="text-white font-bold">Liza Park , Bangladesh</h2>
          </div>
        </div>
        {/* --------------------- */}
      </div>
    </div>
  );
};

export default Contact;
