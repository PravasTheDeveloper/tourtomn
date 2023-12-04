import React, { useEffect, useState } from 'react'
import FindFriendCard from './FindFriendCard'
import SpinnerLoaders from '../global/SpinnerLoaders'
import axios from 'axios'

function ShowFollowers() {

    const [FindFriendAllPeople, setFindFriendAllPeople] = useState([])
    const [loading, setloading] = useState(false)

    const PostData = async (e) => {
        // e.preventDefault();
        setloading(true)
        try {
            const response = await axios.get('/api/followers', {
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
        <div>
            {
                loading == true ?
                    <SpinnerLoaders /> :
                    FindFriendAllPeople.map((data, index) => {
                        return <FindFriendCard
                            key={index}
                            name={data.name}
                            picture={data.profile_pic}
                            userId={data._id}
                            follower={true}
                            follwing={false}
                        />
                    })
            }
        </div>
    )
}

export default ShowFollowers
