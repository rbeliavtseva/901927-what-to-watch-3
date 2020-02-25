import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const VIDEO_DELAY = 1000;

const withHoveredState = (Component) => {
  class WithHoveredState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isHovered: false,
        isVideoPlaying: false
      };

      this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
      this.onCardMouseLeave = this.onCardMouseLeave.bind(this);
    }

    onCardMouseEnter() {
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

    onCardMouseLeave() {
      this.setState({isHovered: false, isVideoPlaying: false});
      this.props.onMovieCardHover();
    }

    render() {
      return (
        <Component
          {...this.props}
          isVideoPlaying={this.state.isVideoPlaying}
          onCardMouseEnter={this.onCardMouseEnter}
          onCardMouseLeave={this.onCardMouseLeave}
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
