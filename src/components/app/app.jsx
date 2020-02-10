import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const titleClickHandler = () => {};

const App = (props) => {
  return (
    <Main
      movie={props.movie}
      movieTitles={props.movieTitles}
      onMovieCardTitleClick={titleClickHandler}
    />
  );
};

App.propTypes = {
  movie: PropTypes.object.isRequired,
  movieTitles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
