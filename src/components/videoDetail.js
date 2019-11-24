import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" allow="autoPlay" src={videoSrc} />
      </div>
      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon"></i> Like
        </div>
        <a class="ui basic red left pointing label">
          {video.snippet.viewCount}
        </a>
      </div>

      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <h4>{video.snippet.publishedAt}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
