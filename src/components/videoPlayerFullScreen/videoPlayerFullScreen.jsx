import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../videoPlayer/videoPlayer.jsx";
import {fullScreenVideoTimeDurationFormat} from '../../utils.js';

const VideoPlayerFullScreen = ({onFullScreenClose, movie, videoPlayer, playToggler, playerProgress, videoReady, handleVideoReady, videoStarted, handleVideoFullScreen, handleVideoStartPause, handleVideoBarUpdate}) => {
  const controls = videoReady ?
    (
      <React.Fragment>
        <button type="button" className="player__exit" onClick={onFullScreenClose}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100" ref={playerProgress}></progress>
              <div className="player__toggler" style={{left: 30 + `%`}} ref={playToggler}>Toggler</div>
            </div>
            <div className="player__time-value">
              {fullScreenVideoTimeDurationFormat(videoPlayer.current._videoRef.current.duration)}
            </div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={handleVideoStartPause}>
              {videoStarted ?
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

            <button type="button" className="player__full-screen" onClick={handleVideoFullScreen}>
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
        ref={videoPlayer}
        videoReady={handleVideoReady}
        videoBarUpdate={handleVideoBarUpdate}
      />
      {controls}
    </div>
  );
};

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
  onFullScreenClose: PropTypes.func.isRequired,
  videoPlayer: PropTypes.shape({current: PropTypes.instanceOf(VideoPlayer)}),
  playToggler: PropTypes.shape({current: PropTypes.instanceOf(HTMLDivElement)}),
  playerProgress: PropTypes.shape({current: PropTypes.instanceOf(HTMLProgressElement)}),
  videoReady: PropTypes.bool,
  videoStarted: PropTypes.bool,
  handleVideoReady: PropTypes.func,
  handleVideoFullScreen: PropTypes.func,
  handleVideoStartPause: PropTypes.func,
  handleVideoBarUpdate: PropTypes.func
};

export default VideoPlayerFullScreen;
