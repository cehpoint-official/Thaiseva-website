import React from 'react'
import Img1 from "../assets/Landing-Img/Group-logo.png"
import whatsapp from "../assets/Landing-Img/whatsapp-icon.png"
import facebook from "../assets/Landing-Img/facebook.png"
import instagram from "../assets/Landing-Img/instagram.png"
import twitter from "../assets/Landing-Img/twitter.png"
import AppStore from "../assets/Landing-Img/Home/app-store.png"
import googlePay from "../assets/Landing-Img/Home/google-pay.png"

const Footer = () => {
    return <>
        <div className="previewBackImg">
            <div className='grid grid-cols-12 text-white mx-12 pt-20 pb-10 gap-8'>
                <div className='col-span-12  pb-10 md:col-span-4 lg:col-span-4 border-b md:border-b-0 '>
                    <div className='flex items-center space-x-2'>
                        <img src={Img1} height={50} width={50} alt="" />
                        <span className='text-3xl font-semibold text-white'>Thai<span className='text-yellow-400'>seva</span></span>
                    </div>
                    <p className='text-xl mt-5'><i class="bi bi-envelope-at-fill"></i> taiseva@gmail.com</p>
                    <p className='text-xl mt-2'><i class="bi bi-phone-fill"></i> +66 7209169866</p>
                </div>

                <div className='col-span-12  md:col-span-3 lg:col-span-2  border-b md:border-b-0 lg:border-b-0'>
                    <p className='text-2xl font-semibold'>Company</p>
                    <p className='text-lg mt-6 lg:mt-10 my-3'>About</p>
                    <p className='text-lg my-3 '>Contact</p>
                    <p className='text-lg my-3'>Services</p>
                </div>

                <div className='col-span-12  md:col-span-3 lg:col-span-3  border-b md:border-b-0 lg:border-b-0'>
                    <p className='text-2xl font-semibold'>Contact</p>
                    <p className='text-lg mt-6 lg:mt-10 my-3'>FAQs</p>
                    <p className='text-lg my-3'>Help</p>
                    <p className='text-lg my-3'>Terms & Conditions</p>

                </div>

                <div className='col-span-12  md:col-span-6 lg:col-span-3 '>
                    <div className='flex gap-3 ms-2'>
                        <img src={whatsapp} alt="" />
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                    <p className='my-1 text-lg mt-3 lg:mt-6 ms-12 font-semibold'>Let's try out!</p>
                    <button>
                        <img src={AppStore} alt="" className='my-4' />
                    </button>
                    <button>
                        <img src={googlePay} alt="" />
                    </button>
                </div>
            </div>
            <div className='text-center  text-gray-500 border-t text-lg  p-5'>
                Copyright © 2024 UX/UI Designer All Rights Reserved
            </div>
        </div>
    </>
}

export default Footer