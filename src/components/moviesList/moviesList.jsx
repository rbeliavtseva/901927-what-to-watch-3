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
    const {films, onMovieCardClick, className} = this.props;

    const movieCards = films.map((movie) =>
      <MovieCard
        key={movie.id}
        movie={movie}
        className={`catalog__movies-card`}
        onMovieCardClick={onMovieCardClick}
        onMovieCardHover={this.onMovieCardHoverHandler}

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
    id: PropTypes.number,
    preview: PropTypes.string
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default MoviesList;
