import React from 'react'
import ReactPlayer from 'react-player'

import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer controls url="https://www.youtube.com/watch?v=evJdiJPA-Vs" />
    </div>
  </div>
)

export default VideoPlayer
