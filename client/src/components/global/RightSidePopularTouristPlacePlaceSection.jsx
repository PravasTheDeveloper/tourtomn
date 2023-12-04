import React from 'react'
import {AiFillStar} from "react-icons/ai"
function RightSidePopularTouristPlacePlaceSection() {
    return (
        <>
            <div className='w-full flex h-16 bg-white mt-4'>
                <div className='w-20 bg-blue-500 rounded-lg overflow-hidden'>
                    <img className='h-full object-center' src="https://images.unsplash.com/photo-1658383898607-6b92e8196e33?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='flex-1 h-full ml-3'>
                    <div className='w-full font-semibold'>
                        Sajet Valli
                    </div>
                    <div className='text-[12px] text-slate-500'>
                        location
                    </div>
                    <div className='flex items-center font-semibold'>
                        <AiFillStar className='w-auto text-yellow-500' /> 4.9
                    </div>
                </div>
                <div className='w-16 flex justify-center items-center'>
                    <button className='bg-cyan-500 w-full py-2 rounded-md text-white font-semibold'>Details</button>
                </div>
            </div>
        </>
    )
}

export default RightSidePopularTouristPlacePlaceSection
