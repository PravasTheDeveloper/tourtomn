import React, { useEffect } from 'react'
import Navbar from '../Navigation/Navbar'
import HomePageMainSection from './HomePageMainSection'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function HomePage() {

  const navigate = useNavigate()

  const PostData = async (e) => {
    // e.preventDefault();

    try {
      const response = await axios.get('/api/userauthcheck', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // Include credentials if necessary
      });

      if (response.status != 200) {
        setTimeout(() => {
          // setloader(false)
          navigate("/login")
        }, 1 * 1000);
      }
    } catch (error) {
      // console.error('Error posting data:', error);
    }


  }

  useEffect(() => {
    PostData()
  }, [])
  return (
    <>
      <Navbar />
      <HomePageMainSection />
    </>
  )
}

export default HomePage