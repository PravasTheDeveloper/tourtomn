import axios from 'axios';
import React from 'react'

function TestFile() {
    const clickme = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('/api/userauthcheck', {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // Include credentials if necessary
            });

            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    }

    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <button onClick={clickme}>
                Click Me
            </button>
        </div>
    )
}

export default TestFile
