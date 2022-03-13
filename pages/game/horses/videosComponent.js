import React, { useState, useRef, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const VideosComponent = ({ video_url }) => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  console.log("height--", windowDimensions?.height)
  return (<div className="col-lg-12 col-md-8 col-sm-4 ">
    <div>
      <video width={windowDimensions?.width / 1.5} height={windowDimensions?.height / 1.5} autoPlay="autoplay" controls className=" mb-1 race-details d-flex flex-column justify-content-center align-items-center seconary-bg-color border-danger">
        <source src={video_url} type="video/mp4" />
        {/* <source src={`https://admin.clichubs.com/public/assets/games/videos/UegDqZBUqW9vNzKKmqPvK5ZEQPJUY7ebyY6EzWRu.mp4`} type="video/ogg" /> */}
      </video>
    </div>
    {/* <div className="d-flex justify-content-center">
      <h4>View the last game</h4>
    </div> */}
  </div>)
}

export default VideosComponent