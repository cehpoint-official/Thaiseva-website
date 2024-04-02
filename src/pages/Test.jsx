import React, { useState } from 'react';
import Img1 from "../assets/Landing-Img/Preview/img-1.png";
import Img2 from "../assets/Landing-Img/Preview/img-2.png";
import Img3 from "../assets/Landing-Img/Preview/img-3.png";
import Img4 from "../assets/Landing-Img/Preview/img-4.png";
import Img5 from "../assets/Landing-Img/Preview/img-5.png";
import Img6 from "../assets/Landing-Img/Preview/img-6.png";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const Test = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToNext = () => {
        setActiveIndex((current) => {
            const nextIndex = current === images.length - 1 ? 0 : current + 1;
            return nextIndex;
        });
    };

    const goToPrev = () => {
        setActiveIndex((current) => {
            const prevIndex = current === 0 ? images.length - 1 : current - 1;
            return prevIndex;
        });
    };

    return (
        <>
            <div className='flex justify-center mb-20 mt-10'>
                <div className="carousel  carousel-center flex justify-around bg-slate-100 items-center lg:w-[41.2rem] w-[28rem] p-6 space-x-4 rounded-box">
                    <button className=' bg-yellow-500 font-semibold focus:border-slate-600 border-2 p-2 rounded-lg' onClick={goToPrev}>Prev</button>
                    <img src={images[activeIndex]} className=" h-[30rem] rounded-2xl rounded-b-2xl" alt="carousel item " />
                    <button className=' bg-yellow-500 font-semibold focus:border-slate-600 border-2 p-2 rounded-lg' onClick={goToNext}>Next</button>
                </div>
            </div>
            <div className='flex justify-center space-x-2'>
            </div>
        </>
    );
};

export default Test;