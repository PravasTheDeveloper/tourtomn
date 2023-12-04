import React, { useEffect } from 'react'
import Swipper from './Swipper'
import StatusUploadSection from './StatusUploadSection'
import PostShowSection from './PostShowSection'
import PostWindow from '../PostWindow/PostWindow'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { fetchFeedUser } from '../../../redux/ReduxSlices/postshowReducer'

function MiddleSideSection() {

  const dispatch = useDispatch()
  const postWindowStatus = useSelector(state => state.postwindow.postwindowstatus)

  const feedData = useSelector(state => state.feeddata.userFeed)


  useEffect(() => {
    dispatch(fetchFeedUser())
  }, [])



  return (
    <div className='w-[680px] h-screen'>
      {postWindowStatus === true ? <PostWindow /> : null}
      <Swipper />
      <StatusUploadSection />
      {
        feedData ?
          feedData.map((data, index) => {
            return (
              <PostShowSection
                id={data._id}
                key={index}
                author={data.author}
                createdAt={data.createdAt}
                hashtags={data.hashtags}
                images={data.images}
                likes={data.likes}
                profile_pic={data.profile_pic}
                shares={data.shares}
                title={data.title}
                updatedAt={data.updatedAt}
                userName={data.userName}
                videos={data.videos}
              />
            )
          }) : null
      }


    </div>
  )
}

export default MiddleSideSection
