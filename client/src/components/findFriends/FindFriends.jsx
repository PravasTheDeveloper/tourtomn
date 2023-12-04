import React from 'react'
import Navbar from '../Navigation/Navbar'
import LeftSideSection from '../global/LeftSideSection'
import MiddleSideSection from '../Home/InnerSections/MiddleSideSection'
import RightSideSection from '../global/RightSideSection'
import FindFriendsMiddleSection from './FindFriendsMiddleSection'

function FindFriends() {
    return (
        <>
            <Navbar />
            <div className='px-10 flex pt-5'>
                {/* Left Side Section */}
                <LeftSideSection />
                {/* Middle Section */}
                <FindFriendsMiddleSection />
                {/* Right Side Section */}
                <RightSideSection />
            </div>
        </>
    )
}

export default FindFriends
