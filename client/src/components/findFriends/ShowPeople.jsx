import React, { useEffect, useState } from 'react'
import FindFriendCard from './FindFriendCard'
import axios from 'axios';
import SpinnerLoaders from '../global/SpinnerLoaders';

function ShowPeople() {
    const [FindFriendAllPeople, setFindFriendAllPeople] = useState([])
    const [loading, setloading] = useState(false)

    const PostData = async (e) => {
        // e.preventDefault();
        setloading(true)
        try {
            const response = await axios.get('/api/seeperson', {
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
                            follwing={false}
                        />
                    })
            }
        </>
    )
}

export default ShowPeople
