import React from "react";
import Navbar from "./Navbar";
import googlePay from "../assets/Landing-Img/Home/google-pay.png";
import AppStore from "../assets/Landing-Img/Home/app-store.png";
import Iphone from "../assets/Landing-Img/Home/iPhone-Pro.png";
import WorkImg from "../assets/Landing-Img/Home/work-img.png";
// import Iphone from "../assets/Landing-Img/Home/work-img.png";
import "../components/backImg.css";
import Overview from "./Overview";
import Guide from "./Guide";
import Preview from "./Preview";
import User from "./User";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="backImg">
        <div className=" bg-slate-950  bg-opacity-80 ">
          <Navbar />
          <div className="px-10">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-4 md:col-span-12 col-span-12 flex justify-center items-center">
                <div>
                  <p className="text-white text-5xl mt-16">
                    GET THIS APP FOR FREE{" "}
                  </p>
                  <p className="text-white mt-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti ex esse cumque,
                  </p>
                  <div className="flex gap-6 mt-10">
                    <button>
                      <img
                        className="lg:h-[3.5rem] md:h-[3.2rem] h-14"
                        src={googlePay}
                        alt=""
                      />
                    </button>
                    <button>
                      <img
                        className="lg:h-[3.5rem] md:h-[3.2rem] h-14"
                        src={AppStore}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8  md:col-span-12 col-span-12 ">
                <img src={Iphone} alt="" className="w-full h-[32rem] " />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* work Page */}
      <div className="bg-white grid grid-cols-12 p-20 md:gap-14 relative">
        <div className="md:col-span-6 col-span-12 relative">
          <img
            src={WorkImg}
            alt=""
            className="w-full md:h-[24rem] shadow-yellow-800 rounded-2xl"
          />
        </div>
        <div className="md:col-span-6 col-span-12 md:mt-0 mt-10">
          <strong className="text-gray-600 font-bold text-3xl flex space-x-2 mb-6">
            {" "}
            How
            <span className="text-yellow-500 mx-2">Thaiseva</span>
            work <div className="h-3 w-3 bg-yellow-500 rounded-lg mt-2"></div>
          </strong>
          <p className="text-gray-600 font-semibold">
            Improving your small business's growth through THAISEVA app. It also
            help to improve your money quickly Improving your small business's
            growth through THAISEVA app. It also help to improve your
          </p>
          <p className="text-gray-600 font-semibold">
            customer service and make more money quicklyImproving your small
            business's growth through THAISEVA app. It also help to improve your
            Improving your small business's growth through THAISEVA app. It also
            help to improve your Improving your small business's growth through
            THAISEVA app. It also help to improve your
          </p>
          <p className="text-gray-600 font-semibold">
            customer service and make more money quicklyImproving your small
            business's growth through THAISEVA app. It also help to improve.
          </p>
          <div className="lg:flex flex md:block mt-10 items-center gap-6">
            <div className="font-bold relative">
              <div className=""></div>
              <p className="text-gray-600 font-bold">Watch shortly how this</p>
              <p className="text-gray-600 font-bold"> app work</p>
              <div className="bg-yellow-200 h-10 w-10 rounded-3xl absolute top-0 -left-6 -z-10 border border-blue-200"></div>
              <div className="bg-yellow-200 h-10 w-10 rounded-3xl absolute top-1 left-2 -z-10"></div>
            </div>
            <div className="flex md:mt-4 lg:mt-0 gap-2 bg-black p-2 rounded-lg w-48 justify-center items-center text-white">
              <i className="bi bi-play-circle-fill text-4xl"></i>
              <div>
                <p className="font-bold">Watch the Video</p>
                <p>2:40 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Overview />
      <Guide />
      <Preview />
      <User />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
