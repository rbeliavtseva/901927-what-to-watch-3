import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withActiveIndex = (Component) => {
  class WithActiveIndex extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeIndex: 0
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
      this.setState({
        activeIndex: index
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeIndex={this.state.activeIndex}
          onClick={this.handleClick}
        />
      );
    }
  }

  WithActiveIndex.propTypes = {
    activeIndex: PropTypes.number,
    onClick: PropTypes.func
  };

  return WithActiveIndex;
};

export default withActiveIndex;
