import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movieCard/movieCard.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null
    };

    this.onMovieCardHoverHandler = this.onMovieCardHoverHandler.bind(this);
  }

  onMovieCardHoverHandler(movie) {
    this.setState({hoveredCard: movie});
  }

  render() {
    const {films, onMovieCardClick, className, movieFullInfo} = this.props;

    const movieCards = films.map((movie) =>
      <MovieCard
        key={movie.id}
        movie={movie}
        className={`catalog__movies-card`}
        onMovieCardClick={onMovieCardClick}
        onMovieCardHover={this.onMovieCardHoverHandler}
        movieFullInfo={movieFullInfo}
      />
    );

    return (
      <div className={className}>
        {movieCards}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    id: PropTypes.number
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  className: PropTypes.string,
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

export default MoviesList;
