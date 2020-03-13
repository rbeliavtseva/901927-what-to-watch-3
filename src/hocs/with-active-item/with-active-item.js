import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onActiveItem={this.handleClick}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    activeItem: PropTypes.any,
    onClick: PropTypes.func
  };

  return WithActiveItem;
};

export default withActiveItem;
