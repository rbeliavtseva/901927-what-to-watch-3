import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../videoPlayer/videoPlayer.jsx";

const MovieCard = ({movie, className, onMovieCardClick, isHovered, onMouseEnter, onMouseLeave}) => {
  return (
    <article className={`small-movie-card ` + className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <Link to="/dev-film">
        <div className="small-movie-card__image" onClick={() => onMovieCardClick(movie.id)}>
          {isHovered ? <VideoPlayer poster={movie.poster} videoSource={movie.preview} muted={true} autoPlay={true} /> : <img src={movie.poster} alt={movie.title} width="280" height="175"/>}
        </div>
      </Link>

      <h3 className="small-movie-card__title" onClick={() => onMovieCardClick(movie.id)}>
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
    preview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    fullMovie: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string,
  onMovieCardClick: PropTypes.func.isRequired,
  isHovered: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default MovieCard;
