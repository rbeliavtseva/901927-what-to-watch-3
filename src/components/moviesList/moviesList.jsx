import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movieCard/movieCard.jsx";

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
    this.setState({isHovered: this.toggleHoverState});
  }

  render() {
    const {films, onMovieCardClick, className} = this.props;

    const movieCards = films.map((movie) =>
      <MovieCard
        key={movie.id}
        movie={movie}
        className={`catalog__movies-card`}
        onMovieCardClick={onMovieCardClick}
        onMovieCardHover={this.handleMovieCardHover}
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
