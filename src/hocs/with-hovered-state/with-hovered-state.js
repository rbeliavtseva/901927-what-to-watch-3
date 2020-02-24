import React, {PureComponent} from 'react';
import {VIDEO_DELAY} from "../../components/videoPlayer/videoPlayer.jsx";
import PropTypes from "prop-types";

const withHoveredState = (Component) => {
  class WithHoveredState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isHovered: false,
        isVideoPlaying: false
      };

      this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
      this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
    }

    handleCardMouseEnter() {
      this.setState({isHovered: true});
      setTimeout(
          () => {
            if (this.state.isHovered) {
              this.props.onMovieCardHover(this.props.movie);
              this.setState({isVideoPlaying: true});
            }
          }, VIDEO_DELAY
      );
    }

    handleCardMouseLeave() {
      this.setState({isHovered: false, isVideoPlaying: false});
      this.props.onMovieCardHover();
    }

    render() {
      return (
        <Component
          {...this.props}
          isVideoPlaying={this.state.isVideoPlaying}
          handleCardMouseEnter={this.handleCardMouseEnter}
          handleCardMouseLeave={this.handleCardMouseLeave}
        />
      );
    }
  }

  WithHoveredState.propTypes = {
    movie: PropTypes.exact({
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      preview: PropTypes.string.isRequired
    }).isRequired,
    className: PropTypes.string,
    onMovieCardClick: PropTypes.func.isRequired,
    onMovieCardHover: PropTypes.func.isRequired
  };

  return WithHoveredState;
};


export default withHoveredState;
