import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({movie, className, onMovieCardTitleClick, onMovieCardHover}) => {
  return (
    <article className={`small-movie-card ` + className} onMouseEnter={() => onMovieCardHover(movie)}>
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={onMovieCardTitleClick}>
        <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  onMovieCardHover: PropTypes.func.isRequired
};

export default MovieCard;
