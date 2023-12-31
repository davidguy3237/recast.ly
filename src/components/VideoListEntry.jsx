const VideoListEntry = (props) => {
  let thumbnail = props.video.snippet.thumbnails.default.url;
  let title = props.video.snippet.title;
  let description = props.video.snippet.description;
  let handleClick = props.handleClick;
  return (
    <div className="video-list-entry media">

      <div className="media-left media-middle">
        <img className="media-object" src={thumbnail} />
      </div>

      <div className="media-body">
        <div className="video-list-entry-title" onClick={(event) => handleClick(props.video)}>{title}</div>
        <div className="video-list-entry-detail">{description}</div>
      </div>

    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;