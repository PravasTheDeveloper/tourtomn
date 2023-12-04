import React, { useEffect, useState } from 'react'
import SpinnerLoaders from '../global/SpinnerLoaders'
import FindFriendCard from './FindFriendCard'
import axios from 'axios'

function ShowFollowing() {

    const [FindFriendAllPeople, setFindFriendAllPeople] = useState([])
    const [loading, setloading] = useState(false)

    const PostData = async (e) => {
        setloading(true)
        try {
            const response = await axios.get('/api/following', {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            if (response.status === 200) {
                setFindFriendAllPeople(response.data)
                setloading(false)
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }


    }
    useEffect(() => {
        PostData()
    }, [])
    return (
        <>
            {
                loading == true ?
                    <SpinnerLoaders /> :
                    FindFriendAllPeople.map((data, index) => {
                        return <FindFriendCard
                            key={index}
                            name={data.name}
                            picture={data.profile_pic}
                            userId={data._id}
                            follower={false}
                            follwing={true}
                        />
                    })
            }
        </>
    )
}

export default ShowFollowing
