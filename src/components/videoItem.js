import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} alt="text" />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
