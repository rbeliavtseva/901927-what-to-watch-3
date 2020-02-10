import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({title, className}) => {
  return (
    <article className={`small-movie-card ` + className}>
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default MovieCard;
