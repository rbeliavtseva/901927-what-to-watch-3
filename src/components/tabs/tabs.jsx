import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Tab from "../tab/tab.jsx";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tab) {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    const {
      handleClick,
      props: {
        children
      },
      state: {
        activeTab
      }
    } = this;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {children.map((child) => {
              const {label} = child.props;

              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={handleClick}
                />
              );
            })}
          </ul>
        </nav>
        <div>
          {children.map((child) => {
            return (
              child.props.label !== activeTab ? null : child.props.children
            );
          })}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};

export default Tabs;
