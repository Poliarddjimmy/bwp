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
  return (
    <div className="col-lg-12 col-md-8 col-sm-4 ">
      {/* <div>
      <video width={windowDimensions?.width / 1.5} height={windowDimensions?.height / 1.5} autoPlay={"autoplay"} preLoad="auto" controls className=" mb-1 race-details d-flex flex-column justify-content-center align-items-center seconary-bg-color border-danger">
        <source src={video_url} type="video/mp4" />
      </video>
    </div> */}

      <div
        dangerouslySetInnerHTML={{
          __html: `
    <video id="video" autoplay>
      <source src=${video_url} type="video/mp4" />
      <source src="" type="video/avi" />
      <source src="" type="video/mpeg" />
      <source src="" type="video/ogg" />
    </video>
    `
        }}
      />

    </div>
  )
}

export default VideosComponent