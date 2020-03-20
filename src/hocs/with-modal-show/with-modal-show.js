import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withModalShow = (Component) => {
  class WithModalShow extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        show: false
      };

      this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() {
      this.setState({show: !this.state.show});
    }

    render() {
      return (
        <Component
          {...this.props}
          onModalShow={this.handleBtnClick}
          modalShow={this.state.show}
        />
      );
    }
  }

  WithModalShow.propTypes = {
    onModalShow: PropTypes.func,
    modalShow: PropTypes.bool
  };

  return WithModalShow;
};

export default withModalShow;
