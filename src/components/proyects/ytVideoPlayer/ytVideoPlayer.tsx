import React, { useEffect } from "react";

function VideoPlayer({ videoId }: { videoId: String }) {
  console.log(window.location.pathname)
  useEffect(() => {
  }, []);
  return (
    <video width="500px" controls height="300px">
      {/* <source src="/assets/axis.mp4" type="video/mp4" /> */}
      <source src="/assets/axis.mp4" type="video/mp4" />
      <source id="mp4" src="" type="video/mp4"></source>
    </video>
  )
}
export default VideoPlayer;
