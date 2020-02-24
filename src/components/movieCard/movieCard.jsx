import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../videoPlayer/videoPlayer.jsx";


class MovieCard extends PureComponent {
  render() {
    const {movie, className, onMovieCardClick, isVideoPlaying, handleCardMouseEnter, handleCardMouseLeave} = this.props;

    return (
      <article className={`small-movie-card ` + className}
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}>
        <Link to="/dev-film">
          <div className="small-movie-card__image" onClick={() => onMovieCardClick(movie.id)}>
            {isVideoPlaying ? <VideoPlayer movie={movie}/> : <img src={movie.poster} alt={movie.title} width="280" height="175"/>}
          </div>
        </Link>

        <h3 className="small-movie-card__title" onClick={() => onMovieCardClick(movie.id)}>
          <Link to="/dev-film" className="small-movie-card__link">{movie.title}</Link>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string,
  onMovieCardClick: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired,
  handleCardMouseEnter: PropTypes.func.isRequired,
  handleCardMouseLeave: PropTypes.func.isRequired
};

export default MovieCard;
