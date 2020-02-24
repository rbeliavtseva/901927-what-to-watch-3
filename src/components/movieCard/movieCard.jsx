import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../videoPlayer/videoPlayer.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };

    this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
    this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
  }

  toggleHoverState() {
    this.setState({isHovered: !this.state.isHovered});
  }

  handleCardMouseEnter() {
    setTimeout(
        () => {
          this.props.onMovieCardHover(this.props.movie);
          this.toggleHoverState();
        }, 1000
    );
  }

  handleCardMouseLeave() {
    this.props.onMovieCardHover();
    this.toggleHoverState();
  }

  render() {
    const {movie, className, onMovieCardClick} = this.props;

    return (
      <article className={`small-movie-card ` + className}
        onMouseEnter={this.handleCardMouseEnter}
        onMouseLeave={this.handleCardMouseLeave}>
        <Link to="/dev-film">
          <div className="small-movie-card__image" onClick={() => onMovieCardClick(movie.id)}>
            {this.state.isHovered ? <VideoPlayer movie={movie}/> : <img src={movie.poster} alt={movie.title} width="280" height="175"/>}
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
  onMovieCardHover: PropTypes.func.isRequired
};

export default MovieCard;
