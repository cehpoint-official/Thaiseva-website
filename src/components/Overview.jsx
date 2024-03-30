import React from 'react'
import "../components/backImg.css"
import img1 from "../assets/Landing-Img/About/img-1.png"
import img2 from "../assets/Landing-Img/About/img-2.png"
import img3 from "../assets/Landing-Img/About/img-3.png"


const Overview = () => {
    return <>
        <div className='overviewBackImg '>
            <div className=' bg-slate-900 bg-opacity-80'>
                <div className='flex-col text-center items-center text-white pt-20 pb-10 '>
                    <p className='md:text-4xl text-3xl font-semibold '>
                        <i className='bi text-yellow-500 bi-dot text-5xl'></i>
                        OVERVIEW ABOUT <span className='text-yellow-500 '>THAISEVA</span>
                    </p>
                    <div className='text-center flex justify-center'>
                        <p className='m-6 text-slate-300   lg:w-[39%] md:w-[55%]'>Improving your small business's growth through Onir app. It also help to improve yourcustomer service an</p>
                    </div>
                </div>

                <div className='grid grid-cols-12 text-white mx-4 pb-28'>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 p-4 '>
                        <div className='relative group '>
                            <img src={img1} alt="" className='z-10 w-full group-hover:opacity-30' />
                            <div className='absolute transition group-hover:-translate-y-8 duration-500 ease-in-out group-hover:bg-yellow-200 z-50 bottom-0 bg-white text-black h-[12rem] m-6 rounded-3xl p-4'>
                                <div className=''>
                                    <p className='text-2xl font-bold'><i className='bi bi-printer-fill text-yellow-500'></i> Clean Interface</p>
                                    <p className='mt-4 text-slate-600 font-semibold'>
                                        Improving your small business's growth through Onir app. It also help to improve yourcustomer service an
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4  p-4'>
                        <div className='relative group'>
                            <img src={img2} alt="" className='z-10 w-full group-hover:opacity-30   ' />
                            <div className='absolute transition duration-500 ease-in-out z-50  bottom-0 bg-white  group-hover:-translate-y-8  group-hover:bg-yellow-200 text-black  h-[12rem] m-6 rounded-3xl p-4'>
                                <div className=''>
                                    <p className='text-2xl font-bold'><i className='bi bi-speedometer text-yellow-500'></i> Fast Performance</p>
                                    <p className='mt-4 text-slate-600 font-semibold'>
                                        Improving your small business's growth through Onir app. It also help to improve yourcustomer service an
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4  p-4'>
                        <div className='relative group'>
                            <img src={img3} alt="" className='z-10 w-full group-hover:opacity-30   ' />
                            <div className='absolute transition duration-500 ease-in-out group-hover:bg-yellow-200 z-50 bottom-0 group-hover:-translate-y-8 bg-white text-black h-[12rem] m-6 rounded-3xl p-4'>
                                <div className=''>
                                    <p className='text-2xl font-bold'><i className='bi bi-shield-fill-check text-yellow-500'></i> Data Security</p>
                                    <p className='mt-4 text-slate-600 font-semibold'>
                                        Improving your small business's growth through Onir app. It also help to improve yourcustomer service an
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>
}

export default Overview