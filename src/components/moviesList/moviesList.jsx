import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movieCard/movieCard.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null
    };
  }

  onMovieCardHoverHandler(movie) {
    this.setState({hoveredCard: movie});
  }

  render() {
    const {films, onMovieCardTitleClick, className} = this.props;

    const movieCards = films.map((movie, id) =>
      <MovieCard
        key={id}
        movie={movie}
        className={`catalog__movies-card`}
        onMovieCardTitleClick={onMovieCardTitleClick}
        onMovieCardHover={(film) => this.onMovieCardHoverHandler(film)}
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
  onMovieCardTitleClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default MoviesList;
