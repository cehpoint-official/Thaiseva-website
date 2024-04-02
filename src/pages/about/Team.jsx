import React from 'react'
import TeamOne from "../../assets/AboutImg/Team-1.png"
import TeamTwo from "../../assets/AboutImg/Team-2.png"
import TeamThree from "../../assets/AboutImg/Team-3.png"
import WorkImg from "../../assets/AboutImg/work.png"

const Team = () => {
    return <>
        <div className=''>
            <div className='teamBackImg relative'>
                <div className='bg-slate-900 bg-opacity-70 absolute -z-40 h-[100vh] w-full'></div>
                <div className='z-50 '>
                    <div className='flex-col text-center items-center text-white pt-20 pb-10 '>
                        <p className='md:text-4xl text-3xl font-semibold '>
                            MEET OUR <span className='text-yellow-500 '>TEAM</span>
                        </p>
                        <div className='text-center flex justify-center'>
                            <p className='m-6 text-slate-300 text-lg italic lg:w-[39%] md:w-[55%]'>Improving your small business's growth through THAISEVA app. It also help to improve yourcustomer service an</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-12  mx-8 pb-10'>
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
        </div>

        <div className='justify-center flex gap-2'>
            <div className='h-3 w-3 rounded-full bg-slate-300'></div>
            <div className='h-3 w-3 rounded-full bg-slate-300'></div>
            <div className='h-3 w-6 rounded-lg bg-yellow-300'></div>
            <div className='h-3 w-3 rounded-full bg-slate-300'></div>
            <div className='h-3 w-3 rounded-full bg-slate-300'></div>
        </div>

        <div className='grid grid-cols-12 mx-8 pt-10 my-20'>
            <div className='col-span-12 md:col-span-6 sm:col-span-8 sm:col-start-3  lg:col-span-6 p-4 '>
                <img src={WorkImg} alt="" className='' />
            </div>
            <div className='col-span-12 md:col-span-6  sm:col-span-8 sm:col-start-3  lg:col-span-6  p-4 lg:mt-10'>
                <p className='text-yellow-500 font-semibold text-2xl '>THAISEVA</p>
                <p className='md:text-4xl text-3xl font-bold mt-3 capitalize'>OUR PHILOSOPHY</p>
                <div className='border-b-[3px] rounded-xl border-yellow-500 md:w-80 w-[17rem] my-2'></div>
                <div className='text-lg space-y-3 mt-10'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum deserunt maiores perspiciatis! Recusandae perferendis ab quis eveniet mollitia eos vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum deserunt maiores perspiciatis! Recusandae perferendis ab quis eveniet mollitia eos vero.
                    </p>

                </div>
            </div>

        </div>



    </>
}

export default Team