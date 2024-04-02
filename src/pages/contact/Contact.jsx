import React from 'react'
import Navbar from '../../components/Navbar'
import mapImg from '../../assets/ContactImg/Map.png'
import Footer from '../../components/Footer'

const Contact = () => {
    return <>
        <div className='contactBackImg'>
            <div className='bg-slate-950 h-full bg-opacity-80 text-white text-center'>
                <Navbar />
                <div className='py-[8.5rem] px-10'>
                    <div className='flex justify-center gap-2'>
                        <p className='text-5xl font-semibold'><span className='text-yellow-500'>CONTACT</span> US </p>
                        <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                    </div>
                    <div className='flex justify-center my-8'>
                        <i className='b lg:w-2/4 md:w-2/3 text-lg'>
                            Improving your small business's growth through THAISEVA app. It also help to improve yourcustomer service an
                        </i>
                    </div>

                    <div className='grid grid-cols-12 mt-20 text-xl'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-4  '>
                            <i class="bi text-4xl text-yellow-500 pb-4  bi-telephone-outbound-fill"></i>
                            <p className='my-1 mt-4'>+66 9689643354</p>
                            <p>+66 7036790005</p>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-4 md:border-s-2 lg:border-e-2 md:my-0 my-16'>
                            <i class="bi text-4xl text-yellow-500  bi-geo-alt-fill"></i>
                            <p className='my-1 mt-4'>Bang Lamung District,
                            </p>
                            <p>Chon Buri 20150, Thailand</p>
                        </div>
                        <div className='col-span-12 md:col-span-6 md:col-start-4 md:mt-20 lg:mt-0 sm:col-span-8 sm:col-start-3  lg:col-span-4 '>
                            <i class="bi text-4xl text-yellow-500 bi-envelope-at-fill"></i>
                            <p className='my-1 mt-5'>taiseva@gmail.com</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        {/* contact */}

        <div className='flex-col text-center items-center pt-20 pb-10 '>
            <p className='md:text-4xl text-3xl font-semibold '>
                WE CAN  <span className='text-yellow-500 '>HELP YOU</span>
            </p>
            <div className='flex justify-center mt-3'>
                <div className='h-[2px] bg-yellow-500 w-[20rem]'></div>
            </div>
        </div>

        <div className='grid grid-cols-12 mx-10 lg:mx-36 md:28 gap-8'>
            <div className='col-span-12  md:col-span-6  '>
                <label for="name" class="text-xl font-semibold">First name</label>
                <input type="text" className="w-full shadow-xl rounded-md border-2 border-yellow-100  bg-slate-100 p-2 mt-2" id="name" placeholder="Enter Your Name" />
            </div>
            <div className='col-span-12  md:col-span-6  '>
                <label for="email" class="text-xl font-semibold">Email</label>
                <input type="text" className="w-full shadow-xl rounded-md border-2 border-yellow-100  bg-slate-100 p-2 mt-2" id="email" placeholder="Enter Your Email" />
            </div>
            <div className='col-span-12 '>
                <div>
                    <label for="id" class="text-xl font-semibold">Message</label>
                    <textarea className="w-full shadow-xl rounded-md border-2 border-yellow-100  bg-slate-100 p-2 mt-2" id="id" rows={5} placeholder="Enter Your Message" ></textarea>
                </div>
            </div>
        </div>
        <div className='flex-col text-center items-center pt-20 pb-10 '>
            <button className='bg-black hover:bg-yellow-500 hover:text-black text-white px-6 py-3 font-semibold rounded-lg'>Send Your Message</button>
        </div>

        <div className='mt-20'>
            <img src={mapImg} alt="" />
        </div>
        <Footer />

    </>
}

export default Contact