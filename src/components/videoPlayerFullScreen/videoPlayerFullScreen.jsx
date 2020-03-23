import React, {createRef} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../videoPlayer/videoPlayer.jsx";
import Moment from 'react-moment';

class VideoPlayerFullScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoPlayer = createRef();
    this._playToggler = createRef();
    this._playerProgress = createRef();

    this.state = {
      videoStarted: false,
      videoFullScreen: false,
      videoReady: false,
    };

    this.handleVideoStartPause = this.handleVideoStartPause.bind(this);
    this.videoFullScreen = this.videoFullScreen.bind(this);
    this.handleVideoReady = this.handleVideoReady.bind(this);
    this.handleVideoBarUpdate = this.handleVideoBarUpdate.bind(this);
  }

  handleVideoStartPause() {
    const videoPlayer = this._videoPlayer.current;

    if (!this.state.videoStarted) {
      videoPlayer.videoPlay();
    } else {
      videoPlayer.videoPause();
    }

    this.setState({videoStarted: !this.state.videoStarted});
  }

  videoFullScreen() {
    if (!this.state.videoFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }

    this.setState({videoFullScreen: !this.state.videoFullScreen});
  }

  handleVideoReady() {
    this.setState({videoReady: !this.state.videoReady});
  }

  handleVideoBarUpdate() {
    const {currentTime, duration} = this._videoPlayer.current._videoRef.current;

    const togglerPosition = (Math.round((currentTime / duration) * 100));

    this._playToggler.current.style.left = togglerPosition + `%`;
    this._playerProgress.current.value = togglerPosition;
  }

  componentDidUpdate(_, prevState) {
    if (this.state.videoReady && !prevState.videoReady) {
      this._playToggler.current.style.left = 0 + `%`;
      this._playerProgress.current.value = 0;
    }
  }

  render() {
    const {onFullScreenClose, movie} = this.props;

    const controls = this.state.videoReady ?
      (
        <React.Fragment>
          <button type="button" className="player__exit" onClick={onFullScreenClose}>Exit</button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value="30" max="100" ref={this._playerProgress}></progress>
                <div className="player__toggler" style={{left: 30 + `%`}} ref={this._playToggler}>Toggler</div>
              </div>
              <div className="player__time-value">
                <Moment format="HH:mm:ss" parse='ss'>
                  {this._videoPlayer.current._videoRef.current.duration}
                </Moment>
              </div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play" onClick={this.handleVideoStartPause}>
                {this.state.videoStarted ?
                  <React.Fragment>
                    <svg viewBox="0 0 14 21" width="14" height="21">
                      <use xlinkHref="#pause"></use>
                    </svg>
                    <span>Pause</span>
                  </React.Fragment> :
                  <React.Fragment>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </React.Fragment>
                }

              </button>
              <div className="player__name">{movie.title}</div>

              <button type="button" className="player__full-screen" onClick={this.videoFullScreen}>
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </React.Fragment>
      ) : null;

    return (
      <div className="player" style={{zIndex: 9999}}>
        <VideoPlayer
          className={`player__video`}
          videoSource={movie.fullMovie}
          poster={movie.poster}
          muted={false}
          autoPlay={false}
          ref={this._videoPlayer}
          videoReady={this.handleVideoReady}
          videoBarUpdate={this.handleVideoBarUpdate}/>
        {controls}
      </div>
    );
  }
}

VideoPlayerFullScreen.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    fullMovie: PropTypes.string.isRequired
  }).isRequired,
  onFullScreenClose: PropTypes.func.isRequired
};

export default VideoPlayerFullScreen;
