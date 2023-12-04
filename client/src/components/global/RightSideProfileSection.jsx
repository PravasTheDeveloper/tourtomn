import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/ReduxSlices/userReducer'
import ProfilePicture from './ProfilePicture'

function RightSideProfileSection() {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.userdata)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    // console.log(userData)

    return (
        <div className='w-full h-auto flex flex-col justify-center items-center'>
            <div className='w-[100px] h-[100px] rounded-full overflow-hidden '>
                <ProfilePicture />
            </div>
            <div className='text-center mt-4'>
                <div className='text-lg font-semibold text-slate-800'>
                    {userData.data.name}
                </div>
                <div className='w-[300px] font-medium text-slate-500 text-sm mt-3'>
                    {userData.data.bio}
                </div>
            </div>
        </div>
    )
}

export default RightSideProfileSection
