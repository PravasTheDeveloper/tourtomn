import React from 'react'
import RightSideProfileSection from './RightSideProfileSection'
import RightSidePopularTouristPlace from './RightSidePopularTouristPlace'

function RightSideSection() {
  return (
    <div className='flex-1 h-screen relative flex justify-end'>
      <div className='w-[400px] h-full fixed'>
        <RightSideProfileSection />
        <RightSidePopularTouristPlace />
      </div>
    </div>
  )
}

export default RightSideSection
