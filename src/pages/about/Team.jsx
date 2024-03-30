import React from 'react'
import TeamOne from "../../assets/AboutImg/Team-1.png"
import TeamTwo from "../../assets/AboutImg/Team-2.png"
import TeamThree from "../../assets/AboutImg/Team-3.png"

const Team = () => {
    return <>
        <div className='teamBackImg'>
            <div className='bg-slate-900 bg-opacity-30 h-[37rem]'>
                <div className='flex-col text-center items-center text-white pt-20 pb-10 '>
                    <p className='md:text-4xl text-3xl font-semibold '>
                        MEET OUR <span className='text-yellow-500 '>TEAM</span>
                    </p>
                    <div className='text-center flex justify-center'>
                        <p className='m-6 text-slate-300 text-lg italic lg:w-[39%] md:w-[55%]'>Improving your small business's growth through Onir app. It also help to improve yourcustomer service an</p>
                    </div>
                </div>
                <div className='grid grid-cols-12  mx-8 pb-28'>
                    <div className='col-span-12 md:col-span-6 sm:col-span-8 sm:col-start-3  lg:col-span-4 p-4 '>
                        <img src={TeamOne} alt="" className='shadow-2xl w-full lg:h-[60%]' />
                        <div className='bg-slate-100 shadow-2xl text-black p-5'>
                            <p className='text-xl font-semibold'>Luna Smith</p>
                            <p className='text-yellow-500 my-1 font-semibold'>Team member</p>
                            <p className='text-slate-800 mt-2'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum
                            </p>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-6 sm:col-span-8 sm:col-start-3  lg:col-span-4  p-4'>
                        <img src={TeamTwo} alt="" className='shadow-2xl w-full lg:h-[60%]' />
                        <div className='bg-slate-100 shadow-2xl text-black p-5'>
                            <p className='text-xl font-semibold'>Joy Smith</p>
                            <p className='text-yellow-500 my-1 font-semibold'>Team member</p>
                            <p className='text-slate-800 mt-2'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum
                            </p>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:mt-0 md:mt-6 sm:col-span-8 sm:col-start-3 md:col-start-4 lg:col-span-4  p-4'>
                        <img src={TeamThree} alt="" className='shadow-2xl w-full lg:h-[60%]' />
                        <div className='bg-slate-100 shadow-2xl text-black p-5'>
                            <p className='text-xl font-semibold'>Mika Smith</p>
                            <p className='text-yellow-500 my-1 font-semibold'>Team member</p>
                            <p className='text-slate-800 mt-2'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>



    </>
}

export default Team