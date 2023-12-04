import React from 'react';
import { IoIosNotifications } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ProfilePicture from '../global/ProfilePicture';
import { useSelector } from 'react-redux';

function Navbar() {
    const userData = useSelector(state => state.userdata.data)
    const userId = userData._id
    return (
        <div className='w-full h-[60px] shadow-lg bg-white relative z-50'>
            <div className='w-full h-[60px] flex px-10 fixed bg-white shadow-md'>

                {/* Left Side Section */}

                <div className='flex-1 h-full flex items-center py-2'>
                    <Link to="/" className='text-2xl p-font'>
                        Tour<span className='text-c-blue'>To</span>
                    </Link>
                </div>

                {/* Right Side Section */}

                <div className='flex-1 h-full flex justify-end items-center'>
                    <div className='w-[250px] h-full flex justify-center items-center mr-5 relative'>
                        <div className='w-full h-9'>
                            <input type="text" className='w-full h-full border border-slate-400 bg-slate-100 rounded-full outline-c-blue px-3 pr-9' />
                        </div>
                        <div className='absolute right-3 text-2xl text-slate-500'>
                            <AiOutlineSearch />
                        </div>
                    </div>
                    <div className='h-[45px] w-[45px] rounded-full group flex justify-center'>
                        <div className='h-full w-full bg-slate-200 text-slate-700 rounded-full flex justify-center items-center text-2xl cursor-pointer hover:bg-slate-300 duration-150'>
                            <IoIosNotifications />
                        </div>
                        <div className='w-auto px-8 py-1 bg-b-200 text-white top-20 absolute hover:hidden rounded-md opacity-0 group-hover:opacity-100 duration-100 text-sm'>
                            Notification
                        </div>
                    </div>
                    <div className='h-[45px] w-[45px] rounded-full ml-2 group cursor-pointer flex justify-end items-center'>
                        <Link to={`/account/${userId}`} className='h-full w-full bg-slate-200 rounded-full overflow-hidden'>
                            <ProfilePicture />
                        </Link>
                        <div className='w-auto px-8 py-1 bg-b-200 text-white top-20 absolute hover:hidden rounded-md opacity-0 group-hover:opacity-100 duration-100 text-sm'>
                            Account
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar