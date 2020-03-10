import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withLoadMore = (Component) => {
  class WithLoadMore extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        timesLoaded: 1
      };

      this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() {
      this.setState({timesLoaded: this.state.timesLoaded + 1});
    }

    render() {
      return (
        <Component
          {...this.props}
          onClick={this.handleBtnClick}
          timesLoaded={this.state.timesLoaded}
        />
      );
    }
  }

  WithLoadMore.propTypes = {
    onClick: PropTypes.func,
    timesLoaded: PropTypes.number
  };

  return WithLoadMore;
};

export default withLoadMore;

