import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import AboutApp from "./AboutApp";
import Mission from "./Mission";
import Team from "./Team";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <div className="aboutImg">
        <div className="bg-slate-950 h-[30rem] bg-opacity-80 text-white text-center">
          <Navbar />
          <div className="py-[8.5rem] px-10">
            <div className="flex justify-center gap-2">
              <p className="text-5xl font-semibold">
                <span className="text-yellow-500">ABOUT</span> US
              </p>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            </div>
            <div className="flex justify-center my-8">
              <i className="lg:w-2/4 md:w-2/3 text-lg">
                Improving your small business's growth through THAISEVA app. It
                also helps to improve your customer service.
              </i>
            </div>
            <div className="space-x-6 text-lg font-semibold">
              <Link to="/" className="text-yellow-500">
                Home
              </Link>
              <span>About</span>
            </div>
          </div>
        </div>
        <AboutApp />
        <Mission />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default About;
