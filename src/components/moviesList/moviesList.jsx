import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movieCard/movieCard.jsx";
import withHoveredState from "../../hocs/with-hovered-state/with-hovered-state.js";
import ShowMore from "../showMore/showMore.jsx";

const MovieCardWrapped = withHoveredState(MovieCard);

const NUMBER_OF_ITEMS_SHOWN = 8;

const MoviesList = ({films, onMovieCardClick, className, timesLoaded, onClick, onActiveItem}) => {

  const isButtonShowing = (films.length / (NUMBER_OF_ITEMS_SHOWN * timesLoaded)) > 1;

  const movieCards = films
  .slice(0, NUMBER_OF_ITEMS_SHOWN * timesLoaded)
  .map((movie) =>
    <MovieCardWrapped
      key={movie.id}
      movie={movie}
      className={`catalog__movies-card`}
      onMovieCardClick={onMovieCardClick}
      onMouseEnter={() => onActiveItem(movie)}
      onMouseLeave={onActiveItem}
    />
  );

  return (
    <div>
      <div className={className}>
        {movieCards}
      </div>
      {isButtonShowing ? <ShowMore onShowMoreBtnClick={onClick}/> : null}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    id: PropTypes.number,
    preview: PropTypes.string
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  timesLoaded: PropTypes.number,
  onClick: PropTypes.func,
  onActiveItem: PropTypes.func
};

export default MoviesList;
