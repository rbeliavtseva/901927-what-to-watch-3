import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.videoPlay = this.videoPlay.bind(this);
    this.videoPause = this.videoPause.bind(this);
  }

  videoPlay() {
    const video = this._videoRef.current;
    video.play();
  }

  videoPause() {
    const video = this._videoRef.current;
    video.pause();
  }

  componentDidMount() {
    if (this.props.autoPlay) {
      this.videoPlay();
    }
  }

  render() {
    const {className, muted, poster, videoReady, videoBarUpdate, videoSource} = this.props;
    return (
      <video width="auto" height="100%"
        className={className}
        muted={muted}
        poster={poster}
        ref={this._videoRef}
        onLoadedMetadata={videoReady ? () => videoReady() : null}
        onTimeUpdate={videoBarUpdate ? () => videoBarUpdate() : null}>
        <source src={videoSource} type="video/mp4"></source>
        <source src={videoSource} type="video/webm"></source>
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  className: PropTypes.string,
  autoPlay: PropTypes.bool,
  videoReady: PropTypes.func,
  videoBarUpdate: PropTypes.func,
  videoSource: PropTypes.string.isRequired
};

export default VideoPlayer;
