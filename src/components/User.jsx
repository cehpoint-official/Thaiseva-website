import React, { useEffect, useRef, useState } from "react";
import Users from "../assets/Landing-Img/users.png";
import Test from "./Text";

const User = () => {
  const [firstButton, setFirstButton] = useState(false);
  const [secondButton, setSecondButton] = useState(false);
  const [thirdButton, setThirdButton] = useState(false);
  const [fourButton, setFourButton] = useState(false);

  return (
    <div>
      <div className="flex-col text-center items-center  lg:mt-40 mt-20">
        <p className="md:text-4xl text-3xl font-bold text-black relative">
          <i className="bi bi-dot text-yellow-500 text-5xl absolute bottom-1 left-30 transform -translate-x-12 -translate-y-2"></i>
          WHAT <span className="text-yellow-500">THAISEVA</span> USERS SAY
        </p>

        <div className="text-center flex justify-center">
          <p className="m-6 text-slate-600  lg:w-[39%] md:w-[55%]">
            Improving your small business's growth through THAISEVA app. It also
            help to improve yourcustomer service an
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 m-10 gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 transition duration-700 ease-in-out bg-slate-200 hover:bg-black hover:text-white rounded-xl shadow-xl p-6">
          <p className="text-2xl mb-4 font-bold text-black">Simple & Useful!</p>
          <p className="mt-1 text-slate-500">
            {" "}
            Aliquam augue suscipit luctus neque purus ipsum neque dolor primis
            libero tempus.
          </p>
          <p className="mt-1 text-slate-500">
            blandit posuere ligula varius magna congue at cursus porta luctus
            neque purus ipsum neque and dolor primis libero tempus, blandit
            posuere ligula varius magna.
          </p>

          <div className="flex justify-between items-center mt-8">
            <div>
              <p className=" text-slate-500">by Anya Nohara</p>
              <div className="space-x-2 text-xl text-yellow-500">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div>
              <img src={Users} alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 transition duration-700 ease-in-out bg-black hover:bg-black hover:text-white rounded-xl shadow-xl p-6">
          <p className="text-2xl mb-4 font-bold text-white">
            Useful, Elegant and Effective
          </p>
          <p className="mt-1 text-white">
            {" "}
            Aliquam augue suscipit luctus neque purus ipsum neque dolor primis
            libero tempus.
          </p>
          <p className="mt-1 text-white">
            blandit posuere ligula varius magna congue at cursus porta luctus
            neque purus ipsum neque and dolor primis libero tempus, blandit
            posuere ligula varius magna.
          </p>

          <div className="flex justify-between items-center mt-8">
            <div>
              <p className=" text-white">by Anya Nohara</p>
              <div className="space-x-2 text-xl text-yellow-500">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div>
              <img src={Users} alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 transition duration-700 ease-in-out  md:col-start-4 bg-slate-200 hover:bg-black hover:text-white rounded-xl shadow-xl p-6">
          <p className="text-2xl mb-4 font-bold text-black">I Love This App</p>
          <p className="mt-1 text-slate-500">
            {" "}
            Aliquam augue suscipit luctus neque purus ipsum neque dolor primis
            libero tempus.
          </p>
          <p className="mt-1 text-slate-500">
            blandit posuere ligula varius magna congue at cursus porta luctus
            neque purus ipsum neque and dolor primis libero tempus, blandit
            posuere ligula varius magna.
          </p>

          <div className="flex justify-between items-center mt-8">
            <div>
              <p className=" text-slate-500">by Anya Nohara</p>
              <div className="space-x-2 text-xl text-yellow-500">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div>
              <img src={Users} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col text-center items-center mt-28 mb-10">
        <p className="md:text-4xl text-3xl font-semibold text-black relative">
          <span className="text-yellow-500 ">FREQUENTLY </span>
          ASKED QUECTION
          <i className="bi text-yellow-500 bi-dot text-5xl absolute  left-34 transform -translate-x-1 -translate-y-5"></i>
        </p>
        <div className="text-center flex justify-center">
          <p className="m-6 text-slate-600  lg:w-[39%] md:w-[55%]">
            Improving your small business's growth through THAISEVA app. It also
            help to improve yourcustomer service an
          </p>
        </div>
      </div>
      <div className="lg:mx-28 md:20 mx-10 text-xl mb-20 text-black">
        <div className="flex justify-between items-center py-4 px-2 border-b-2 border-slate-400">
          <button onClick={(e) => setFirstButton(true)}>
            I’ve got older Mac. Is THAISEVA compatible with it?
          </button>
          <button onClick={(e) => setFirstButton(true)}>
            <i
              className={`z-50 ${
                !firstButton ? " bi bi-chevron-down" : "bi bi-chevron-up"
              }`}
            ></i>
          </button>
        </div>
        <div
          onMouseLeave={(e) => setFirstButton(false)}
          onClick={(e) => setFirstButton(false)}
          className={` z-50 ${!firstButton ? "hidden" : ""}  bg-slate-300`}
        >
          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            1. Identify the version of the operating system on your Mac.
          </p>
          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            2. Check the version against THAISEVA's compatibility list.
          </p>

          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            3. Verify if your hardware specifications meet the minimum
            requirements of THAISEVA.
          </p>
        </div>
        <div className="flex justify-between items-center py-4 px-2 border-b-2 border-slate-400">
          <button onClick={(e) => setSecondButton(!secondButton)}>
            What are the requirements for using THAISEVA?
          </button>
          <button onClick={(e) => setSecondButton(!secondButton)}>
            <i
              className={`z-50 ${
                !secondButton ? " bi bi-chevron-down" : "bi bi-chevron-up"
              }`}
            ></i>
          </button>
        </div>
        <div
          onMouseLeave={(e) => setSecondButton(false)}
          onClick={(e) => setSecondButton(false)}
          className={` z-50 ${!secondButton ? "hidden" : ""}  bg-slate-300`}
        >
          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            1. Operating System: THAISEVA requires a certain version of macOS or
            Windows.
          </p>
          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            2. Processor: A minimum speed and type of CPU is necessary to run
            THAISEVA.
          </p>

          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            3. Memory: THAISEVA needs a specified amount of RAM to function
            properly.
          </p>
        </div>

        <div className="flex justify-between items-center py-4 px-2 border-b-2 border-slate-400">
          <button onClick={(e) => setThirdButton(!thirdButton)}>
            How does THAISEVA handle my privacy?
          </button>
          <button onClick={(e) => setThirdButton(!thirdButton)}>
            <i
              className={`z-50 ${
                !thirdButton ? " bi bi-chevron-down" : "bi bi-chevron-up"
              }`}
            ></i>
          </button>
        </div>

        <div
          onMouseLeave={(e) => setThirdButton(false)}
          onClick={(e) => setThirdButton(false)}
          className={` z-50 ${!thirdButton ? "hidden" : ""}  bg-slate-300`}
        >
          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            1. Encrypts data.
          </p>
          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            2. Details in their privacy policy.
          </p>

          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            3. Complies with laws.
          </p>
        </div>

        <div className="flex justify-between items-center py-4 px-2 ">
          <button onClick={(e) => setFourButton(!fourButton)}>
            What is THAISEVA privacy policy?
          </button>
          <button onClick={(e) => setFourButton(!fourButton)}>
            <i
              className={`z-50 ${
                !fourButton ? " bi bi-chevron-down" : "bi bi-chevron-up"
              }`}
            ></i>
          </button>
        </div>

        <div
          onMouseLeave={(e) => setFourButton(false)}
          onClick={(e) => setFourButton(false)}
          className={` z-50 ${!fourButton ? "hidden" : ""}  bg-slate-300`}
        >
          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            1. Website: Check THAISEVA's website for a privacy policy link.
          </p>
          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            2. Support: Reach out to their customer support for information.
          </p>

          <p
            className="hover:bg-slate-200 p-2  focus:bg-slate-400"
            tabindex="0"
          >
            3. Documentation: Look through any provided product documentation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
