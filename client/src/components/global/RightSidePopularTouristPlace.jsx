import React from 'react'

import RightSidePopularTouristPlacePlaceSection from './RightSidePopularTouristPlacePlaceSection'

function RightSidePopularTouristPlace() {
    return (
        <>
            <div className='w-full h-auto bg-white shadow-md mt-10 p-10 rounded-lg'>
                <div className='w-full h-full '>
                    <div className='w-full h-12 flex justify-between items-center'>
                        <div className='text-xl font-semibold'>
                            Popular Tourist Place
                        </div>
                        <div>
                            See all
                        </div>
                    </div>
                    <RightSidePopularTouristPlacePlaceSection />
                    <RightSidePopularTouristPlacePlaceSection />
                    <RightSidePopularTouristPlacePlaceSection />
                    <RightSidePopularTouristPlacePlaceSection />
                    <RightSidePopularTouristPlacePlaceSection />
                    <RightSidePopularTouristPlacePlaceSection />
                </div>
            </div>
        </>
    )
}

export default RightSidePopularTouristPlace
