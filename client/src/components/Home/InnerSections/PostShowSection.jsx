import React, { useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { BsThreeDots } from 'react-icons/bs'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { BiCommentDots } from 'react-icons/bi'
import { PiShareFatLight } from 'react-icons/pi'
import ProfilePicture from '../../global/ProfilePicture'
import { useDispatch, useSelector } from 'react-redux'
import { likeThePost } from '../../../redux/ReduxSlices/postshowReducer'
import axios from 'axios'

function PostShowSection({ id, author, createdAt, hashtags, images, likes, profile_pic, shares, title, updatedAt, userName, videos }) {

    const dispatch = useDispatch()
    function formatTime(timestamp) {
        const now = new Date();
        const uploadedTime = new Date(timestamp);
        const timeDifference = now - uploadedTime;

        const minutes = Math.floor(timeDifference / (1000 * 60));
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (minutes <= 60) {
            return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
        } else if (hours <= 24) {
            return `${hours} hour${hours === 1 ? '' : 's'} ago`;
        } else if (days <= 30) {
            return `${days} day${days === 1 ? '' : 's'} ago`;
        } else {
            return uploadedTime.toLocaleString(); // Show the full timestamp if more than 30 days
        }
    }

    const userPostLike = async(PostId , userId) => {
        await axios.post("/api/addlike" , {"PostId":PostId ,"userId":userId})
    }

    const UserAuthData = useSelector(state => state.userdata.data._id)

    const UpdateForLike = (id, auth) => {
        // console.log(auth)
        dispatch(likeThePost({ id, auth }))
        userPostLike(id,auth)
    }

    return (
        <>
            <div className='w-full h-auto bg-white mt-5 shadow-md rounded-xl p-7'>
                <div className='w-full h-full'>
                    <div className='w-full h-12 flex'>
                        <div className='w-12 h-full bg-slate-900 rounded-full overflow-hidden'>
                            <img src={profile_pic === "male.gif" ? "./anonimusprofilepic/male.gif" : profile_pic === "female.gif" ? "./anonimusprofilepic/female.gif" : `/uploads/profiles/${author}/profileelement/${profile_pic}`} alt="Profile" className='w-full h-full -z-50' />
                        </div>
                        <div className='flex flex-col justify-center ml-5'>
                            <div className='w-auto font-semibold'>
                                {userName}
                            </div>
                            <div className='text-[12px] text-slate-500'>
                                {formatTime(createdAt)}
                            </div>
                        </div>
                        <div className='flex-1 h-full flex justify-end items-center text-slate-600'>
                            <div className='text-2xl'>
                                <BsThreeDots />
                            </div>
                            <div className='text-2xl ml-5'>
                                <RxCross2 />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 font-medium'>
                        <div className='text-blue-400'>
                            {hashtags}
                        </div>

                        {title}
                    </div>
                    <div className='w-full my-4'>
                        <img src={`/uploads/profiles/${author}/postUpload/${images}`} alt="" />
                    </div>
                    <div className='w-full h-14 flex py-4 border-t border-slate-200'>
                        {
                            likes.some(items => items.user == UserAuthData) ?
                                <div className={`w-1/3 h-full border-r border-slate-400 flex justify-center items-center text-2xl cursor-pointer  text-cyan-500`} onClick={() => UpdateForLike(id, UserAuthData)}>
                                    <AiFillLike />
                                    <div className='text-base font-semibold mt-1'>Like</div>
                                    {
                                        likes.length
                                    }
                                </div>
                                :
                                <div className={`w-1/3 h-full border-r border-slate-400 flex justify-center items-center text-2xl cursor-pointer  text-cyan-`} onClick={() => UpdateForLike(id, UserAuthData)}>
                                    <AiOutlineLike />
                                    <div className='text-base font-semibold mt-1'>Like</div>
                                    {
                                        likes.length
                                    }
                                </div>
                        }

                        <div className="w-1/3 h-full border-r border-slate-400 flex justify-center items-center text-2xl">
                            <BiCommentDots />
                            <div className='text-base font-semibold mb-1'>Comment</div>
                        </div>
                        <div className="w-1/3 h-full flex justify-center items-center text-2xl">
                            <PiShareFatLight />
                            <div className='text-base font-semibold mb-1'>Share</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostShowSection
