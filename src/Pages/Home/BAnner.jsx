import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-5 rounded-2xl h-[750px]"
      >
        {/* ------------------------- */}
        <SwiperSlide>
          {" "}
          <div className="relative">
            <div className="relative  ">
              {/* <img
            className="bg-[url(https://i.ibb.co/xXXCKYM/5.jpg)] object-cover mx-auto container h-[500px] md:h-[600px] lg:h-[900px] w-full"
            src="https://i.ibb.co/kXPmshC/Group-68-1.png"
            alt=""
          /> */}

              <img
                className="h-[500px] md:h-[600px] lg:h-[900px] w-full  "
                src="https://i.ibb.co/xXXCKYM/5.jpg"
                alt=""
              />
            </div>

            <div
              className="absolute grid grid-cols-1 md:grid-cols-1 mb-10   top-28   lg:left-28 bg-opacity-85 opacity-75  
            bg-gradient-to-r from-gray-900 to-gray-300 p-5 rounded-2xl  "
            >
              <div className="animate-pulse ">
                <h1 className="text-6xl lg:text-9xl  text-white font-bold">
                  Affordable
                </h1>
                <h1 className="text-6xl lg:text-9xl text-yellow-700 font-bold ">
                  Pr!ce for Car
                </h1>
                <h1 className="text-6xl lg:text-9xl text-yellow-500 font-bold ">
                  Servecing !
                </h1>
              </div>
              <div>
                <p className="text-white mb-5  text-xl font-semi-bold">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
              <div className=" flex gap-5 ml-3">
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Discover More</span>
                </a>
                {/* -------------------------------------------------- */}
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Latest Project</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* -------------------------------------------- */}
        <SwiperSlide>
          {" "}
          <div className="h-900px">
            <div className="h-900px">
              <img
                className="bg-[url(https://i.ibb.co/3Ytmwn3/3.jpg)] object-cover h-[500px] md:h-[600px] lg:h-[1100px] w-full"
                src="https://i.ibb.co/kXPmshC/Group-68-1.png"
                alt=""
              />
            </div>

            <div className="absolute grid grid-cols-1 md:grid-cols-1 mb-10   top-28 lg:left-28 bg-opacity-85  opacity-75  ">
              <div className="animate-pulse ">
                <h1 className="text-6xl lg:text-9xl  text-red-800 font-bold">
                  MotoNovo
                </h1>
                <h1 className="text-6xl lg:text-9xl text-yellow-300 font-bold ">
                  Finance
                </h1>
              </div>
              <div>
                <p className="text-white mb-5  text-xl font-semi-bold">
                  Our expertise with finance means that even if you have a poor
                  credit rating we can help arrange finance for you.
                </p>
              </div>
              <div className=" flex gap-5 ml-3">
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Discover More</span>
                </a>

                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Latest Project</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* -------------------------------------------- */}
        <SwiperSlide>
          {" "}
          <div className="relative">
            <div className="relative">
              <img
                className="h-[500px] md:h-[600px] lg:h-[900px] w-full"
                src="https://i.ibb.co/dGVPmhb/4.jpg"
                alt=""
              />
            </div>

            <div className="absolute grid grid-cols-1 md:grid-cols-1 mb-10   top-28 lg:left-28 bg-opacity-85 opacity-75   bg-gradient-to-r from-gray-900 to-gray-400 p-5 rounded-2xl">
              <div className="animate-pulse ">
                <h1 className="text-6xl lg:text-9xl  text-white font-bold">
                  Customer
                </h1>
                <h1 className="text-6xl lg:text-9xl text-yellow-700 font-bold ">
                  Sta!sfact!on
                </h1>
                <h1 className="text-6xl lg:text-9xl text-yellow-500 font-bold ">
                  !s our Trust
                </h1>
              </div>
              <div>
                <p className="text-white mb-5  text-xl font-semi-bold">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
              <div className=" flex gap-5 ml-3">
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Discover More</span>
                </a>

                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Latest Project</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* -------------------------------------------- */}
        <SwiperSlide>
          {" "}
          <div className="relative">
            <div className="relative  ">
              <bg-url-img className=" bg-gradient-to-r from-gray-900 to-gray-300">
                <img
                  className="  "
                  src="https://i.ibb.co/DDLT97f/photo-1487754180451-c456f719a1fc.jpg"
                  alt=""
                />
              </bg-url-img>
              {/* <img
                className="h-[500px] md:h-[600px] lg:h-[900px] w-full  "
                src="https://i.ibb.co/DDLT97f/photo-1487754180451-c456f719a1fc.jpg"
                alt=""
              /> */}
            </div>

            <div
              className="absolute grid grid-cols-1 md:grid-cols-1 mb-10   top-28 lg:left-28 bg-opacity-85 opacity-75  
            bg-gradient-to-r from-gray-900 to-gray-300 p-5 rounded-2xl  "
            >
              <div className="animate-pulse ">
                <h1 className="text-6xl lg:text-9xl  text-white font-bold">
                  Affordable
                </h1>
                <h1 className="text-6xl lg:text-9xl text-yellow-700 font-bold ">
                  Pr!ce for Car
                </h1>
                <h1 className="text-6xl lg:text-9xl text-yellow-500 font-bold ">
                  Servecing !
                </h1>
              </div>
              <div>
                <p className="text-white mb-5  text-xl font-semi-bold">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
              <div className=" flex gap-5 ml-3">
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Discover More</span>
                </a>
                {/* -------------------------------------------------- */}
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Latest Project</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* -------------------------------------------- */}
        <SwiperSlide>
          {" "}
          <div className="h-900px">
            <div className="h-900px">
              <img
                className="bg-[url(https://i.ibb.co/ypW7T9x/6.jpg)] object-cover h-[500px] md:h-[600px] lg:h-[900px] w-full"
                src="https://i.ibb.co/kXPmshC/Group-68-1.png"
                alt=""
              />
            </div>

            <div className="absolute grid grid-cols-1 md:grid-cols-1 mb-10   top-28 lg:left-28 bg-opacity-85  opacity-75  ">
              <div className="animate-pulse ">
                <h1 className="text-6xl lg:text-9xl  text-red-800 font-bold">
                  MotoNovo
                </h1>
                <h1 className="text-6xl lg:text-9xl text-yellow-300 font-bold ">
                  Finance
                </h1>
              </div>
              <div>
                <p className="text-white mb-5  text-xl font-semi-bold">
                  Our expertise with finance means that even if you have a poor
                  credit rating we can help arrange finance for you.
                </p>
              </div>
              <div className=" flex gap-5 ml-3">
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Discover More</span>
                </a>

                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Latest Project</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* -------------------------------------------- */}
        <SwiperSlide className="">
          <div className="w-full h-[600px]">
            <div className="relative w-[450px] lg:w-full">
              <img
                className="  h-[500px] md:h-[600px] lg:h-[900px] lg:w-full"
                src="https://i.ibb.co/6tYjtcj/1.jpg"
                alt=""
              />
            </div>

            <div
              className="absolute grid grid-cols-1 md:grid-cols-1 mb-10   top-0   left-0 bg-opacity-85 opacity-75  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full
            p-5 rounded-2xl  "
            >
              <div className=" pl-5 py-20 lg:py-36 -mb-32 ">
                <h1 className="text-6xl lg:text-9xl  text-white font-bold">
                  Affordable
                </h1>
                <h1 className="text-6xl lg:text-9xl text-white font-bold ">
                  Pr!ce for Car
                </h1>
                <h1 className="text-6xl lg:text-9xl text-white font-bold ">
                  Servecing !
                </h1>
              </div>
              <div>
                <p className="text-white mb-5  text-xl font-semi-bold">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
              <div className=" flex sm:flex-col gap-5 ml-3">
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Discover More</span>
                </a>
                {/* -------------------------------------------------- */}
                <a
                  href="#_"
                  className="relative  items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Latest Project</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* -------------------------------------------- */}
        <SwiperSlide>
          <img
            className="bg-[url(https://i.ibb.co/t4BMJ59/2.jpg)] h-[500px] md:h-[600px] lg:h-[900px] w-full"
            src="https://i.ibb.co/kXPmshC/Group-68-1.png"
            alt=""
          />
          <div
            className="absolute grid grid-cols-1 md:grid-cols-1 mb-10   top-28   lg:left-28 bg-opacity-85 opacity-75  
            p-5 rounded-2xl  "
          >
            <div className=" ">
              <h1 className="text-6xl lg:text-9xl  text-white font-bold">
                Affordable
              </h1>
              <h1 className="text-6xl lg:text-9xl text-white font-bold ">
                Pr!ce for Car
              </h1>
              <h1 className="text-6xl lg:text-9xl text-white font-bold ">
                Servecing !
              </h1>
            </div>
            <div>
              <p className="text-white mb-5  text-xl font-semi-bold">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className=" flex gap-5 ml-3">
              <a
                href="#_"
                className="relative  items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
              >
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white">Discover More</span>
              </a>
              {/* -------------------------------------------------- */}
              <a
                href="#_"
                className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
              >
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white">Latest Project</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
