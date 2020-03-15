import React from "react";
import PropTypes from "prop-types";

const GenresList = ({activeItem, onActiveItem, onFilterButtonClick, genres}) => {

  const genreItems = genres.map((genre, index) => {
    return (
      <li className={`catalog__genres-item ${(activeItem === genre) || (activeItem === null && index === 0) ? `catalog__genres-item--active` : ``}`}
        onClick={() => {
          onActiveItem(genre);
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
  activeItem: PropTypes.any,
  onActiveItem: PropTypes.func,
  onFilterButtonClick: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired
};

export default GenresList;
