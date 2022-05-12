import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import FeedCard from './FeedCard'

const FeedPage = () => {
    useProtectedPage ()

  return (
    <div>FeedPage
      <div>
         <FeedCard post={'teste'}></FeedCard>
      </div>
     
    </div>
  )
}

export default FeedPage