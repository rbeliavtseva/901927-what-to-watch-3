import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movieCard/movieCard.jsx";
import withHoveredState from "../../hocs/with-hovered-state/with-hovered-state.js";

const MovieCardWrapped = withHoveredState(MovieCard);

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null
    };

    this.handleMovieCardHover = this.handleMovieCardHover.bind(this);
  }

  handleMovieCardHover(movie) {
    this.setState({hoveredCard: movie});
  }

  render() {
    const {films, onMovieCardClick, className} = this.props;

    const movieCards = films.map((movie) =>
      <MovieCardWrapped
        key={movie.id}
        movie={movie}
        className={`catalog__movies-card`}
        onMovieCardClick={onMovieCardClick}
        onMouseEnter={() => this.handleMovieCardHover(movie)}
        onMouseLeave={this.handleMovieCardHover}
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
