import React, { useEffect, useState } from 'react'
import GroupImg from "../assets/Landing-Img/Preview/Group.jpeg"
import Iphone from "../assets/Landing-Img/Preview/iPhone-img.png"
import Test from '../pages/test';


const Preview = () => {


    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const [countThree, setCountThree] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => (prevCount >= 150 ? 5 : prevCount + 5));
            setCountTwo(prevCount => (prevCount >= 100 ? 5 : prevCount + 5));
            setCountThree(prevCount => (prevCount >= 50 ? 5 : prevCount + 5));
        }, 500);

        return () => clearInterval(intervalId);
    }, [])

    return <>

        <div className='flex-col text-center items-center mt-24'>
            <p className='md:text-4xl text-3xl font-semibold '>
                <span className='text-yellow-500'>App</span> PREVIEW
                <i className='bi text-yellow-500 bi-dot text-5xl'></i>
            </p>
            <div className='text-center flex justify-center'>
                <p className='m-6 text-slate-600  lg:w-[39%] md:w-[55%]'>Improving your small business's growth through THAISEVA app. It also help to improve yourcustomer service an</p>
            </div>
        </div>
        {/* <div className='flex justify-center mx-10 mb-10'>
            <img src={GroupImg} alt="" className=' lg:h-[40rem]'/>
        </div> */}



        <Test />



        <div className='previewBackImg group'>
            <div className=' bg-slate-900 bg-opacity-80 pt-10 lg:h-[29rem]  '>
                <div className='grid grid-cols-12 px-10 flex-col items-center  gap-10'>

                    <div className='lg:col-span-2  lg:mt-0 mt-10 md:col-span-3 col-span-6 h-auto lg:mb-16 flex-col justify-center'>
                        <div className='bg-slate-800 border-2 border-yellow-200 text-white  hover:bg-slate-700 p-4  h-40 w-40 rounded-2xl'>
                            <p>PEOPLE USE THAISEVA</p>
                            <p className='text-4xl font-bold mt-2'>{countThree}+</p>
                        </div>
                    </div>
                    <div className='lg:col-span-2  lg:mt-0 mt-10  md:col-span-3 col-span-6 h-auto lg:mb-16 flex-col justify-center'>
                        <div className='bg-slate-800 border-2 border-yellow-200 p-4 text-white hover:bg-slate-700 h-40 w-40 rounded-2xl'>
                            <p>PEOPLE LIKE THAISEVA</p>
                            <p className='text-4xl font-bold mt-2'>{countTwo}+</p>
                        </div>
                    </div>
                    <div className='lg:col-span-2  lg:mt-0 mt-10 md:col-span-3 col-span-4 h-auto lg:mb-16 flex-col justify-center'>
                        <div className='bg-slate-800 border-2 border-yellow-200 p-4 text-white hover:bg-slate-700 h-40 w-40 rounded-2xl'>
                            <p>TOTAL DOWNLOADS</p>
                            <p className='text-4xl font-bold mt-2'>{count}+</p>
                        </div>
                    </div>

                    <div className='lg:col-span-6 md:col-span-8 col-span-12 flex justify-center '>
                        <img src={Iphone} alt="" className='w-full ' />
                    </div>
                </div>

            </div>
        </div>


    </>
}

export default Preview