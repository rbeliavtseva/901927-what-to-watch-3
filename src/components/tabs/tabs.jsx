import React from "react";
import PropTypes from "prop-types";

const Tabs = ({children, activeIndex, onClick}) => {
  const labels = [`Overview`, `Details`, `Reviews`];

  const tabItems = children.map((_, index) => {
    return (
      <li className={`movie-nav__item ${activeIndex === index ? `movie-nav__item--active` : ``}`} onClick={() => onClick(index)} key={index}>
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
        {children.map((child, index) => {
          return (
            index !== activeIndex ? null : child.props.children
          );
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  activeIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Tabs;
