import React from "react";
import "../components/backImg.css";
import img1 from "../assets/Landing-Img/guide/img-1.png";
import img2 from "../assets/Landing-Img/guide/img-2.png";
import img3 from "../assets/Landing-Img/guide/img-3.png";
import img4 from "../assets/Landing-Img/guide/img-4.png";

const Guide = () => {
  return (
    <>
      <div className="bg-white pt-20">
        <div className="flex-col text-center items-center  pt-20 pb-10 ">
          <p className="md:text-4xl text-3xl font-semibold ">
            <i className="bi text-yellow-500 bi-dot text-5xl"></i>
            GET YOUR BEST GUIDE,{" "}
            <span className="text-yellow-500 ">THAISEVA</span>
          </p>
          <div className="text-center flex justify-center">
            <p className="m-6 text-slate-600  lg:w-[39%] md:w-[55%]">
              Improving your small business's growth through THAISEVA app. It
              also help to improve yourcustomer service an
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 text-white mx-10 bg-slate-900">
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <img src={img1} alt="" className=" w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 guideBackImg1 p-10 pt-14">
            <p className="text-6xl text-slate-700 font-semibold">01</p>
            <p className="my-4 text-3xl font-semibold">Local Assistance</p>
            <p className="text-slate-400">
              Improving your small business's growth through THAISEVA app. It
              also help to improve yourcustomer service anImproving your small
              business's growth through THAISEVA app. It also help to improve
              yourcustomer service anImproving your small business's growth
              through THAISEVA app. It also help to improve yourcustomer service
              anImproving your small business's growth through THAISEVA app. It
              also help to improve yo
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-6 guideBackImg2 p-10 pt-14">
            <p className="text-6xl text-slate-700 font-semibold">02</p>
            <p className="my-4 text-3xl font-semibold">Easy Food Ordering</p>
            <p className="text-slate-400">
              Improving your small business's growth through THAISEVA app. It
              also help to improve yourcustomer service anImproving your small
              business's growth through THAISEVA app. It also help to improve
              yourcustomer service anImproving your small business's growth
              through THAISEVA app. It also help to improve yourcustomer service
              anImproving your small business's growth through THAISEVA app. It
              also help to improve yo
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <img src={img2} alt="" className=" w-full h-full object-cover" />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-6 ">
            <img src={img1} alt="" className=" w-full object-cover  h-full" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6  guideBackImg3 p-10 pt-14">
            <p className="text-6xl text-slate-700 font-semibold">03</p>
            <p className="my-4 text-3xl font-semibold">Fast Room Booking</p>
            <p className="text-slate-400">
              Improving your small business's growth through THAISEVA app. It
              also help to improve yourcustomer service anImproving your small
              business's growth through THAISEVA app. It also help to improve
              yourcustomer service anImproving your small business's growth
              through THAISEVA app. It also help to improve yourcustomer service
              anImproving your small business's growth through THAISEVA app. It
              also help to improve yo
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-6 guideBackImg4 p-10 pt-14">
            <p className="text-6xl text-slate-700 font-semibold">04</p>
            <p className="my-4 text-3xl font-semibold">
              Car booking with Best Sightseeing Packages
            </p>
            <p className="text-slate-400">
              Improving your small business's growth through THAISEVA app. It
              also help to improve yourcustomer service anImproving your small
              business's growth through THAISEVA app. It also help to improve
              yourcustomer service anImproving your small business's growth
              through THAISEVA app. It also help to improve yourcustomer service
              anImproving your small business's growth through THAISEVA app. It
              also help to improve yo
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <img src={img4} alt="" className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;
