import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Tab extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {label, onClick} = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    return (
      <li className={`movie-nav__item ${activeTab === label ? `movie-nav__item--active` : ``}`} onClick={onClick}>
        <a href="#" className="movie-nav__link">{label}</a>
      </li>
    );
  }
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Tab;
