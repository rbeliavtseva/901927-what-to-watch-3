import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.play();
  }

  render() {
    return (
      <video width="auto" height="100%" muted poster={this.props.movie.poster} ref={this._videoRef}>
        <source src={this.props.movie.preview} type="video/mp4"></source>
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
};

export default VideoPlayer;
