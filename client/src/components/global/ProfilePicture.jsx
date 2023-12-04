import React from 'react'
import { useSelector } from 'react-redux'

function ProfilePicture({}) {

    const userData = useSelector(state => state.userdata.data)
    const picture = userData.profile_pic
    const userId = userData._id
    return (
        <>
            <img src={picture === "male.gif" ? "./anonimusprofilepic/male.gif" : picture === "female.gif" ? "./anonimusprofilepic/female.gif" : `/uploads/profiles/${userId}/profileelement/${picture}`} alt="Profile" className='w-full h-full -z-50' />
        </>
    )
}

export default ProfilePicture
