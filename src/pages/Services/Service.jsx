import React from "react";
import Navbar from "../../components/Navbar";
import googlePay from "../../assets/Landing-Img/Home/google-pay.png";
import AppStore from "../../assets/Landing-Img/Home/app-store.png";
import Iphone from "../../assets/Landing-Img/Home/iPhone-Pro.png";
import WorkImg from "../../assets/Landing-Img/Home/work-img.png";
import Work from "../../assets/Landing-Img/guide/img-1.png";

// import Footer from "./Footer";

const Service = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="backImg">
          <div className=" bg-slate-950  bg-opacity-80 ">
            <Navbar />
            <div className="bg-white grid grid-cols-12 p-20 md:gap-14">
              <div className="md:col-span-6 col-span-12">
                <img
                  src={WorkImg}
                  alt=""
                  className="w-full md:h-[24rem] shadow-yellow-800 rounded-2xl"
                />
              </div>
              <div className="md:col-span-6 col-span-12 md:mt-0 mt-10">
                <strong className="text-gray-900 font-bold text-4xl flex space-x-2 mb-6">
                  {" "}
                  Services
                  {/* <div className="h-3 w-3 bg-yellow-500 rounded-lg mt-2"></div> */}
                </strong>
                <p className="text-gray-600 font-semibold">
                  Improving your small business's growth through THAISEVA app.
                  It also help to improve your money quickly Improving your
                  small business's growth through THAISEVA app. It also help to
                  improve your
                </p>
                <p className="text-gray-600 font-semibold">
                  customer service and make more money quicklyImproving your
                  small business's growth through THAISEVA app. It also help to
                  improve your Improving your small business's growth through
                  THAISEVA app. It also help to improve your Improving your
                  small business's growth through THAISEVA app. It also help to
                  improve your
                </p>
                <p className="text-gray-600 font-semibold">
                  customer service and make more money quicklyImproving your
                  small business's growth through THAISEVA app. It also help to
                  improve.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 py-10">
              <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                What Kind Of Services Thaiseva Provide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 lg:px-20">
                <div className="text-center p-6 rounded-xl shadow-md">
                  <div className="flex justify-center items-center w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4">
                    <i className="bi bi-headset text-purple-500 text-3xl"></i>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Local Assistance
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Improving your small business's growth through Onir app. It
                    also helps to improve your customer service.
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl shadow-md">
                  <div className="flex justify-center items-center w-16 h-16 bg-orange-200 rounded-full mx-auto mb-4">
                    <i className="bi bi-cup-straw text-orange-500 text-3xl"></i>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Food</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Improving your small business's growth through Onir app. It
                    also helps to improve your customer service.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="text-center p-6 rounded-xl shadow-md">
                  <div className="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4">
                    <i className="bi bi-house-door text-blue-500 text-3xl"></i>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Room</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Improving your small business's growth through Onir app. It
                    also helps to improve your customer service.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="text-center p-6 rounded-xl shadow-md">
                  <div className="flex justify-center items-center w-16 h-16 bg-green-200 rounded-full mx-auto mb-4">
                    <i className="bi bi-car-front text-green-500 text-3xl"></i>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Travel</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Improving your small business's growth through Onir app. It
                    also helps to improve your customer service.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white grid grid-cols-12 p-20 md:gap-14 ">
              <div className="md:col-span-6 col-span-12">
                <img
                  src={Work}
                  alt=""
                  className="w-full md:h-[24rem] shadow-yellow-800 rounded-2xl"
                />
              </div>
              <div className="md:col-span-6 col-span-12 md:mt-0 mt-10">
                <strong className="text-gray-800 font-bold text-4xl flex space-x-2 mb-6">
                  {" "}
                  How Local Assistance
                  <br /> Service Work
                </strong>
                <p className="text-gray-600 font-semibold">
                  Improving your small business's growth through THAISEVA app.
                  It also help to improve your money quickly Improving your
                  small business's growth through THAISEVA app. It also help to
                  improve your
                </p>
                <p className="text-gray-600 font-semibold">
                  customer service and make more money quicklyImproving your
                  small business's growth through THAISEVA app. It also help to
                  improve your Improving your small business's growth through
                  THAISEVA app. It also help to improve your Improving your
                  small business's growth through THAISEVA app. It also help to
                  improve your
                </p>
                <p className="text-gray-600 font-semibold">
                  customer service and make more money quicklyImproving your
                  small business's growth through THAISEVA app. It also help to
                  improve.
                </p>
              </div>
            </div>

            <div className="bg-white grid grid-cols-12 p-20 md:gap-14">
              <div className="md:col-span-6 col-span-12 md:mt-0 mt-10">
                <strong className="text-gray-900 font-bold text-4xl flex space-x-2 mb-6">
                  {" "}
                  ABOUT T2T WORLD
                  {/* <div className="h-3 w-3 bg-yellow-500 rounded-lg mt-2"></div> */}
                </strong>
                <p className="text-gray-600 font-semibold">
                  Improving your small business's growth through THAISEVA app.
                  It also help to improve your money quickly Improving your
                  small business's growth through THAISEVA app. It also help to
                  improve your
                </p>
                <p className="text-gray-600 font-semibold">
                  customer service and make more money quicklyImproving your
                  small business's growth through THAISEVA app. It also help to
                  improve your Improving your small business's growth through
                  THAISEVA app. It also help to improve your Improving your
                  small business's growth through THAISEVA app. It also help to
                  improve your
                </p>
                <p className="text-gray-600 font-semibold">
                  customer service and make more money quicklyImproving your
                  small business's growth through THAISEVA app. It also help to
                  improve.
                </p>
              </div>
              <div className="md:col-span-6 col-span-12">
                <img
                  src={WorkImg}
                  alt=""
                  className="w-full md:h-[24rem] shadow-yellow-800 rounded-2xl"
                />
              </div>
            </div>

            <div className="bg-white py-10">
              <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                What Kind Of Services T2T World Provide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 lg:px-20">
                <div className="text-center p-6 rounded-xl shadow-md">
                  <div className="flex justify-center items-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4">
                    <i className="bi bi-headset text-white text-3xl"></i>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Local Assistance
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Improving your small business's growth through Onir app. It
                    also helps to improve your customer service.
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl shadow-md">
                  <div className="flex justify-center items-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4">
                    <i className="bi bi-cup-straw text-white text-3xl"></i>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Food</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Improving your small business's growth through Onir app. It
                    also helps to improve your customer service.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="text-center p-6 rounded-xl shadow-md">
                  <div className="flex justify-center items-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4">
                    <i className="bi bi-house-door text-white text-3xl"></i>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Room</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Improving your small business's growth through Onir app. It
                    also helps to improve your customer service.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="text-center p-6 rounded-xl shadow-md">
                  <div className="flex justify-center items-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4">
                    <i className="bi bi-car-front text-white text-3xl"></i>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Travel</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Improving your small business's growth through Onir app. It
                    also helps to improve your customer service.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 px-10">
              <div className="grid grid-cols-12">
                <div className="lg:col-span-4 md:col-span-12 col-span-12 flex justify-center items-center">
                  <div>
                    <p className="text-black text-5xl mt-16">
                      GET THIS APP FOR FREE{" "}
                    </p>
                    <p className="text-black mt-10">
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
      </div>
    </>
  );
};

export default Service;
