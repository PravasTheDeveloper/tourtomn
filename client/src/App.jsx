import React, { useEffect, useState } from 'react'
import HomePage from './components/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import VideoSection from './components/videos/VideoSection'
import EventSection from './components/events/EventSection'
import GroupSection from './components/group/GroupSection'
import PhotosSection from './components/photos/PhotosSection'
import LeftSideSection from './components/global/LeftSideSection'
import SignUp from './components/SignUp/SignUp'
import LoginForm from './components/Login/LoginForm'
import BarLoader from "react-spinners/BarLoader";
import TestFile from './components/testfile'
import ImageUploadingSection from './components/Home/InnerSections/ImageUploadingSection'
import FindFriends from './components/findFriends/FindFriends'
import AccountSection from './components/accountSection/AccountSection'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {

      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full bg-white flex flex-col items-center justify-center h-screen">
          <img src="/SVGS/mainLogo.svg" className='w-[200px] mb-10' alt="" />
          <BarLoader
            loading
            sizeUnit="px"
            width={100}
            height={3}
            color="#0096f2"
          />
        </div>
      ) : (

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<VideoSection />} />
          <Route path="/photos" element={<PhotosSection />} />
          <Route path="/group" element={<GroupSection />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/imageupload" element={<ImageUploadingSection />} />
          <Route path='/findfriends' element={<FindFriends />} />
          <Route path='/account/:id' element={<AccountSection />} />
          <Route path="/test" element={<TestFile />} />
        </Routes>
      )}
    </>
  )
}

export default App