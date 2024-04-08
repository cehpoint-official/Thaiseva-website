import React from 'react'
import Logo from "../assets/Landing-Img/Group-logo.png"
import AppStore from "../assets/Landing-Img/Home/app-store.png"
import googlePay from "../assets/Landing-Img/Home/google-pay.png"

const Subscribe = () => {
    return <>
        <div className='previewBackImg pb-20'>
            <div className='flex-col text-center items-center  pt-24'>
                <p className='md:text-4xl text-3xl text-white font-semibold '>
                    Subscribe to Our
                    <span className='text-yellow-500 '> Newsletter </span>

                </p>
                <div className='text-center flex justify-center'>
                    <p className='m-6 text-slate-300  lg:w-[30%] md:w-[55%]'>Improving your small business's growth through THAISEVA app. It also </p>
                </div>
            </div>
            <div className='flex-col text-center items-center mt-14 '>
                <input type="text" className='p-3 lg:w-[28rem] sm:w-[23rem] rounded-s-lg sm:text-lg' placeholder='Enter your Email here' />
                <button className='bg-yellow-500 p-3 px-10 rounded-e-lg font-semibold sm:text-lg'>Subscribe</button>
            </div>
        </div>

        <div className='flex-col text-center items-center  pt-20 pb-10 '>
            <p className='md:text-4xl text-3xl font-semibold '>
                <i className='bi text-yellow-500 bi-dot text-5xl'></i>
                DOWNLOAD <span className='text-yellow-500 '>THAISEVA APP </span>
                TODAY!
            </p>
            <div className='text-center flex justify-center'>
                <p className='m-6 text-slate-400   lg:w-[30%] md:w-[55%]'>Improving your small business's growth through THAISEVA app. It also </p>
            </div>
        </div>
        <div className='sm:flex sm:space-x-10 mx-10 lg:gap-28 gap-10 justify-center mb-14'>
            <div className=''>
                <div className='bg-yellow-100 h-36 ms-[30%] sm:ms-6 w-36 p-4 rounded-lg'>
                    <div className='h-42 w-36 bg-slate-900 rounded-lg  flex justify-center items-center'>
                        <div className='text-center text-white py-4'>
                            <img src={Logo} alt="" className='h-20 mb-3' />
                            <p className='text-2xl'>THAISEVS</p>
                        </div>
                    </div>
                </div>
                <div className='mt-16    text-center'>
                    <div className='ms-[25%] sm:ms-0'>

                        <button>
                            <img src={AppStore} alt="" className='' />
                        </button>
                        <div className='text-yellow-500 sm:ms-0 ms-6 space-x-1 text-lg flex sm:justify-center my-4'>
                            <i className='bi  bi-star-fill'></i>
                            <i className='bi  bi-star-fill'></i>
                            <i className='bi  bi-star-fill'></i>
                            <i className='bi  bi-star-fill'></i>
                            <i className='bi  bi-star-fill'></i>
                            <p className='text-black'>(305)</p>
                        </div>
                    </div>
                    <p className='text-lg'>Rating 4.2</p>
                </div>
            </div>
            <div className='mt-20 sm:mt-0'>
                <div className='bg-yellow-100 h-36 ms-[30%] sm:ms-6 w-36 p-4 rounded-lg'>
                    <div className='h-42 w-36 bg-slate-900 rounded-lg  flex justify-center items-center'>
                        <div className='text-center text-white py-4'>
                            <img src={Logo} alt="" className='h-20 mb-3' />
                            <p className='text-2xl'>THAISEVS</p>
                        </div>
                    </div>
                </div>
                <div className='mt-16    text-center'>
                    <div className='ms-[25%] sm:ms-0'>

                        <button>
                            <img src={googlePay} alt="" className='' />
                        </button>
                        <div className='text-yellow-500 sm:ms-0 ms-6 space-x-1 text-lg flex sm:justify-center my-4'>
                            <i className='bi  bi-star-fill'></i>
                            <i className='bi  bi-star-fill'></i>
                            <i className='bi  bi-star-fill'></i>
                            <i className='bi  bi-star-fill'></i>
                            <i className='bi  bi-star-fill'></i>
                            <p className='text-black'>(395)</p>
                        </div>
                    </div>
                    <p className='text-lg '>Rating 4.8</p>
                </div>
            </div>


        </div>


    </>
}

export default Subscribe