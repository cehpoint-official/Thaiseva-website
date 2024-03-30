import React from 'react'
import MissionImg from "../../assets/AboutImg/mission.png"
import MissionImgTwo from "../../assets/AboutImg/mission-2.png"

const Mission = () => {
    return <>

        <div className='grid grid-cols-12 gap-8 my-16 mx-10'>
            <div className='lg:col-span-6 col-span-12 '>
                <p className='text-yellow-500 font-semibold text-2xl '>THAISEVA</p>
                <p className='md:text-4xl text-3xl font-bold mt-3 capitalize'>OUR MISSION STATEMENT</p>
                <div className='border-b-[3px] rounded-xl border-yellow-500 md:w-96 w-[22rem] my-2'></div>
                <div className='text-lg space-y-3 mt-10'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum deserunt maiores perspiciatis! Recusandae perferendis ab quis eveniet mollitia eos vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum deserunt maiores perspiciatis! Recusandae perferendis ab quis eveniet mollitia eos vero.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum deserunt maiores perspiciatis! Recusandae perferendis ab quis eveniet mollitia eos vero.
                    </p>
                </div>
            </div>
            <div className='lg:col-span-6 md:col-span-6 col-span-12 '>
                <img src={MissionImg} alt="" />
            </div>

        </div>
        <div className='grid grid-cols-12 gap-8 my-16 mx-10  order-2'>
            <div className='lg:col-span-6 hidden lg:block md:col-span-6 w-full col-span-12 '>
                <img src={MissionImgTwo} alt="" className='w-full' />
            </div>

            <div className='lg:col-span-6 col-span-12 '>
                <p className='text-yellow-500 font-semibold text-2xl '>THAISEVA</p>
                <p className='md:text-4xl text-3xl font-bold mt-3 capitalize'>OUR PHILOSOPHY</p>
                <div className='border-b-[3px] rounded-xl border-yellow-500 md:w-80 w-[17rem] my-2'></div>
                <div className='text-lg space-y-3 mt-10'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum deserunt maiores perspiciatis! Recusandae perferendis ab quis eveniet mollitia eos vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum deserunt maiores perspiciatis! Recusandae perferendis ab quis eveniet mollitia eos vero.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestiae dicta unde id perferendis magni numquam vero, eligendi laborum deserunt maiores perspiciatis! Recusandae perferendis ab quis eveniet mollitia eos vero.
                    </p>
                </div>
            </div>
            <div className='lg:col-span-6 lg:hidden block md:col-span-6  w-full col-span-12 '>
                <img src={MissionImgTwo} alt="" className='w-full' />
            </div>

        </div>


    </>
}

export default Mission