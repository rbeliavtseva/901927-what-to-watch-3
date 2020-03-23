import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";

const VIDEO_DELAY = 1000;

const withHoveredState = (Component) => {
  class WithHoveredState extends PureComponent {
    constructor(props) {
      super(props);

      this._timeoutRef = createRef();

      this.state = {
        hovering: false,
        isHovered: false
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
      this.setState({hovering: true});
      this._timeoutRef = setTimeout(
          () => {
            if (this.state.hovering) {
              this.props.onMouseEnter();
              this.setState({isHovered: true});
            }
          }, VIDEO_DELAY
      );
    }

    handleMouseLeave() {
      clearTimeout(this._timeoutRef);
      this.setState({hovering: false, isHovered: false});
      this.props.onMouseLeave();
    }

    componentWillUnmount() {
      if (this._timeoutRef) {
        clearTimeout(this._timeoutRef);
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          isHovered={this.state.isHovered}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
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
