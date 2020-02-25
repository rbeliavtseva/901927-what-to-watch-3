import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const VIDEO_DELAY = 1000;

const withHoveredState = (Component) => {
  class WithHoveredState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        hovering: false,
        isHovered: false
      };

      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
      this.setState({hovering: true});
      setTimeout(
          () => {
            if (this.state.hovering) {
              this.props.onMouseEnter();
              this.setState({isHovered: true});
            }
          }, VIDEO_DELAY
      );
    }

    onMouseLeave() {
      this.setState({hovering: false, isHovered: false});
      this.props.onMouseLeave();
    }

    render() {
      return (
        <Component
          {...this.props}
          isHovered={this.state.isHovered}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
      );
    }
  }

  WithHoveredState.propTypes = {
    className: PropTypes.string,
    onMovieCardClick: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired
  };

  return WithHoveredState;
};


export default withHoveredState;
