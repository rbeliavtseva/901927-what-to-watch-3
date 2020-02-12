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
    const {films, onMovieCardTitleClick} = this.props;

    const movieCards = films.map((movie, i) =>
      <MovieCard
        key={i}
        movie={movie}
        className={`catalog__movies-card`}
        onMovieCardTitleClick={onMovieCardTitleClick}
        onMovieCardHover={(film) => this.onMovieCardHoverHandler(film)}
      />
    );

    return (
      <div className="catalog__movies-list">
        {movieCards}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired
};

export default MoviesList;
