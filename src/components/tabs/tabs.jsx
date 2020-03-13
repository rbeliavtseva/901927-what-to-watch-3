import React from "react";
import PropTypes from "prop-types";

const Tabs = ({children, activeItem, onActiveItem}) => {
  const labels = [`Overview`, `Details`, `Reviews`];

  const tabItems = children.map((tab, index) => {
    return (
      <li className={`movie-nav__item ${(tab === activeItem) || (activeItem === null && index === 0) ? `movie-nav__item--active` : ``}`} onClick={() => onActiveItem(tab)} key={index}>
        <a href="#" className="movie-nav__link">{labels[index]}</a>
      </li>
    );
  });

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabItems}
        </ul>
      </nav>
      <div>
        {children.map((tab, index) => {
          return (
            (tab === activeItem) || (activeItem === null && index === 0) ? tab.props.children : null
          );
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  activeItem: PropTypes.any,
  onActiveItem: PropTypes.func.isRequired
};

export default Tabs;
