import React from 'react'
import Img1 from "../assets/Landing-Img/Group-logo.png"
import { Link } from 'react-router-dom'
// import BgImg from "../assets/Landing-Img/Home/back-img.png"


const Navbar = () => {
    return <>
        <div className=' flex p-10 items-center justify-between w-full h-16 z-50 '>
            <div className='flex items-center space-x-2'>
                <img src={Img1} height={50} width={50} alt="" />
                <span className='text-3xl font-semibold text-white'>Thai<span className='text-yellow-400'>seva</span></span>
            </div>
            <div className='space-x-8 text-lg text-white hidden lg:block'>
                <Link to="/" className='hover:text-yellow-500'>Home</Link>
                <span className='hover:text-yellow-500'>Services</span>
                <span className='hover:text-yellow-500'>Hot Promotions</span>
                <Link to="/about" className='hover:text-yellow-500'>
                    <span>About</span>
                </Link>
                <Link to="/contact" className='hover:text-yellow-500'>
                    <span>Contact</span>
                </Link>
                <button className='bg-yellow-500 hover:bg-yellow-300 focus:ring-2 text-black focus:ring-yellow-300  font-semibold rounded-lg px-5 py-2 text-center inline-flex items-center mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'>
                    Sign Up
                </button>
            </div>
            <div className='lg:hidden block'>
                <i className='bi bi-list text-4xl text-white'></i>
            </div>
        </div>


    </>
}

export default Navbar