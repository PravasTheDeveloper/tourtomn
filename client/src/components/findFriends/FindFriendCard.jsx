import axios from 'axios';
import React, { useState } from 'react'
import ButtonSpinnerLoader from '../global/ButtonSpinnerLoader';

function FindFriendCard({ name, picture, userId, follwing, follower }) {

    const [Follow, setFollow] = useState(false)
    const [loading, setloading] = useState(false)

    const followUser = async (e) => {
        setloading(true)
        try {
            const response = await axios.post('/api/followuser', { id: userId });

            if (response.status === 200) {
                setFollow(true)
                setTimeout(() => {
                    setloading(false)
                }, 1000);
            }
        } catch (error) {
            console.error('Error following user:', error.message);
        }
    };

    return (
        <div className='w-full h-[300px] bg-white border border-slate-200 rounded-lg overflow-hidden mb-5'>
            <div className="w-full h-1/2 bg-red-400 overflow-hidden">
                <img src={picture === "male.gif" ? "./anonimusprofilepic/male.gif" : picture === "female.gif" ? "./anonimusprofilepic/female.gif" : `/uploads/profiles/${userId}/profileelement/${picture}`} alt="Profile" className='w-full h-auto -z-50' />
            </div>
            <div className='w-full h-1/2 flex flex-col justify-around'>
                <div className='w-full text-center text-lg font-medium'>
                    {name}
                </div>
                <div className='px-3'>
                    {
                        Follow === false && follwing == false && follower == false ?
                            <button className='w-full bg-c-blue py-2 rounded-lg text-white font-semibold' onClick={followUser}>
                                {loading === true ? <ButtonSpinnerLoader color="white" /> : "Follow"}
                            </button>
                            :
                            <button className='w-full bg-slate-200 text-black py-2 rounded-lg font-semibold'>
                                {follwing === false ? "Follower" : "Following"}
                            </button>
                    }

                </div>
                <div className='px-3'>
                    {
                        Follow === false && follwing == false && follower == true ?
                            <button className={`w-full py-2 rounded-lg font-semibold ${follwing == true ? "bg-c-blue text-white" : "bg-slate-300"}`}>
                                {loading === true ? <ButtonSpinnerLoader color="white" /> : "Remove"}
                            </button>
                            :
                            <button className={`w-full py-2 rounded-lg  font-semibold ${follower === false ? "bg-slate-300 text-black" : "bg-c-blue text-white"}`} >
                                {loading === true ? <ButtonSpinnerLoader color="white" /> : follower === false ? "Remove" : "Unfollow"}
                            </button>
                    }

                </div>
            </div>
        </div>
    )
}

export default FindFriendCard
