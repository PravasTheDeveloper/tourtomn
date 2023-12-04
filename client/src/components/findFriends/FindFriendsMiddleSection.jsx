import React, { useEffect, useState } from 'react'
import ShowPeople from './ShowPeople'
import ShowFollowers from './ShowFollowers'
import ShowFollowing from './ShowFollowing'


function FindFriendsMiddleSection() {

    const [showFriendCell, setshowFriendCell] = useState(1)

    return (
        <>
            <div className='w-[680px] bg-white min-h-[80vh] shadow-lg p-3 relative rounded-md'>
                <div className='flex my-5 '>
                    <div className={`ml-0 font-semibold cursor-pointer ${showFriendCell == 1 ? "underline text-c-blue" : null} `} onClick={() => { setshowFriendCell(1) }}>
                        Followers
                    </div>
                    <div className={`ml-5 font-semibold cursor-pointer ${showFriendCell == 2 ? "underline text-c-blue" : null} `} onClick={() => { setshowFriendCell(2) }}>
                        Following
                    </div>
                    <div className={`ml-5 font-semibold cursor-pointer ${showFriendCell == 3 ? "underline text-c-blue" : null} `} onClick={() => { setshowFriendCell(3) }}>
                        People
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-3'>
                    {
                        showFriendCell == 1 ? <ShowFollowers /> :
                            showFriendCell == 2 ? <ShowFollowing /> :
                                <ShowPeople />
                    }
                </div>
            </div>
        </>
    )
}

export default FindFriendsMiddleSection
