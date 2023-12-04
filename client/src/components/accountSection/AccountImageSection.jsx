import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { fetchUserById } from '../../redux/ReduxSlices/userProfileSearch';
import { AiOutlineCamera , AiOutlineEdit } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import SpinnerLoaders from '../global/SpinnerLoaders';
import { fetchData } from '../../redux/ReduxSlices/userReducer';

function AccountImageSection() {

    const dispatch = useDispatch();
    const { DataStatus, status } = useSelector((state) => state.profiledata);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchUserById(id));
            dispatch(fetchData())
        }
    }, [dispatch, id]);

    return (
        <>
            {status === "loading" ? <SpinnerLoaders /> :
                <div className='w-full bg-white h-[70vh] shadow-lg'>
                    <div className='w-[1280px] h-full mx-auto relative'>
                        <div className='w-full mx-auto h-[500px] bg-red-400 rounded-xl rounded-t-none group relative flex items-center overflow-hidden shadow-xl'>
                            <img src={DataStatus.poster_pic === "posterUpload.gif" ? "./anonimusprofilepic/posterUpload.gif" : `/uploads/profiles/${DataStatus._id}/profileelement/${DataStatus.poster_pic}`} className='w-full h-auto object-center' alt="" />
                            <Link to="/imageupload" className="w-full rounded-xl h-full profilePicHoverstyle absolute top-0 left-0 cursor-pointer group-hover:flex ease-in duration-200 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center text-[100px]">
                                <AiOutlineCamera className='text-white' />
                            </Link>
                        </div>
                        <div className='w-[200px] h-[200px] bg-c-blue rounded-full absolute bottom-24 left-10 overflow-hidden group flex justify-center items-center'>
                            <div className='w-[190px] h-[190px] bg-white rounded-full overflow-hidden '>
                                <img src={DataStatus.profile_pic === "male.gif" ? "./anonimusprofilepic/male.gif" : DataStatus.profile_pic === "female.gif" ? "./anonimusprofilepic/female.gif" : `/uploads/profiles/${DataStatus._id}/profileelement/${DataStatus.profile_pic}`} alt="Profile" className='w-full h-full -z-50' />
                                <Link to="/imageupload" className="w-full rounded-xl h-full profilePicHoverstyle absolute top-0 left-0 cursor-pointer group-hover:flex ease-in duration-200 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center text-[100px]">
                                    <AiOutlineCamera className='text-white' />
                                </Link>
                            </div>
                        </div>
                        <div className='text-right text-3xl text-slate-500 p-font mt-4'>
                            {
                                DataStatus.name
                            }
                        </div>
                        <div className='text-right text-slate-500 '>
                            {
                                DataStatus.bio
                            }
                        </div>
                        <div className='flex justify-end'>
                            <div className='bg-slate-300 rounded-full text-3xl p-2 hover:bg-c-blue hover:text-white cursor-pointer duration-150'>
                                <AiOutlineEdit />
                            </div>
                        </div>
                    </div>
                </div>}

                <div className='w-full h-screen profilePicHoverstyle absolute top-0 left-0 z-50'>
                    <div className='bg-white'>
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
        </>
    )
}

export default AccountImageSection
