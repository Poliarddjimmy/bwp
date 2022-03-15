
const VideosComponent = ({ video_url }) => {

  return (
    <div className="col-lg-12 col-md-8 col-sm-4 ">
      <div>
        <video style={{ width: "100%" }} autoPlay={"autoplay"} preLoad="auto" controls className=" mb-1 race-details d-flex flex-column justify-content-left seconary-bg-color">
          <source src={video_url} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default VideosComponent