
import React, { useEffect, useRef, useState } from 'react'

const Test = () => {

    const [fourButton, setFourButton] = useState(false)



    return <>
        <div
            className='flex justify-between items-center py-4 px-2 '>
            <button onClick={e => setFourButton(!fourButton)}>
                What is THAISEVA privacy policy?
            </button>
            <button onClick={e => setFourButton(!fourButton)}>
                <i className={`z-50 ${!fourButton ? " bi bi-chevron-down" : "bi bi-chevron-up"}`}></i>
            </button>
        </div >

        <div
            // onMouseLeave={e => setFourButton(false)}
            onClick={e => setFourButton(false)}
            className={` z-50 ${!fourButton ? "hidden" : ""}  bg-slate-300`}>
            <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                1. Website: Check THAISEVA's website for a privacy policy link.
            </p>
            <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                2. Support: Reach out to their customer support for information.
            </p>

            <p className='hover:bg-slate-200 p-2  focus:bg-slate-400' tabindex="0">
                3. Documentation: Look through any provided product documentation.
            </p>
        </div>

    </>
}

export default Test