import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';
const {useState, useEffect} = React;

var App = () => {
  const [videos, setVideos] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState({});
  const [searchText, setSearchText] = useState('');
  let timeout = null;

  useEffect(() => {
    timeout = setTimeout(() => {
      searchYouTube(searchText, (videos) => {
        setVideos(videos);
        setCurrentlyPlaying(videos[0]);
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchYouTube={searchYouTube} setSearchText={setSearchText} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentlyPlaying} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} handleClick={setCurrentlyPlaying} />
        </div>
      </div>
    </div>
  );
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

