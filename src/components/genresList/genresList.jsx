import React from "react";
import PropTypes from "prop-types";

const GenresList = ({activeIndex, onClick, onFilterButtonClick, genres}) => {

  const genreItems = genres.map((genre, index) => {
    return (
      <li className={`catalog__genres-item ${activeIndex === index ? `catalog__genres-item--active` : ``}`}
        onClick={() => {
          onClick(index);
          onFilterButtonClick(genres[index]);
        }}
        key={genre}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>
    );
  });

  return (
    <ul className="catalog__genres-list">
      {genreItems}
    </ul>
  );
};

GenresList.propTypes = {
  activeIndex: PropTypes.number,
  onClick: PropTypes.func,
  onFilterButtonClick: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired
};

export default GenresList;
