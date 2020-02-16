import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const MovieCard = ({movie, className, onMovieCardClick, onMovieCardHover, movieFullInfo}) => {
  return (
    <article className={`small-movie-card ` + className} onMouseEnter={() => onMovieCardHover(movie)}>
      <Link to="/dev-film">
        <div className="small-movie-card__image" onClick={() => onMovieCardClick(movieFullInfo)}>
          <img src={movie.poster} alt={movie.title} width="280" height="175"/>
        </div>
      </Link>

      <h3 className="small-movie-card__title" onClick={() => onMovieCardClick(movieFullInfo)}>
        <Link to="/dev-film" className="small-movie-card__link">{movie.title}</Link>
      </h3>

    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string,
  onMovieCardClick: PropTypes.func.isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  movieFullInfo: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.arrayOf.string,
    text: PropTypes.string,
    rating: PropTypes.number,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.number
  }).isRequired
};

export default MovieCard;
