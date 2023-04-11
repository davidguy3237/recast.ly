var VideoPlayer = (props) => {
  if (props.video.id) {
    let videoObject = props.video;
    let title = props.video.snippet.title;
    let description = props.video.snippet.description;
    let youTubeLink = 'https://www.youtube.com/embed/' + videoObject.id.videoId;

    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={youTubeLink} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{title}</h3>
          <div>{description}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="video-player">
        Loading...
      </div>
    );
  }

};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;