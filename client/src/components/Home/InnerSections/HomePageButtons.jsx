import React from 'react'
import { Link } from 'react-router-dom'

function HomePageButtons({ button, content, linkgo, activeStatus }) {



    return (
        <>
            <Link to={linkgo} className='flex items-center h-[50px] mb-3 cursor-pointer border-none'>
                <div className={`flex w-full h-full items-center px-6 rounded-lg hover:bg-slate-200 ${activeStatus === true ? "bg-white shadow-md" : null}`}>
                    <div className='text-2xl text-c-blue'>
                        {button}
                    </div>
                    <div className='text-base font-semibold mt-1 ml-5 '>
                        {content}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HomePageButtons
