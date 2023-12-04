import React from 'react'
import LeftSideSection from '../global/LeftSideSection'
import MiddleSideSection from './InnerSections/MiddleSideSection'
import RightSideSection from '../global/RightSideSection'

function HomePageMainSection() {
    return (
        <>
            <div className='px-10 flex pt-5'>
                {/* Left Side Section */}
                <LeftSideSection />
                {/* Middle Section */}
                <MiddleSideSection />
                {/* Right Side Section */}
                <RightSideSection />
            </div>
        </>
    )
}

export default HomePageMainSection
