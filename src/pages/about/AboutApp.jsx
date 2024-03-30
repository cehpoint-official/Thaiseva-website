import React, { useState } from 'react'
import AboutImg from "../../assets/AboutImg/about.png"

const AboutApp = () => {

    const [firstButton, setFirstButton] = useState(false)
    const [secondButton, setSecondButton] = useState(false)
    const [thirdButton, setThirdButton] = useState(false)
    const [fourButton, setFourButton] = useState(false)

    return <>

        <div className='grid grid-cols-12 p-10 md:gap-14 my-14 relative '>
            <div className='h-[5px] w-24 bg-yellow-100 absolute rotate-45 -top-7 -left-5 rounded-lg'></div>
            <div className='h-[5px] w-24 bg-slate-100 absolute rotate-45 -top-0 -left-5 rounded-lg'></div>
            <div className='h-[5px] w-24 bg-yellow-100 absolute rotate-45 -bottom-5 -right-3 rounded-lg'></div>
            <div className='h-[5px] w-24 bg-slate-100 absolute rotate-45 bottom-2 -right-3 rounded-lg'></div>
            <div className='md:col-span-6 col-span-12 relative'>
                <img src={AboutImg} alt="" className='w-full md:h-[24rem] shadow-yellow-800 rounded-2xl' />
            </div>
            <div className='md:col-span-6 col-span-12 md:mt-0 mt-10'>
                <p className='text-yellow-500 font-semibold text-2xl lg:mt-10'>THAISEVA</p>
                <p className='text-4xl font-bold mt-3 '>ABOUT OUR APP</p>
                <div className='border-b-[3px] rounded-xl border-yellow-500 w-72 my-2'></div>
                <div className='text-xl space-y-3 mt-10'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum deserunt maiores perspiciatis! Recusandae perferendis ab quis eveniet mollitia eos vero.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero,
                    </p>
                </div>
            </div>
        </div>
        <div className='useAppBackImg'>
            <div className='bg-slate-800 bg-opacity-75 h-full '>
                <div className='grid grid-cols-12 p-10 py-28 md:gap-14  relative '>
                    <div className='lg:col-span-6 col-span-12  text-white'>
                        <p className='text-yellow-500 font-semibold text-2xl '>THAISEVA</p>
                        <p className='md:text-4xl text-3xl font-bold mt-3 capitalize'>WHY YOU USE OUR APP </p>
                        <div className='border-b-[3px] rounded-xl border-yellow-500 md:w-96 w-[22rem] my-2'></div>
                        <div className='text-xl space-y-3 mt-10'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum deserunt maiores perspiciatis! Recusandae perferendis ab quis eveniet mollitia eos vero.
                            </p>

                        </div>
                    </div>
                    <div className='lg:col-span-6 col-span-12 mt-14 md:mt-0 relative text-white'>
                        <div className=''>
                            <div className='flex justify-between items-center py-6  border-b-2 border-slate-400 relative'>
                                <button className='font-semibold' onClick={e => setFirstButton(!firstButton)}>
                                    How we work ?
                                </button>
                                <button onClick={e => setFirstButton(!firstButton)}>
                                    <i className={`z-50 ${!firstButton ? " bi bi-chevron-down" : "bi bi-chevron-up"}`}></i>
                                </button>
                            </div>
                            <div onMouseLeave={e => setFirstButton(false)} className={` z-50 ${!firstButton ? "hidden" : ""} bg-slate-800 absolute w-full `}>
                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    1. Collaboration: We work together to achieve common goals.
                                </p>
                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    2. Communication: Open and clear communication is essential.
                                </p>

                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    3.  Adaptability: We remain flexible to navigate challenges and changes.
                                </p>
                            </div>

                            <div className='flex justify-between items-center py-6  border-b-2 border-slate-400 relative'>
                                <button className='font-semibold' onClick={e => setSecondButton(!secondButton)}>
                                    How many of services we provide ?
                                </button>
                                <button onClick={e => setSecondButton(!secondButton)}>
                                    <i className={`z-50 ${!secondButton ? " bi bi-chevron-down" : "bi bi-chevron-up"}`}></i>
                                </button>
                            </div>
                            <div onMouseLeave={e => setSecondButton(false)} className={` z-50 ${!secondButton ? "hidden" : ""}  bg-slate-800 absolute w-full `}>
                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    1. Depends on our expertise and resources.
                                </p>
                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    2. Typically, we offer a range of services tailored to client needs.
                                </p>

                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    3.  It can vary from consulting to product development to support.
                                </p>
                            </div>


                            <div className='flex justify-between items-center py-6  border-b-2 border-slate-400 relative'>
                                <button className='font-semibold' onClick={e => setThirdButton(!thirdButton)}>
                                    How Local assistance work?
                                </button>
                                <button onClick={e => setThirdButton(!thirdButton)}>
                                    <i className={`z-50 ${!thirdButton ? " bi bi-chevron-down" : "bi bi-chevron-up"}`}></i>
                                </button>
                            </div>
                            <div onMouseLeave={e => setThirdButton(false)} className={` z-50 ${!thirdButton ? "hidden" : ""}  bg-slate-800 absolute w-full `}>
                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    1. Local team familiar with area.
                                </p>
                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    2. Tailored support for community needs.
                                </p>

                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    3.  Direct, accessible assistance.
                                </p>
                            </div>

                            <div className='flex justify-between items-center py-6  border-b-2 border-slate-400 relative'>
                                <button className='font-semibold' onClick={e => setFourButton(!fourButton)}>
                                    How Local assistance work?
                                </button>
                                <button onClick={e => setFourButton(!fourButton)}>
                                    <i className={`z-50 ${!fourButton ? " bi bi-chevron-down" : "bi bi-chevron-up"}`}></i>
                                </button>
                            </div>
                            <div onMouseLeave={e => setFourButton(false)} className={` z-50 ${!fourButton ? "hidden" : ""}  bg-slate-800 absolute w-full `}>
                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    1. Local team familiar with area.
                                </p>
                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    2. Tailored support for community needs.
                                </p>

                                <p className='hover:bg-slate-500  p-2  focus:bg-slate-400' tabindex="0">
                                    3.  Direct, accessible assistance.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default AboutApp