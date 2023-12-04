import React, { useEffect } from 'react'
import { BiHome, BiVideo, BiDownload, BiGroup } from 'react-icons/bi';
import HomePageButtons from '../Home/InnerSections/HomePageButtons';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md'
import { BsAirplaneEngines, BsPersonAdd } from 'react-icons/bs'
import { AiOutlineFlag } from 'react-icons/ai'
import { useLocation } from 'react-router-dom';


function LeftSideSection() {

  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className='flex-1 h-auto'>
      <div className='w-[350px] h-auto fixed'>
        <HomePageButtons button={<BiHome />} content="Home" linkgo="/" activeStatus={location.pathname === "/" ? true : false} />
        <HomePageButtons button={<MdOutlinePhotoSizeSelectActual />} content="Photos" linkgo="/photos" activeStatus={location.pathname === "/photos" ? true : false} />
        <HomePageButtons button={<BiVideo />} content="Videos" linkgo="/videos" />
        <HomePageButtons button={<BsAirplaneEngines />} content="Trading Tour" linkgo="/videos" />
        <HomePageButtons button={<BsPersonAdd />} content="Friends" linkgo="/findfriends" />
        <HomePageButtons button={<AiOutlineFlag />} content="Pages" linkgo="/videos" />
        <HomePageButtons button={<BiGroup />} content="Groups" linkgo="/videos" />
        <HomePageButtons button={<BiDownload />} content="Saved" linkgo="/videos" />
      </div>
    </div>
  )
}

export default LeftSideSection
