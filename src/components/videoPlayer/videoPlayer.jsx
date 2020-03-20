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
    return (
      <video width="auto" height="100%"
        className={this.props.className}
        muted={this.props.muted}
        poster={this.props.poster}
        ref={this._videoRef}
        onLoadedMetadata={this.props.videoReady ? () => this.props.videoReady() : null}
        onTimeUpdate={this.props.videoBarUpdate ? () => this.props.videoBarUpdate() : null}>
        <source src={this.props.videoSource} type="video/mp4"></source>
        <source src={this.props.videoSource} type="video/webm"></source>
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
